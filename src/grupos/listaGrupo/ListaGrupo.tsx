import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import GrupoPi from '../../components/models/modelgrupo/GrupoPi';
import { busca } from '../../services/service';

function ListaGrupo() {

    const [grupo, setGrupoPi] = useState<GrupoPi[]>([])
    let navigate = useNavigate();

    async function getGrupo() {
        await busca("/grupos", setGrupoPi, {
        })
    }

    useEffect(() => {

        getGrupo()

    }, [grupo.length])

    return (
        <Box className='container-list-post'>

            <Typography className='postTitle' variant="h3" color="textSecondary" component="h1" align="center" >Grupos</Typography>

            {grupo.length <= 0 &&
                <Box className="fundoPostagem">
                    <img src="https://i.pinimg.com/originals/a9/ff/d7/a9ffd714fbd4966d46ef4ee77ce96e95.gif" alt="" />
                </Box>
            }

            {
                grupo.map(grupo => (
                    <Box m={2} className="eachPost">
                        <Card variant="outlined" className='card'>
                            <Box className="user-list-post">
                            </Box>

                            <Box className="content-list-post">
                                <CardContent className="card-content">

                                    <Box className="boxCard">
                                        <Box>
                                            <Typography variant="h5" component="h2" className='titulo-list-post'>
                                                {grupo.numeroGrupo}
                                            </Typography>
                                            <Typography variant="body2" component="p" className="conteudo">
                                                {grupo.maisInfos}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {grupo.turma?.descricao}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {grupo.turma?.isAtivo}
                                            </Typography>
                                        </Box>
                                    </Box>

                                </CardContent>

                                <CardActions>

                                    <Box display="flex" justifyContent="center" mb={1.5} className="actions-list-post">

                                        <Link to={`/formularioGrupo/${grupo.id}`} className="text-decorator-none" >
                                            <Box mx={1}>
                                                <Button variant="contained" className="marginLeft buttonBox" size='small' color="primary" >
                                                    atualizar
                                                </Button>
                                            </Box>
                                        </Link>
                                        <Link to={`/deletarPostagem/${grupo.id}`} className="text-decorator-none">
                                            <Box mx={1}>
                                                <Button variant="contained" size='small' color="secondary" className="buttonBox">
                                                    deletar
                                                </Button>
                                            </Box>
                                        </Link>
                                    </Box>

                                </CardActions>
                            </Box>
                        </Card>
                    </Box >
                ))
            }
        </Box >
    )
}

export default ListaGrupo;