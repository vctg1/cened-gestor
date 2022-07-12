import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import {IoDocumentTextSharp} from 'react-icons/io5'
import {TextField, MenuItem} from '@mui/material'
import { useState } from 'react'

export default function TestGroups() {
    let isDesktop = useMediaQuery('(min-width:800px)')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
            <Grid container marginLeft={`${isDesktop ? '10%' : '0'}`} spacing={2}>
                <Grid className='flex items-center' item xs={20} md={10}>
                    <IoDocumentTextSharp size={30}/>
                    <h1 className='text-xl font-bold'>Novo Grupo de Prova</h1>
                </Grid>
                
                <Grid item xs={8} md={9}>
                    <TextField className='w-full' label='Nome'/>
                </Grid>

                <Grid item xs={8} md={2}>
                    <TextField select className='w-full' label='Ativo'>
                        <MenuItem value={true}>
                            Sim
                        </MenuItem>

                        <MenuItem value={false}>
                            Não
                        </MenuItem>
                    </TextField>
                </Grid>

                <Grid item xs={10} md={12}>
                    <h2 className='text-base lg:text-xl font-bold'>Tipos de Prova: </h2>
                </Grid>

                <Grid item xs={10} md={3}>
                    <TextField className='w-full' label='Prova 1'/>
                </Grid>

                <Grid item xs={10} md={3}>
                    <TextField className='w-full' label='Prova 2'/>
                </Grid>
                <Grid item xs={10} md={6}>

                </Grid>
                <Grid item xs={10} md={3}>
                    <TextField className='w-full' label='Prova 3'/>
                </Grid>

                <Grid item xs={10} md={3}>
                    <TextField className='w-full' label='Prova 4'/>
                </Grid>

                <Grid item xs={20} md={10}>
                    <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                    <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
                </Grid>
            </Grid>
    </div>
  )
}
