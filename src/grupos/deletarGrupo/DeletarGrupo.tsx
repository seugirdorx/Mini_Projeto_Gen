import React, { useEffect, useState } from 'react'
import { Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import './DeletarPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import GrupoPi from '../../components/models/modelgrupo/GrupoPi';
import { buscaId, deleteId } from '../../services/service';

function DeletarGrupo() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [grupo, setGrupoPi] = useState<GrupoPi>()


  async function findById(id: string) {
    buscaId(`/grupos/${id}`, setGrupoPi, {
    })
  }

  function sim() {
    navigate('/grupos')
    deleteId(`/grupos/${id}`, {

    });
    toast.success('Grupo deletado com sucesso', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
    });
  }

  function nao() {
    navigate('/grupos')
  }
  return (
    <Box m={2} className="container-delete-post">
      <Card variant="outlined" >
        <CardContent>
          <Box justifyContent="center">
            <Typography color="textSecondary" gutterBottom>
              Deseja deletar o grupo?:
            </Typography>
            <Typography color="textSecondary" >
              {grupo?.numeroGrupo}
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
            </Box>
            <Box>
              <Button onClick={nao} variant="contained" size='large' color="secondary">
                Não
              </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
export default DeletarGrupo;