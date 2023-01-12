import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom';
import { findByDisplayValue } from '@testing-library/react';
import { backdropClasses } from '@mui/material';
import { useSelector } from 'react-redux';
import Turma from '../../components/models/Turma';
import { buscaId, post } from '../../services/service';


function CadastroTurmas() {
    let navigate = useNavigate();
    const { id } = useParams <{id: string}>()
    const [turma,setTurma] = useState<Turma>({
        id: 0,
        descricao: '',
        isAtivo: 
    });

    async function findById(id: string){
        buscaId(`/turmas/${id}`,setTurma,{
            headers: {
                'Authorization': token
            }
        })
    }

async function onSubmit(e: ChangeEvent<HTMLFormElement>){
    e.preventDefault()
    console.log("Turmas" + JSON.stringify(Turmas))

    if(id !== undefined){
    console.log(Turmas)
    put(`/Turmas`, Turmas, setTurmas,{
        headers:{
            'Authorization': token
        }
    })
    alert ('Turmas atualizado com sucesso')
}else{
    post(`/Turmas`, Turmas, setTurmas,{
        headers: {
            'Authorization': token
        }
    })
    alert('Turmas cadastrado com sucesso')
}
back()
}
function back(){
    navigate('/Turmass')
}

function updateTurmas(e: ChangeEvent<HTMLInputElement>){
    setTurmas({
        ...Turmas,
        [e.target.name]: e.target.value
    })
}



    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}> 
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro Turmas</Typography>
                <TextField value={Turmas.descricao} onChange={(e: ChangeEvent<HTMLInputElement>)=> updateTurmas(e)} id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTurmas;