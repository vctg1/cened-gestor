import React from 'react'
import { Grid } from '@mui/material'
import { useState } from 'react'
import RegSelector from '../Components/RegForms/RegSelector';


export default function Register() {
  let [selected, setSelected] = useState(1);
  return (
    <Grid>
      <RegSelector selected={selected} setSelected={setSelected} />
    </Grid>
  )
}
