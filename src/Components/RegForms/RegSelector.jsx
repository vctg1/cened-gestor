import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import RegisterForm from "./RegisterForm";

export default function RegSelector({ selected, setSelected }) {
  let [forms, setForms] = useState([{}]);
  useEffect(() => {
    setForms([
      {
        id: 1,
        name: "CADASTRO",
        child: <RegisterForm />,
      },
      {
        id: 2,
        name: "CURSOS",
        child: <RegisterForm />,
      },
      {
        id: 3,
        name: "FINANCEIRO",
        child: <RegisterForm />,
      },
      {
        id: 4,
        name: "DESPESAS ADICIONAIS",
        child: <RegisterForm />,
      },
      {
        id: 5,
        name: "ANEXOS",
        child: <RegisterForm />,
      },
    ]);
  }, []);
  return (
    <Grid>
      {forms.map((item) => {
        return <Button onClick={setSelected(item.id)}>{item.name}</Button>;
      })}
    </Grid>
  );
}
