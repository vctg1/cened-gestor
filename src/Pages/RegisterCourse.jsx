import { FormControl, Grid, MenuItem, TextField } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AppTextField from '../Components/input-fields/AppTextField'
import SlateEditor from '../Components/SlateEditor/Editor'
import {AiFillBook} from 'react-icons/ai'

export default function RegisterCourse() {
    const [codeCourse, setCodeCourse] = useState('')
    const [nameCourse, setNameCourse] = useState('')
    const [workloadCourse, setWorkloadCourse] = useState('')
    const [valueCourse, setValueCourse] = useState('')
    const [rateCourse, setRateCourse] = useState('')
    const [valueTotalCourse, setValueTotalCourse] = useState('')
    const [activeCourse, setActiveCourse] = useState('')
    const [contentCourse, setContentCourse] = useState('')

    useEffect(()=>{
        console.log(contentCourse)
    }, [contentCourse])
    return (
        <div className='flex justify-center bg-white p-4 rounded-xl'>
            <Grid className='' marginLeft={'10%'} container spacing={2}>
                <Grid className='flex items-center' item xs={20} md={12}>
                    <AiFillBook size={30}/>
                    <h1 className='text-xl font-bold'>Novo Curso CENED</h1>
                </Grid>
                <Grid item xs={10} md={1.5}>
                    <TextField onChange={(e)=> setCodeCourse(e.target.value)} value={codeCourse} type="number" label="Código"/>
                </Grid>

                <Grid item xs={10} md={8.5}>
                    <TextField className='w-full' onChange={(e)=> setNameCourse(e.target.value)} value={nameCourse} type="text" label="Nome do Curso"/>
                </Grid>
                <Grid item xs={10} md={2}>

                </Grid>
                <Grid item xs={10} md={2}>
                    <AppTextField  onInput = {(e) =>{e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,5)}}  onChange={(e)=> setWorkloadCourse(e.target.value)}  value={workloadCourse} type="number" label="Carga Horária"/>
                </Grid>

                <Grid item xs={6} md={2}>
                    <AppTextField onChange={(e)=> setValueCourse(e.target.value)}  value={valueCourse} type="number" label="Valor"/>
                </Grid>

                <Grid item xs={6} md={2}>
                    <AppTextField onChange={(e)=> setRateCourse(e.target.value)}  value={rateCourse} type="number" label="Taxa"/>
                </Grid>

                <Grid item xs={6} md={2}>
                    <AppTextField onChange={(e)=> setValueTotalCourse(e.target.value)}  value={valueTotalCourse} disabled type="number" label="Valor Total"/>
                </Grid>

                <Grid item xs={8} md={3}>
                    <TextField onChange={(e)=> setActiveCourse(e.target.value)} value={activeCourse} className='w-1/2 bg-white border-none outline-none rounded-xl' select label='Ativo'>
                        <MenuItem value={true}>
                            Sim
                        </MenuItem>

                        <MenuItem value={false}>
                            Não
                        </MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={20} md={10}>
                    <SlateEditor setContentCourse={setContentCourse}/>
                </Grid>
            </Grid>
        </div>
    )
}
