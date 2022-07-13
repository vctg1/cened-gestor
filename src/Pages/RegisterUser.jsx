import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import {FaUserAlt} from 'react-icons/fa'
import {TextField, MenuItem} from '@mui/material'
import InputMask from 'react-input-mask'
import { useState } from 'react'

export default function RegisterUser() {
    const [nameUser, setNameUser] = useState('')
    const [cpfUser, setCpfUser] = useState('')
    const [emailUser, setEmailUser] = useState('')
    const [phoneUser, setPhoneUser] = useState('')    
    const [ufUser, setUfUser] = useState('')
    const [activeUser, setActiveUser] = useState(false)
    let isDesktop = useMediaQuery('(min-width:800px)')
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
        <Grid marginLeft={`${isDesktop ? '10%' : '0'}`} container spacing={2}>
            <Grid className='flex items-center' item xs={20} md={10}>
                <FaUserAlt size={30}/>
                <h1 className='text-xl font-bold'>Novo Usuário</h1>
            </Grid>
            <Grid item xs={20} md={7}>
                <TextField className='w-full' value={nameUser} onChange={(e)=> setNameUser(e.target.value)} type="text" label="Nome"/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <InputMask value={cpfUser} onChange={(e)=> setCpfUser(e.target.value)} mask="999.999.999-99" maskChar={''}>
                    {()=> <TextField className='w-full' label='CPF'/>}
                </InputMask>
            </Grid>


            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' label='Login'/>
            </Grid>

            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' label='E-mail'/>
            </Grid>
            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' label='Senha'/>
            </Grid>

            <Grid item xs={10} md={5.5}>
                <TextField className='w-full' label='Confirmar Senha'/>
            </Grid>

            <Grid item xs={10} md={1.5}>
                <InputMask mask="(99)99999-9999" value={phoneUser} onChange={(e)=> setPhoneUser(e.target.value)}  maskChar={''}>
                    {()=> <TextField className='w-full' label='Telefone'/>}
                </InputMask>
            </Grid>

            <Grid item xs={8} md={2}>
                <TextField value={ufUser} onChange={(e)=> setUfUser(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF'>
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

            <Grid item xs={8} md={1}>
              <TextField className='w-full' select label='Ativo'>
                <MenuItem value={true}>
                  Sim
                </MenuItem>

                <MenuItem value={false}>
                  Não
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={8} md={4}>
              <TextField className='w-full' select label='Grupo de Permissões'>
                <MenuItem value={true}>
                  ZZZZZ
                </MenuItem>

                <MenuItem value={false}>
                  ZZZZZ
                </MenuItem>
              </TextField>
            </Grid>

            <Grid item xs={20} md={10}>
                <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
            </Grid>
        </Grid>
    </div>
    )
}
