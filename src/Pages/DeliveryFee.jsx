import { FormControl, Grid } from '@mui/material'
import React from 'react'
import {FaTruck} from 'react-icons/fa'
import {TextField, MenuItem} from '@mui/material'
import { useState } from 'react'

export default function DeliveryFee() {
    const [nameTax, setNameTax] = useState('')
    const [cpfTax, setCpfTax] = useState('')
    const [rgTax, setRgTax] = useState('')    
    const [ufTax, setUfTax] = useState('')
  return (
    <div className='flex justify-center'>
            <Grid className='bg-white p-4 rounded-xl max-w-6xl' container spacing={2}>
                <Grid className='flex items-center' item xs={20} md={10}>
                    <FaTruck size={30}/>
                    <h1 className='text-xl font-bold'>Nova Taxa de Entrega (Frete)</h1>
                </Grid>

                <Grid item xs={8} md={4}>
                    <TextField value={ufTax} onChange={(e)=> setUfTax(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF'>
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
                
                <Grid item xs={8} md={4}>
                    <TextField type={'number'} className='w-full' label='Taxa'/>
                </Grid>

                <Grid item xs={20} md={10}>
                    <button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
                    <button className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
                </Grid>
            </Grid>
    </div>
  )
}
