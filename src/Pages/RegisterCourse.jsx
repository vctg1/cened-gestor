import { FormControl, Grid, MenuItem, TextField } from '@mui/material'
import React, {useState, useEffect} from 'react'
import InputBasic from '../Components/input-fields/InputBasic'
import SlateEditor from '../Components/SlateEditor/Editor'


export default function RegisterCourse() {
    const [codeCourse, setCodeCourse] = useState('')
    const [nameCourse, setNameCourse] = useState('')
    const [workloadCourse, setWorkloadCourse] = useState('')
    const [valueCourse, setValueCourse] = useState('')
    const [rateCourse, setRateCourse] = useState('')
    const [valueTotalCourse, setValueTotalCourse] = useState('')
    const [activeCourse, setActiveCourse] = useState('')

    useEffect(()=>{
        console.log(`Código: ${codeCourse}, Nome: ${nameCourse}, Carga: ${workloadCourse}, Valor: ${valueCourse}, Taxa: ${rateCourse}, Total: ${valueTotalCourse}, Ativo: ${activeCourse}`)
    }, [codeCourse, nameCourse, workloadCourse, valueCourse, rateCourse, valueTotalCourse, activeCourse])
    return (
        <FormControl>
            <Grid container spacing={4}>
                <Grid item xs={10} md={4}>
                    <FormControl className='w-full'>
                        <InputBasic onChange={(e)=> setCodeCourse(e.target.value)} value={codeCourse} type="number" placeholder="Código"/>
                    </FormControl>
                </Grid>

                <Grid item xs={10} md={6}>
                    <FormControl className='w-full'>
                        <InputBasic onChange={(e)=> setNameCourse(e.target.value)}  value={nameCourse} type="text" placeholder="Nome do Curso"/>
                    </FormControl>
                </Grid>

                <Grid item xs={10} md={4}>
                    <FormControl className='w-full'>
                        <InputBasic onChange={(e)=> setWorkloadCourse(e.target.value)}  value={workloadCourse} type="number" placeholder="Carga Horária"/>
                    </FormControl>
                </Grid>

                <Grid item xs={6} md={2}>
                    <FormControl className='w-full'>
                        <InputBasic onChange={(e)=> setValueCourse(e.target.value)}  value={valueCourse} type="number" placeholder="Valor"/>
                    </FormControl>
                </Grid>

                <Grid item xs={6} md={2}>
                    <FormControl className='w-full'>
                        <InputBasic onChange={(e)=> setRateCourse(e.target.value)}  value={rateCourse} type="number" placeholder="Taxa"/>
                    </FormControl>
                </Grid>

                <Grid item xs={6} md={2}>
                    <FormControl className='w-full'>
                        <InputBasic onChange={(e)=> setValueTotalCourse(e.target.value)}  value={valueTotalCourse} disabled type="number" placeholder="Valor Total"/>
                    </FormControl>
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
                    <SlateEditor/>
                </Grid>
            </Grid>
        </FormControl>
    )
}
