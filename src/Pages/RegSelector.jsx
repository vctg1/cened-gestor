import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import RegisterForm from "../Components/RegForms/RegisterForm";
import FlexBox from '../Components/flexbox/FlexBox'
import CoursesList from "../Components/Courses/CoursesList";
import { KeyboardReturn } from "@mui/icons-material";

export default function RegSelector() {
  let [selectedStudent, setSelectedStudent] = useState(null|sessionStorage.getItem('student'));
  let [selectedButton, setSelectedButton] = useState(null|sessionStorage.getItem('button'))
  let [forms, setForms] = useState([{}]);
  let [openedForm, setOpenedForm] = useState({});
  useEffect(() => {
    setForms([
      {
        id: 1,
        name: "CADASTRO",
        child: <RegisterForm selectedStudent={selectedStudent} setSelected={setSelectedButton} />,
      },
      {
        id: 2,
        name: "CURSOS",
        child: <CoursesList selectedStudent={selectedStudent} />,
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
      if(selectedButton === item.id){
        setOpenedForm(item);
      }
    })
  },[selectedButton, forms])
  return (
    <Grid>
      <FlexBox marginBottom='1vh' gap='1vw' >
        {forms.map((item) => {
          return <Button variant={selectedButton !== item.id ? 'outlined' : 'contained'} onClick={()=>setSelectedButton(item.id)}>{item.name}</Button>
        })}
      </FlexBox>
      <Grid>
        {openedForm.child}
      </Grid>
      <Button onClick={()=>{window.history.back()}}>VOLTAR<KeyboardReturn/></Button>
    </Grid>
  );
}
