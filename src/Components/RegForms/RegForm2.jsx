import { MenuItem, TextField } from '@mui/material';
import React from 'react';
import InputMask from 'react-input-mask';


export default function RegForm2({data, setData}){
    return(
        <div id='Form2'>
                        <TextField onChange={(e) => setData((data)=>({...data, 'nomePreposto':e.target.value.toUpperCase()}))} value={data.nomePreposto} style={{margin:'1%'}} variant="outlined" label='Nome do Responsável (seu nome)' className='nome' id='nomePreposto'></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, 'sexoPreposto':e.target.value}))} value={data.sexoPreposto} select style={{margin:'1%'}} variant="outlined" label='Sexo' className='sexo' id='sexoPreposto'><MenuItem value={1}>M</MenuItem><MenuItem value={2}>F</MenuItem></TextField>
                        <TextField onChange={(e) => setData((data)=>({...data, 'vinculo':e.target.value}))} select value={data.vinculo} style={{margin:'1%'}} variant="outlined" label='Vínculo' className='inputs' id='vinculoPreposto'>
                        <MenuItem value={1}>Familiar</MenuItem><MenuItem value={2}>Advogado</MenuItem><MenuItem value={3}>Visitante</MenuItem><MenuItem value={4}>Núcleo de Ensino Penitenciário</MenuItem><MenuItem value={5}>Agente Penitenciário</MenuItem><MenuItem value={6}>Pedagogo Penitenciário</MenuItem></TextField>
                        <InputMask mask='999.999.999-99' maskChar={''} onChange={(e) => setData((data)=>({...data, 'cpfPreposto':e.target.value}))} value={data.cpfPreposto} id='cpfPreposto'>{() => <TextField style={{margin:'1%'}} label='CPF' className='inputs'  />}</InputMask>
                        <InputMask mask="999999999999999" maskChar={''} onChange={(e) => setData((data)=>({...data, 'rgPreposto':e.target.value}))} value={data.RgPreposto}  id='rgPreposto'>{() => <TextField variant="outlined" label='RG' className='inputs' style={{margin:'1%'}}/>}</InputMask>
                        <TextField onChange={(e) => setData((data)=>({...data, 'orgaoExpedidorPreposto':e.target.value.toUpperCase()}))} value={data.orgaoExpedidorPreposto} style={{margin:'1%'}} variant="outlined" label='Órgão Expedidor' className='inputs' id='orgExpPreposto'></TextField>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data, 'celular':e.target.value}))} value={data.celular} maskChar={''} id='celular' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Celular' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data, 'foneResidencial':e.target.value}))} value={data.foneResidencial} maskChar={''} id='foneResidPreposto' >{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Residencial' className='inputs'/>}</InputMask>
                        <InputMask mask="(99)99999-9999" onChange={(e) => setData((data)=>({...data, 'foneComercial':e.target.value.toUpperCase()}))} value={data.foneComercial} maskChar={''} id='foneTrapPreposto'>{() => <TextField style={{margin:'1%'}} variant="outlined" label='Fone Trabalho' className='inputs'/>}</InputMask>

                        <TextField refs='email' type='email' onChange={(e) => setData((data)=>({...data, 'email':e.target.value.toUpperCase()}))} value={data.email} placeholder="email@example.com" style={{margin:'1%'}} variant="outlined" label='Email' className='email' id='emailPreposto'></TextField>  
                    </div>
    )
}