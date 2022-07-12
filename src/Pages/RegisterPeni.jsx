import { FormControl, useMediaQuery } from '@mui/material'
import React from 'react'
import {Grid, TextField, MenuItem} from '@mui/material'
import {FaBuilding} from 'react-icons/fa'
import {BiCheckbox, BiCheckboxChecked} from 'react-icons/bi'
import InputMask from 'react-input-mask'
import { useState } from 'react'

export default function RegisterPeni() {
    const [namePeni, setNamePeni] = useState('')
    const [addresPeni, setAddresPeni] = useState('')
    const [cityPeni, setCityPeni] = useState('')
    const [cepPeni, setCepPeni] = useState('')
    const [ufPeni, setUfPeni] = useState('')
    const [checked, setChecked] = useState(false)
    const [nameDepart, setNameDepart] = useState('')
    const [nameRespon, setNameRespon] = useState('')
    const [titleOffice, setTitleOffice] = useState('')
    const [emailContact, setEmailContact] = useState('')
    const [activePeni, setActivePeni] = useState('')
    let isDesktop = useMediaQuery('(min-width:800px)')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={10}>
                {/*<FaBuilding size={30}/>*/}
                <h1 className='text-xl font-bold'>Dados da Penitenciária</h1>
            </Grid>
            <Grid item xs={20} md={10}>
                <TextField className='w-full' value={namePeni} onChange={(e)=> setNamePeni(e.target.value)} label='Nome da Penitenciária'/>
            </Grid>

            <Grid item xs={20} md={10}>
                <TextField className='w-full' value={addresPeni} onChange={(e)=> setAddresPeni(e.target.value)} label='Endereço'/>
            </Grid>

            <Grid item xs={10} md={5}>
                   <TextField className='w-full' value={cityPeni} onChange={(e)=> setCityPeni(e.target.value)} label='Cidade'/>
            </Grid>

            <Grid item xs={5} md={2}>
                    <InputMask value={cepPeni} onChange={(e)=> setCepPeni(e.target.value)} mask="99999-999" maskChar={''}>
                        {()=> <TextField className='w-full' label='CEP'/>}
                    </InputMask>
            </Grid>

            <Grid item xs={8} md={3.3}>
                <TextField value={ufPeni} onChange={(e)=> setUfPeni(e.target.value)} className='w-11/12' select label='UF'>
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
            <Grid item xs={8} md={3}>
                <TextField value={activePeni} onChange={(e)=> setActivePeni(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' label={'Ativo'} select>
                <MenuItem value={true}>
                    Sim
                </MenuItem>
                <MenuItem value={false}>
                    Não
                </MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={10} md={12}>
                <h2 className='text-base lg:text-xl font-bold'>Dados do Núcleo de Ensino</h2>
            </Grid>

            <Grid item xs={20} md={10}>
                <TextField className='w-full' value={nameDepart} onChange={(e)=> setNameDepart(e.target.value)} label='Nome do Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' value={nameRespon} onChange={(e)=> setNameRespon(e.target.value)} label='Responsável pelo Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' value={titleOffice} onChange={(e)=> setTitleOffice(e.target.value)} label='Título do Cargo do Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' value={emailContact} onChange={(e)=> setEmailContact(e.target.value)} label='E-mail de Contato'/>
            </Grid>

            <Grid item xs={20} md={10}>
                <div className='bg-gray-400 rounded-xl text-lg flex items-center p-2 text-white'>
                    {checked ? <BiCheckboxChecked onClick={()=> setChecked(!checked)} className='cursor-pointer' size={30}/>
                    : 
                    <BiCheckbox className='cursor-pointer' onClick={()=> setChecked(!checked)} size={30}/>}
                    <p>Ativar Bolsa Parceria Integral</p>

                    |

                    <p>Data de Início Parceria {}</p>
                </div>
            </Grid>

            <Grid item xs={20} md={10}>
                <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
            </Grid>
        </Grid>
    </div>
  )
}
