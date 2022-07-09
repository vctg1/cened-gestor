import { FormControl } from '@mui/material'
import React from 'react'
import {Grid, TextField, MenuItem} from '@mui/material'
import {FaBuilding} from 'react-icons/fa'
import {BiCheckbox, BiCheckboxChecked} from 'react-icons/bi'
import InputMask from 'react-input-mask'
import { useState } from 'react'

export default function RegisterPeni() {
    const [checked, setChecked] = useState(false)
  return (
    <FormControl>
        <Grid className='bg-white p-4 rounded-xl max-w-6xl' container spacing={2}>
            <Grid className='flex items-center justify-center' item xs={20} md={10}>
                <FaBuilding size={30}/>
                <h1 className='text-xl font-bold'>Nova Penitenciária</h1>
            </Grid>
            <Grid item xs={20} md={10}>
                <FormControl className='w-full'>
                    <TextField label='Nome da Penitenciária'/>
                </FormControl>
            </Grid>

            <Grid item xs={20} md={10}>
                <FormControl className='w-full'>
                    <TextField label='Endereço'/>
                </FormControl>
            </Grid>

            <Grid item xs={10} md={4}>
                <FormControl className='w-full'>
                   <TextField label='Cidade'/>
                </FormControl>
            </Grid>

            <Grid item xs={5} md={2}>
                <FormControl className='w-full'>
                    <InputMask mask="99999-999" maskChar={''}>
                        {()=> <TextField label='CEP'/>}
                    </InputMask>
                </FormControl>
            </Grid>

            <Grid item xs={8} md={2.5}>
                <TextField className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF'>
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
            <Grid item xs={8} md={1.6}>
                <TextField className='w-11/12 bg-white border-none outline-none rounded-xl' label={'Ativo'} select>
                <MenuItem>
                    Sim
                </MenuItem>
                <MenuItem>
                    Não
                </MenuItem>
                </TextField>
            </Grid>

            <Grid item xs={10} md={10}>
                <h2 className='text-base lg:text-xl text-center font-bold'>Dados do Núcleo de Ensino da Penitenciária</h2>
            </Grid>

            <Grid item xs={20} md={10}>
                <TextField className='w-full' label='Nome do Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' label='Responsável pelo Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' label='Título do Cargo do Departamento de Ensino'/>
            </Grid>

            <Grid item xs={20} md={5}>
                <TextField className='w-full' label='E-mail de Contato'/>
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
    </FormControl>
  )
}
