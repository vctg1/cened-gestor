import { Grid, Table, TableContainer, TextField, TableBody, TableCell } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Course(){
    let [data, setData] = useState({})
    let API = process.env.REACT_APP_API_KEY
    let [matricula, setMatricula] = useState([])
    let idMatricula = window.localStorage.getItem('matricula');
    useEffect(()=>{
        axios.get(`${API}matriculas/${idMatricula}`)
        .then(res=>{setMatricula(res.data)})
        console.log('matricula',matricula);
    },[])
    useEffect(()=>{setData(matricula)},[matricula])
    return(
        <Grid style={{backgroundColor:'white', borderRadius:'10px'}}>
            <TableContainer>
                <Table> 
                <TableBody>
                {Object.keys(matricula).map((item, key)=> {
                    return(
                    <TextField
                    style={{margin:'1%'}} 
                    value={data[item]}
                    label={[item]}
                    onChange={(e)=>setData((data)=>({...data, [item]: e.target.value}))} 
                    />)
                })}
                </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    )
}