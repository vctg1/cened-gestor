import { Grid, TextField, MenuItem, useMediaQuery } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import {AiFillTag} from 'react-icons/ai'

export default function GenerateHangTags() {
    let isDesktop = useMediaQuery('(min-width:800px)')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={10}>
                <AiFillTag size={30}/>
                <h1 className='text-xl font-bold'>Gerar Etiquetas</h1>
            </Grid>
            <Grid item xs={10} md={3}>
                <TextField className='w-full' select label='UF'>
                        <MenuItem value="AC">Acre</MenuItem>
                        <MenuItem value="AL">Alagoas</MenuItem>
                        <MenuItem value="AP">Amapá</MenuItem>
                        <MenuItem value="AM">Amazonas</MenuItem>
                        <MenuItem value="BA">Bahia</MenuItem>
                        <MenuItem value="CE">Ceará</MenuItem>
                        <MenuItem value="DF">Distrito Federal</MenuItem>
                        <MenuItem value="ES">Espírito Santo</MenuItem>
                        <MenuItem value="GO">Goiás</MenuItem>
                        <MenuItem value="MA">Maranhão</MenuItem>
                        <MenuItem value="MT">Mato Grosso</MenuItem>
                        <MenuItem value="MS">Mato Grosso do Sul</MenuItem>
                        <MenuItem value="MG">Minas Gerais</MenuItem>
                        <MenuItem value="PA">Pará</MenuItem>
                        <MenuItem value="PB">Paraíba</MenuItem>
                        <MenuItem value="PR">Paraná</MenuItem>
                        <MenuItem value="PE">Pernambuco</MenuItem>
                        <MenuItem value="PI">Piauí</MenuItem>
                        <MenuItem value="RJ">Rio de Janeiro</MenuItem>
                        <MenuItem value="RN">Rio Grande do Norte</MenuItem>
                        <MenuItem value="RS">Rio Grande do Sul</MenuItem>
                        <MenuItem value="RO">Rondônia</MenuItem>
                        <MenuItem value="RR">Roraima</MenuItem>
                        <MenuItem value="SC">Santa Catarina</MenuItem>
                        <MenuItem value="SP">São Paulo</MenuItem>
                        <MenuItem value="SE">Sergipe</MenuItem>
                        <MenuItem value="TO">Tocantins</MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={10} md={4}>
                <TextField select className='w-full' label='Tipo de Etiqueta'>
                    <MenuItem value={1}>
                        Etiqueta Material
                    </MenuItem>

                    <MenuItem value={2}>
                        Etiqueta Prova
                    </MenuItem>

                    <MenuItem value={3}>
                        Etiqueta Correios (Destinatário)
                    </MenuItem>

                    <MenuItem value={4}>
                        Etiqueta Correios (Remetente)
                    </MenuItem>

                    <MenuItem value={5}>
                        Etiqueta Completa (DF)
                    </MenuItem>

                    <MenuItem value={6}>
                        Etiqueta Completa (Outras UFs)
                    </MenuItem>

                </TextField>
            </Grid>

            <Grid item xs={10} md={2}>
                <button className='bg-blue-400 w-full hover:bg-blue-600 transition-colors text-white p-3 text-xl font-bold rounded-xl'><SearchIcon/> Buscar</button>
            </Grid>

            <Grid item xs={20} md={10}>
                <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
            </Grid>
        </Grid>
    </div>
  )
}