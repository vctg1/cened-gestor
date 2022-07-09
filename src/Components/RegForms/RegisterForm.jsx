import React, { useEffect } from "react";
import "../../styles/RegisterForm.css";
import { useState } from "react";
import { FormControl, Collapse, Alert } from "@mui/material";
import axios from "axios";
import RegForm1 from "./RegForm1";
import RegForm2 from "./RegForm2";
import RegForm3 from "./RegForm3";
import RegForm4 from "./RegForm4";

export default function RegisterForm() {
  let api = process.env.REACT_APP_API_KEY;
  let [penitenciaria, setPenitenciaria] = useState([]);
  let [alert, setAlert] = useState(false),
  [alertTxt, setAlertTxt] = useState(""),
    [data, setData] = useState({
        nome: "",sexo: "",cpf: "",rg: "",orgaoExpedidor: "",dataNascimento: "",
        naturalidade: "",ufNaturalidade: "",nacionalidade: "",endereco: "",
        bairro: "",cidade: "",ufResidencial: "",cep: "",senha: "",confirmarSenha: "",
        celular: "",foneResidencial: "",foneComercial: "",email: "",
        nomePreposto: "",vinculo: "",sexoPreposto: "",cpfPreposto: "",
        rgPreposto: "",orgaoExpedidorPreposto: "",grauInstrucao: "",atuacaoHabilitacao: "",
        profissao: "",bloco: "",ala: "",cela: "",condicaoPreso: "",
        regime: "",infopen: "",mae: "",pai: "",
      penitenciaria: { idPenitenciaria: "", uf: "" }
    });

  let [generalClauses, setGeneralClauses] = useState(false),
    keysPenitenciaria = Object.keys(data.penitenciaria),
    keysAluno = Object.keys(data),
    valueElements = [...keysAluno,...keysPenitenciaria];
  let [listElements, setListElements] = useState({});
  let emptyElements = [];
  useEffect(() => {
    setListElements(Object.assign(data));
  }, []);
  valueElements.forEach((vl) => {
    if (data[vl] === "" || data.penitenciaria[vl] === "") {
      emptyElements.push(vl.replace(/([A-Z])/g, " $1").replace('id Pen','pen').replace('condicao Preso','condicao'));
    }
  });

  function clearElements() {
    valueElements.forEach((vl) => {
      setData(listElements);
    });
  }

  function Submit() {
    let confirmarSenha = data.senha === data.confirmarSenha;
    if (confirmarSenha && !emptyElements.length > 0 && generalClauses) {
      //setData((data)=>({...data, penitenciaria:{res.data}}))
      //axios.post(`${apialunos`,data)
      window.location.href = `login`;
      setTimeout(function () {
        alert("Registrado com sucesso!");
      }, 200);
    }
    if (emptyElements.length > 0) {
      setAlert(true);
      setAlertTxt(`Itens incompletos: ${emptyElements}`);
    }
    if (!confirmarSenha && !emptyElements.length > 0) {
      setAlert(true);
      setAlertTxt("As senhas não coincidem!");
    }
    if (!emptyElements.length > 0 && !generalClauses) {
      setAlert(true);
      setAlertTxt("Você deve aceitar as cláusulas gerais para continuar");
    }
  }


  useEffect(()=>{
    axios.get(`${api}penitenciarias?Limit=400`).then(res=>{
      setPenitenciaria([]);
      let dataPenitenciaria = res.data.data;
      dataPenitenciaria.forEach((item)=>{
      if(data.penitenciaria.uf===item.uf){
        setPenitenciaria((data)=>[...data,item])
      }
    })
    })
  },[data.penitenciaria])

  console.log(data)
  return (
    <div className="flex flex-col mt-10">
      <FormControl style={{ fontSize: "20px", marginLeft: "40px" }}>
        <h1 className="titles"> 1 - DADOS DO REEDUCANDO</h1>
        <RegForm1 data={data} setData={setData} />
        <h2 className="titles">
          2 - DADOS DO RESPONSÁVEL: Familiar / Visitante / Advogado
        </h2>
        <RegForm2 data={data} setData={setData} />
        <h3 className="titles">3 - DADOS PRISIONAIS</h3>
        <RegForm3 data={data} setData={setData} penitenciaria={penitenciaria} />
        <h4 className="titles">4 - DADOS GERAIS</h4>
        <RegForm4 data={data} setData={setData} generalClauses={generalClauses} setGeneralClauses={setGeneralClauses} />
      </FormControl>
      <Collapse in={alert}>
        <div className="flex justify-center">
          <Alert
            className="flex lg:w-1/2 mb-10"
            severity="error"
            onClose={() => {
              setAlert(false);
            }}
          >
            {alertTxt}
          </Alert>
        </div>
      </Collapse>
      <div className="w-full flex self-center lg:w-1/2 h-20 justify-around">
        <button
          className="lg:w-1/3 h-fit p-2 rounded-sm bg-red-600 text-white font-bold"
          onClick={() => clearElements()}
        >
          LIMPAR
        </button>
        <button
          type="submit"
          className="lg:w-80 h-fit p-2 rounded-sm text-white font-bold bg-green-500"
          onClick={() => Submit()}
        >
          CONCLUIR CADASTRO
        </button>
      </div>
    </div>
  );
}
