import { Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import {FaTruck} from 'react-icons/fa'
import {TextField, MenuItem} from '@mui/material'
import { useState } from 'react'
import axios from 'axios'
import PopupSuccess from '../Components/PopupSuccess'

export default function DeliveryFee() {
	const api = process.env.REACT_APP_API_KEY
    const [rate, setRate] = useState('')   
    const [uf, setUf] = useState('')
	const [completeRequirements, setCompleteRequirements] = useState(false)
    let isDesktop = useMediaQuery('(min-width:800px)')
	const saveDelivery = ()=>{
		if(rate !== '' && uf !== ''){
			{/*
				axios.post(`${api}/uf-entregas`, {
					uf: uf,
					taxa: rate
				}).then(response=>[
					console.log(response)
				])
			*/}
			setCompleteRequirements(true)
		}else{
			setCompleteRequirements(false)
		}
	}
  return (
    <div className='flex justify-center bg-white p-4 rounded-xl'>
            <Grid container marginLeft={`${isDesktop ? '20%' : '0'}`}  spacing={2}>
                <Grid className='flex items-center' item xs={20} md={12}>
                    <FaTruck size={30}/>
                    <h1 className='text-xl font-bold'>Nova Taxa de Entrega (Frete)</h1>
                </Grid>

                <Grid item xs={8} md={2.5}>
                    <TextField value={uf} onChange={(e)=> setUf(e.target.value)} className='w-11/12 bg-white border-none outline-none rounded-xl' select label='UF'>
                        <MenuItem value={1}>Acre</MenuItem>
                        <MenuItem value={2}>Alagoas</MenuItem>
                        <MenuItem value={4}>Amapá</MenuItem>
                        <MenuItem value={3}>Amazonas</MenuItem>
                        <MenuItem value={5}>Bahia</MenuItem>
                        <MenuItem value={6}>Ceará</MenuItem>
                        <MenuItem value={7}>Distrito Federal</MenuItem>
                        <MenuItem value={8}>Espírito Santo</MenuItem>
                        <MenuItem value={9}>Goiás</MenuItem>
                        <MenuItem value={10}>Maranhão</MenuItem>
                        <MenuItem value={13}>Mato Grosso</MenuItem>
                        <MenuItem value={12}>Mato Grosso do Sul</MenuItem>
                        <MenuItem value={11}>Minas Gerais</MenuItem>
                        <MenuItem value={14}>Pará</MenuItem>
                        <MenuItem value={15}>Paraíba</MenuItem>
                        <MenuItem value={18}>Paraná</MenuItem>
                        <MenuItem value={16}>Pernambuco</MenuItem>
                        <MenuItem value={17}>Piauí</MenuItem>
                        <MenuItem value={19}>Rio de Janeiro</MenuItem>
                        <MenuItem value={20}>Rio Grande do Norte</MenuItem>
                        <MenuItem value={23}>Rio Grande do Sul</MenuItem>
                        <MenuItem value={21}>Rondônia</MenuItem>
                        <MenuItem value={22}>Roraima</MenuItem>
                        <MenuItem value={24}>Santa Catarina</MenuItem>
                        <MenuItem value={26}>São Paulo</MenuItem>
                        <MenuItem value={25}>Sergipe</MenuItem>
                        <MenuItem value={27}>Tocantins</MenuItem>
                    </TextField>
                </Grid>
                
                <Grid item xs={8} md={2.5}>
                    <TextField type={'number'} value={rate} onChange={(e)=> setRate(e.target.value)} className='w-full' label='Taxa'/>
                </Grid>

                <Grid item xs={20} md={10}>
					<div className='w-full flex'>
						<button className='p-4 bg-red-500 hover:bg-red-700 transition-colors text-white rounded-xl'>Cancelar</button>
						<PopupSuccess title={completeRequirements ? 'Nova Taxa de Frete Adicionada com Sucesso!' : <span className='text-red-600'>Verifique se você preencheu os campos corretamente.</span>}>
							<button onClick={()=> saveDelivery()} className='p-4 px-6 hover:bg-green-700 transition-colors bg-green-400 text-white rounded-xl ml-5'>Salvar</button>
						</PopupSuccess>
                	</div>
                </Grid>
            </Grid>
    </div>
  )
}
