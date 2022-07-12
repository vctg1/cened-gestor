import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import RegisterForm from "./RegForms/RegisterForm";
import FlexBox from './flexbox/FlexBox'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from "axios";

export default function RegSelector(props) {
  let [forms, setForms] = useState([{}]);
  let [openedForm, setOpenedForm] = useState({});
  useEffect(() => {
    setForms([
      {
        id: 1,
        name: "CADASTRO",
        child: <RegisterForm selectedStudent={props.selectedStudent} />,
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
      if(props.selected === item.id){
        setOpenedForm(item);
      }
    })
  },[props.selected, forms])
  return (
    <Grid>
      <NotificationContainer/>
      <FlexBox marginBottom='1vh' gap='1vw' >
        {forms.map((item) => {
          return <Button variant={props.selected !== item.id ? 'outlined' : 'contained'} onClick={()=>props.setSelected(item.id)}>{item.name}</Button>
        })},
      </FlexBox>
      <Grid>
        {openedForm.child}
      </Grid>
    </Grid>
  );
}
