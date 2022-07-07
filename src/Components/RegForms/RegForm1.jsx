import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import InputMask from 'react-input-mask';


export default function RegForm1({data, setData}){
    let formatCharsYear = {'Y': '[0-9]','m': '[0-1]','M': '[0-9]','d': '[0-3]','D': '[0-9]'};
    let uf = [{value:1,txt:'Acre'}, 
    {value:2, txt:'Alagoas'}, {value:3, txt:'Amapá'}, 
    {value:4, txt:'Amazonas'}, {value:5, txt:'Bahia'}, 
    {value:6, txt:'Ceará'}, {value:7, txt:'Distrito Federal'}, 
    {value:8, txt:'Espírito Santo'}, {value:9, txt:'Goiás'}, 
    {value:10,txt:'Maranhão'}, {value:11,txt:'Mato Grosso'}, 
    {value:12,txt:'Mato Grosso do Sul'}, {value:13,txt:'Minas Gerais'}, 
    {value:14,txt:'Minas Gerais'}, {value:15,txt:'Paraíba'}, {value:16,txt:'Paraná'}, 
    {value:17,txt:'Pernambuco'}, {value:18,txt:'Piauí'}, {value:19,txt:'Rio de Janeiro'}, 
    {value:20,txt:'Rio Grande do Norte'}, {value:21,txt:'Rio Grande do Sul'}, 
    {value:22,txt:'Rondônia'}, {value:23,txt:'Roraima'}, {value:24,txt:'Santa Catarina'}, 
    {value:25,txt:'São Paulo'}, {value:26,txt:'Sergipe'}, 
    {value:27,txt:'Tocantins'}];
    return(
        <div id='Form1'>
                        <TextField onChange={(e) => setData((data)=>({...data,'nome':e.target.value.toUpperCase()}))} value={data.nome} style={{margin:'1%'}} variant="outlined" label='Nome' className='nome' id='nome'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'sexo':e.target.value}))} value={data.sexo} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='Sexo'><MenuItem value={1}>M</MenuItem><MenuItem value={2}>F</MenuItem></TextField>
                        <InputMask mask="999.999.999-99" maskChar={''} onChange={(e) => setData((data)=>({...data,'cpf':e.target.value}))} value={data.cpf} id='cpf' >{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'/>}</InputMask>
                        <InputMask mask="999999999999999" maskChar={''} onChange={(e) => setData((data)=>({...data,'rg':e.target.value}))} value={data.rg} id='Identidade'>{() => <TextField style={{margin:'1%'}} label='Identidade' className='inputs'  />}</InputMask>
                        <TextField onChange={(e) => setData((data)=>({...data,'orgaoExpedidor':e.target.value.toUpperCase()}))} value={data.orgaoExpedidor} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgaoExpedidor'></TextField>

                        <InputMask mask='dD/mM/YYYY' maskChar={''} formatChars={formatCharsYear} onChange={(e) => setData((data)=>({...data,'dataNascimento':e.target.value.toUpperCase()}))} value={data.dataNascimento} id='dataNascimento'>{() => <TextField label='Data Nascimento' className='inputs' style={{margin:'1%'}} />}</InputMask>
                        
                        <TextField onChange={(e) => setData((data)=>({...data,'naturalidade':e.target.value.toUpperCase()}))} value={data.naturalidade} style={{margin:'1%'}} variant="outlined" label='Naturalidade' className='inputs' id='naturalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'ufNaturalidade':e.target.value}))} value={data.ufNaturalidade} select style={{margin:'1%'}} variant="outlined" label="UF Naturalidade" className='inputs' id='ufNaturalidade'>
                        {uf.map((item)=><MenuItem value={item.value}>{item.txt}</MenuItem>)}</TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'nacionalidade':e.target.value.toUpperCase()}))} value={data.nacionalidade} style={{margin:'1%'}} variant="outlined" label='Nacionalidade' className='inputs' id='nacionalidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'endereco':e.target.value.toUpperCase()}))} value={data.endereco} style={{margin:'1%'}} variant="outlined" label='Endereço Residencial' className='EnderecoResidencial' id='EnderecoResidencial'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'bairro':e.target.value.toUpperCase()}))} value={data.bairro} style={{margin:'1%'}} variant="outlined" label='Bairro' className='inputs' id='Bairro'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'cidade':e.target.value.toUpperCase()}))} value={data.cidade} style={{margin:'1%'}} variant="outlined" label='Cidade' className='inputs' id='Cidade'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'ufResidencial':e.target.value}))} value={data.ufResidencial} select style={{margin:'1%'}} variant="outlined" label='UF Residencial' className='inputs' id='ufResidencial'>
                        {uf.map(item=><MenuItem value={item.value}>{item.txt}</MenuItem>)}</TextField>
                        <InputMask mask="99999-999" maskChar={''} onChange={(e) => setData((data)=>({...data,'cep':e.target.value.toUpperCase()}))} value={data.cep} id='CEP' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='CEP' className='inputs' />}</InputMask>          
                        <TextField onChange={(e) => setData((data)=>({...data,'grauInstrucao':e.target.value.toUpperCase()}))} value={data.grauInstrucao} style={{margin:'1%'}} variant="outlined" label='Grau de Instrução' className='inputs' id='grauDeInstrucao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'profissao':e.target.value.toUpperCase()}))} value={data.profissao} style={{margin:'1%'}} variant="outlined" label='Profissão/Cargo/Função' className='inputs' id='profissao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'atuacaoHabilitacao':e.target.value.toUpperCase()}))} value={data.atuacaoHabilitacao} style={{margin:'1%'}} variant="outlined" label='Área de Atuação/Habilitação' className='inputs' id='habilitacao'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data,'pai':e.target.value.toUpperCase()}))} value={data.pai} style={{margin:'1%'}} variant="outlined" label='Pai' className='pai' id='pai'></TextField>  
                        <TextField onChange={(e) => setData((data)=>({...data,'mae':e.target.value.toUpperCase()}))} value={data.mae} style={{margin:'1%'}} variant="outlined" label='Mãe' className='mae' id='mae'></TextField>  
            </div>
    )
}