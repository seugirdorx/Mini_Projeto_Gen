import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { toast } from 'react-toastify';
import Turma from '../../components/models/Turma';
import GrupoPi from '../../components/models/modelgrupo/GrupoPi';
import { busca, buscaId, post, put } from '../../services/service';


function CadastroGrupo() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [turma, setTurma] = useState<Turma[]>([])


    const [turma, setTurma] = useState<Turma>(
        {
            id: 0,
            descricao: '',
            isAtivo: 
        })
    const [grupo, setGrupoPi] = useState<GrupoPi>({
        id: 0,
        numeroGrupo: '',
        maisInfos: '',
        turma: null
    })

    useEffect(() => {
        setGrupoPi({
            ...grupo,
            turma: turma
        })
    }, [turma])

    useEffect(() => {
        getTurma()
        if (id !== undefined) {
            findByIdGrupo(id)
        }
    }, [id])

    async function getTurma() {
        await busca("/turmas", setTurma, {

        })
    }

    async function findByIdGrupo(id: string) {
        await buscaId(`grupos/${id}`, setGrupoPi, {

        })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setGrupoPi({
            ...grupo,
            [e.target.name]: e.target.value,
            turma: turma
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/grupos`, grupo, setGrupoPi, {
            })

            toast.success('Grupo atualizado com sucesso', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/grupos`, grupo, setGrupoPi, {
            })

            toast.success('Grupo cadastrado com sucesso', {
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
        back()

    }

    function back() {
        navigate('/postagem')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Cadastrar Grupo</Typography>
                <TextField value={grupo.numeroGrupo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="numero" label="número do grupo" variant="outlined" name="numero" margin="normal" fullWidth />
                <TextField value={grupo.maisInfos} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} id="maisInfos" label="mais informações do grupo" name="maisInfos" variant="outlined" margin="normal" fullWidth />


                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Turma </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/turmas/${e.target.value}`, setTurma, {
                    
                        })}>
                        {
                            turmas.map(turma => (
                                <MenuItem value={turma.id}>{turma.descricao}, {turma.isAtivo} </MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma turma para o grupo:</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroGrupo;