import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import axios from 'axios';
import React, { useState, useEffect } from "react";

export default function CousesList(props){
    let [student, setStudent] = useState([])
    let API = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        axios.get(`${API}documentos/consultas/matriculas`,
        {params:{IdAluno: props.selectedStudent}})
        .then(res=>{setStudent(res.data); console.log(res.data);})
    },[])
    return(
        <Grid style={{borderRadius:'10px', padding:'5px', backgroundColor:'white'}}>
            <TableContainer style={{maxHeight:'70vh'}}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography>Matrícula</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>Curso</Typography>
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
                            <TableCell>
                                <Typography>Status</Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {student.map(item=>
                        <TableRow>
                            <TableCell>
                                <Typography>{item.numeroMatricula ? item.numeroMatricula : 'N/D'}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography>{item.idCurso}</Typography>
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
                                <Typography>{item.statusCursoDescricao}</Typography>
                            </TableCell>
                        </TableRow>
                            )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}