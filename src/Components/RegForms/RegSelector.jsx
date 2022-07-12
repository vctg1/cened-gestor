import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";
import FlexBox from '../flexbox/FlexBox'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default function RegSelector() {
  let [forms, setForms] = useState([{}]);
  let [selected, setSelected] = useState(1);
  let [openedForm, setOpenedForm] = useState({});
  useEffect(() => {
    setForms([
      {
        id: 1,
        name: "CADASTRO",
        child: <RegisterForm setSelected={setSelected} />,
      },
      {
        id: 2,
        name: "CURSOS",
        child: '',
      },
      {
        id: 3,
        name: "FINANCEIRO",
        child: '',
      },
      {
        id: 4,
        name: "DESPESAS ADICIONAIS",
        child: '',
      },
      {
        id: 5,
        name: "ANEXOS",
        child: '',
      },
    ]);
  }, []);
  useEffect(()=>{
    forms.map((item)=>{
      if(selected === item.id){
        setOpenedForm(item);
      }
    })
  },[selected, forms])
  return (
    <Grid>
      <NotificationContainer/>
      <FlexBox marginBottom='1vh' gap='1vw' >
        {forms.map((item) => {
          return <Button variant={selected !== item.id ? 'outlined' : 'contained'} onClick={()=>setSelected(item.id)}>{item.name}</Button>
        })},
      </FlexBox>
      <Grid>
        {openedForm.child}
      </Grid>
    </Grid>
  );
}
