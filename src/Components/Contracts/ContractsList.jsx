import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, Box } from "@mui/material";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import FlexBox from '../flexbox/FlexBox'
import { KeyboardReturn } from "@mui/icons-material";



export default function ContractsList(){
    let [selectedStudent, setSelectedStudent] = useState(null|sessionStorage.getItem('student'));
    let falseCourses = [
    {
    curso:{codigo:123}, 
    dataMatricula:"2018-03-05T00:00:00", 
    inicioCurso: "2018-03-13T00:00:00", 
    terminoCurso:"2018-05-14T00:00:00",
    dataPiso:"2018-04-27T00:00:00",
    statusFinanceiroDescricao:"Pago",
    statusCursoDescricao:"Aprovado"
    },
    {    
    curso:{codigo:312},  
    dataMatricula:"2018-07-01T00:00:00", 
    inicioCurso: "2018-07-17T00:00:00", 
    terminoCurso:"2018-09-26T00:00:00",
    dataPiso:"2018-08-31T00:00:00",
    statusFinanceiroDescricao:"Aguardando pagamento",
    statusCursoDescricao:null
    },
    ]
    const Navigate = useNavigate();
    let [contratos, setContratos] = useState([])
    let [idMatricula, setIdMatricula] = useState();
    let API = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        axios.get(`${API}documentos/consultas/matriculas`,
        {params:{IdAluno: selectedStudent}})
        .then(res=>{setContratos(res.data)});
    },[selectedStudent])
    useEffect(()=>{
        if(idMatricula){
        contratos.map((item)=>{
            if(item.idMatricula === idMatricula){
            sessionStorage.setItem('matricula', JSON.stringify(item))
        }})
        Navigate('editar');
    }
    },[idMatricula])
    return(
        <Grid style={{borderRadius:'10px', padding:'5px', backgroundColor:'white'}}>
            <TableContainer style={{maxHeight:'70vh'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography>Contrato/Curso</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Data matrícula</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Início</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Término</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Data autorizada</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Financeiro</Typography>
                            </TableCell>
                            <TableCell colSpan={2}>
                                <Typography>Status</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    {contratos.map(item=>
                    <TableBody>
                        <FlexBox alignItems={'center'} >
                            <Typography style={{backgroundColor:'lightgreen'}} borderRadius='10px' margin='2%' padding={`4%`} >{item.numeroMatricula ? item.numeroMatricula : 'N/D'}</Typography>
                            <Button style={{height:'fit-content'}} onClick={()=>{setIdMatricula(item.idMatricula)}} ><EditIcon/></Button>
                        </FlexBox>
                            {falseCourses.map(item=>
                                <TableRow>
                            <TableCell>
                                <Typography>{item.curso && item.curso.codigo}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{new Date(item.dataMatricula).toLocaleDateString('pt-BR')}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.inicioCurso ? new Date(item.inicioCurso).toLocaleDateString('pt-BR'):'N/D'}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.terminoCurso ? new Date(item.terminoCurso).toLocaleDateString('pt-BR'):'N/D'}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.dataPiso ? new Date(item.dataPiso).toLocaleDateString('pt-BR'):'N/D'}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.statusFinanceiroDescricao}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.statusCursoDescricao ? item.statusCursoDescricao : 'N/D'}</Typography>
                            </TableCell>
                        </TableRow>
                        )}
                    </TableBody>
                    )}
                </Table>
            </TableContainer>
            <Button onClick={()=>{window.history.back()}}>Voltar<KeyboardReturn/></Button>
        </Grid>
    )
}