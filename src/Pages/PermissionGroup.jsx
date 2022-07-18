import React from 'react'
import { Grid } from '@mui/material'
import { BiCheckbox, BiCheckSquare } from 'react-icons/bi'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function PermissionGroup() {
    let isDesktop = useMediaQuery('(min-width:800px)')
  return (
    <div className='flex justify-center p-4'>
        <Grid container spacing={2}>
            <Grid item xs={12} className='p-2' borderRadius={'12px'} md={6} bgcolor={'#ffff'}>
                <h2 className='text-center font-bold text-2xl'>Home</h2>
                <div className='flex flex-col'>
                    <div className='border-2 border-black flex justify-between p-2 rounded-xl'>
                        <h3 className='font-semibold text-xl'>Alertas do Dia</h3>
                        <div className='flex items-center'>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Consultar</span>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Editar</span>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Excluir</span>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Todos</span>
                        </div>
                    </div>

                    <div className='border-2 border-black mt-2 flex justify-between p-2 rounded-xl'>
                        <h3 className='font-semibold text-xl'>Alunos e Cursos</h3>
                        <div className='flex items-center'>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Consultar</span>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Editar</span>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Excluir</span>
                            <span className='flex items-center mr-4 text-lg'><BiCheckbox size={25}/>Todos</span>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    </div>
  )
}
