import { Grid, Table, TableContainer, TextField, TableBody, TableCell, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
            'Data matrícula' : matricula.dataMatricula,
            'Início curso' : matricula.inicioCurso,
            'Término' : matricula.terminoCurso,
            'Período' : matricula.periodo,
            'Data autorizada': matricula.dataPiso,
            'Data prescrição': matricula.dataPrescricao,
            'Usuário' : 'Juarez',
            'Status financeiro': matricula.statusFinanceiroDescricao,
            'Forma de pagamento': matricula.formaPagamentoDescricao,
            'Boleto': matricula.boleto,
            'Valor total': matricula.valorTotal,
            'Data pagamento' : matricula.dataPagamento,
            'Solicitação cancelamento': matricula.solicitacaoCancelamentoDescricao,
            'Enviar Material': matricula.envioMaterialDescricao,
            'Material didático':matricula.materialDidaticoDescricao,
            'Data postagem': matricula.dataPostagem,
            'Enviado para': matricula.materialEnviadoParaDescricao,
            'Status curso': matricula.statusCursoDescricao,
            'Data status': matricula.dataStatusCurso,
            'Certificado expedido': matricula.certificadoExpedido,
            'Data envio': matricula.certificadoEnviado,
            'Registro': matricula.registro,
            'Código de rastreio do material':'',
            'Código de rastreio do certificado':'',
            'Código de rastreio da prova':'',
            'Observações':matricula.observacoes
        }))
    },[matricula])  
    console.log(matricula);
    return(
        <Grid style={{backgroundColor:'white', borderRadius:'10px'}}>
            <TableContainer>
                <Table> 
                <Grid display={'grid'} gridTemplateColumns='1fr 1fr 1fr 1fr' padding={'2%'} >
                {Object.keys(data).map((item)=> {
                    return(
                    <TextField
                    style={{margin:'2%'}}
                    size='small'
                    value={data[item]}
                    label={[item]}
                    onChange={(e)=>setData((data)=>({...data, [item]: e.target.value}))} 
                    />)
                })}
                </Grid>
                </Table>
            </TableContainer>
        </Grid>
    )
}