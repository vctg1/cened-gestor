import { FormControl, Grid } from '@mui/material'
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
  return (
    <FormControl>
        <Grid className='bg-white p-4 rounded-xl max-w-6xl' container spacing={2}>
            <Grid className='flex items-center justify-center' item xs={20} md={10}>
                <FaUserAlt size={30}/>
                <h1 className='text-xl font-bold'>Novo Usuário</h1>
            </Grid>
            <Grid item xs={20} md={6}>
                <FormControl className='w-full'>
                    <TextField value={nameUser} onChange={(e)=> setNameUser(e.target.value)} type="text" label="Nome"/>
                </FormControl>
            </Grid>

            <Grid item xs={10} md={6}>
                <FormControl className='w-full'>
                    <InputMask value={cpfUser} onChange={(e)=> setCpfUser(e.target.value)} mask="999.999.999-99" maskChar={''}>
                        {()=> <TextField label='CPF'/>}
                    </InputMask>
                </FormControl>
            </Grid>


            <Grid item xs={10} md={6}>
                <FormControl className='w-full'>
                    <TextField className='w-full' label='Login'/>
                </FormControl>
            </Grid>

            <Grid item xs={10} md={6}>
                <FormControl className='w-full'>
                    <TextField className='w-full' label='E-mail'/>
                </FormControl>
            </Grid>
            <Grid item xs={10} md={6}>
                <FormControl className='w-full'>
                    <TextField label='Senha'/>
                </FormControl>
            </Grid>

            <Grid item xs={10} md={6}>
                <FormControl className='w-full'>
                    <TextField label='Confirmar Senha'/>
                </FormControl>
            </Grid>

            <Grid item xs={10} md={4}>
                <FormControl className='w-full'>
                    <InputMask mask="(99)99999-9999" value={phoneUser} onChange={(e)=> setPhoneUser(e.target.value)}  maskChar={''}>
                        {()=> <TextField label='Telefone'/>}
                    </InputMask>
                </FormControl>
            </Grid>

            <Grid item xs={8} md={4}>
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

            <Grid item xs={8} md={3}>
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
    </FormControl>
    )
}
