import { Grid, Table, TableContainer, TextField, TableBody, TableCell, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Course(){
    let [data, setData] = useState({})
    let [fields, setFields] = useState(['numeroMatricula', 'curso', ''])
    let API = process.env.REACT_APP_API_KEY
    let [matricula, setMatricula] = useState(JSON.parse(window.localStorage.getItem('matricula')))
    useEffect(()=>{setData(matricula)},[matricula])
    console.log('matricula',matricula);
    return(
        <Grid style={{backgroundColor:'white', borderRadius:'10px'}}>
            <TableContainer>
                <Table> 
                <Box display={'grid'} gridTemplateColumns='1fr 1fr 1fr 1fr' justifyContent={'center'} >
                {Object.keys(matricula).map((item)=> {
                    return(
                    <TextField
                    style={{margin:'4%'}} 
                    value={data[item]}
                    label={[item]}
                    onChange={(e)=>setData((data)=>({...data, [item]: e.target.value}))} 
                    />)
                })}
                </Box>
                </Table>
            </TableContainer>
        </Grid>
    )
}