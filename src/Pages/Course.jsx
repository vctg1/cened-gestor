import { Grid, Table, TableContainer, TextField, TableBody, TableCell, Box, Typography, TableRow, TableHead } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { ptBR } from 'date-fns/locale';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function Course(){
    let [data, setData] = useState({})
    let API = process.env.REACT_APP_API_KEY
    let [matricula, setMatricula] = useState(JSON.parse(window.localStorage.getItem('matricula')))
    useEffect(()=>{
        setData((data)=>({
            'Nº Matrícula': matricula.numeroMatricula,
            'Curso': matricula.curso.codigo,
            'C.H': matricula.curso.cargaHoraria,
            'Valor': matricula.curso.valor,
            'Representante' : matricula.representante,
            'Início curso' : new Date(matricula.inicioCurso),
            'Término' : new Date(matricula.terminoCurso),
            'Período' : matricula.periodo,
            'Data autorizada': new Date(matricula.dataPiso),
            'Data prescrição': new Date(matricula.dataPrescricao),
            'Usuário' : 'Juarez',
            'Data matrícula' : new Date(matricula.dataMatricula),
            'Status financeiro': matricula.statusFinanceiroDescricao,
            'Forma de pagamento': matricula.formaPagamentoDescricao,
            'Boleto': matricula.boleto,
            'Valor total': matricula.valorTotal,
            'Data pagamento' : new Date(matricula.dataPagamento),
            'Solicitação cancelamento': matricula.solicitacaoCancelamentoDescricao,
            'Enviar Material': matricula.envioMaterialDescricao,
            'Material didático':matricula.materialDidaticoDescricao,
            'Data postagem': new Date(matricula.dataPostagem),
            'Enviado para': matricula.materialEnviadoParaDescricao,
            'Status curso': matricula.statusCursoDescricao,
            'Data status': new Date(matricula.dataStatusCurso),
            'Certificado expedido': new Date(matricula.certificadoExpedido),
            'Data envio': new Date(matricula.certificadoEnviado),
            'Registro': matricula.registro,
            'Código de rastreio do material':'',
            'Código de rastreio do certificado':'',
            'Código de rastreio da prova':'',
            'Observações':matricula.observacoes
        }))
    },[matricula])
    console.log(data);
    return(
        <Grid style={{backgroundColor:'white', borderRadius:'10px'}}>
            <TableContainer>
                <Table> 
                    <TableRow>
                        <Typography color={'black'} fontWeight='bold' padding={'2%'} paddingBottom='0' >DADOS DO CURSO</Typography>
                    </TableRow>
                        <Grid display={'grid'} gridTemplateColumns='1fr 1fr 1fr 1fr 1fr' padding={'2%'} >
                        {Object.keys(data).slice(0,11).map((item)=> {
                            if(data[item] instanceof Date){
                                return(
                                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR} >
                                    <DesktopDatePicker
                                    label={item}
                                    inputFormat="dd/MM/yyyy"
                                    value={data[item]}
                                    onChange={(e)=>setData((data)=>({...data, item: e}))}
                                    renderInput={(params) => <TextField {...params} 
                                    InputLabelProps={{
                                        style: { fontWeight: 'bold'},
                                    }} 
                                    style={{margin:'2%'}} size='small' />}
                                    />
                                    </LocalizationProvider>
                                )
                            }
                            else{
                                return(
                                <TextField
                                InputLabelProps={{
                                    style: { fontWeight: 'bold'},
                                }}
                                style={{margin:'2%'}}
                                size='small'
                                value={data[item]}
                                label={item}
                                onChange={(e)=>setData((data)=>({...data, [item]: e.target.value}))} 
                                />
                                )
                            }                    
                        })}
                        </Grid>
                        <TableRow>
                        <Typography color={'black'} fontWeight='bold' paddingLeft={'2%'}>FINANCEIRO</Typography>
                        </TableRow>
                        <Grid display={'grid'} gridTemplateColumns='1fr 1fr 1fr 1fr 1fr' padding={'2%'} >
                        {Object.keys(data).slice(12,17).map((item)=> {
                            if(data[item] instanceof Date){
                                return(
                                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR} >
                                    <DesktopDatePicker
                                    label={item}
                                    inputFormat="dd/MM/yyyy"
                                    value={data[item]}
                                    onChange={(e)=>setData((data)=>({...data, item: e}))}
                                    renderInput={(params) => <TextField {...params} 
                                    InputLabelProps={{
                                        style: { fontWeight: 'bold'},
                                    }}
                                    style={{margin:'2%'}} size='small' />}
                                    />
                                    </LocalizationProvider>
                                )
                            }
                            else{
                                return(
                                <TextField
                                InputLabelProps={{
                                    style: { fontWeight: 'bold'},
                                }}
                                style={{margin:'2%'}}
                                size='small'
                                value={data[item]}
                                label={item}
                                onChange={(e)=>setData((data)=>({...data, [item]: e.target.value}))} 
                                />
                                )
                            }                    
                        })}
                        </Grid>
                        <TableRow>
                        <Typography color={'black'} fontWeight='bold' paddingLeft={'2%'}>PROCEDIMENTOS GERAIS</Typography>
                        </TableRow>
                        <Grid display={'grid'} gridTemplateColumns='1fr 1fr 1fr 1fr 1fr' padding={'2%'} >
                        {Object.keys(data).slice(18,30).map((item)=> {
                            if(data[item] instanceof Date){
                                return(
                                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR} >
                                    <DesktopDatePicker
                                    label={item}
                                    inputFormat="dd/MM/yyyy"
                                    value={data[item]}
                                    onChange={(e)=>setData((data)=>({...data, item: e}))}
                                    renderInput={(params) => <TextField {...params} 
                                    InputLabelProps={{
                                        style: { fontWeight: 'bold'},
                                    }}
                                    style={{margin:'2%'}} size='small' />}
                                    />
                                    </LocalizationProvider>
                                )
                            }
                            else{
                                return(
                                <TextField
                                InputLabelProps={{
                                    style: { fontWeight: 'bold'},
                                }}
                                style={{margin:'2%'}}
                                size='small'
                                value={data[item]}
                                label={item}
                                onChange={(e)=>setData((data)=>({...data, [item]: e.target.value}))} 
                                />
                                )
                            }                    
                        })}
                        </Grid>
                        <Grid padding={'2%'} width='100%'>
                        <TextField
                        InputLabelProps={{
                            style: { fontWeight: 'bold'},
                        }}
                        fullWidth
                        size='small'
                        multiline
                        rows={4}
                        value={data.Observações}
                        label={'Observações'}
                        onChange={(e)=>setData((data)=>({...data, 'Observações': e.target.value}))} 
                        />
                        </Grid>
                </Table>
            </TableContainer>
        </Grid>
    )
}