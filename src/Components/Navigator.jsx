import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import {IoDocumentTextSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { Collapse, Grid } from '@mui/material';
import { useState } from 'react';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsIcon from '@mui/icons-material/Settings';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';
import icon from '../images/favicon.ico'

const categories = [
  {
    id: 'HOME',
    icon: <HomeIcon/>,
    children: [
      {active: false, id: 'Alertas do dia', route:'/'},
      {active: false, id: 'Alunos e cursos', route:'alunos-e-cursos'}
    ],
  },
  {
    id: 'ROTINAS AUTOMÁTICAS',
    icon: <CalendarMonthIcon/>,
    children: [
      {active: false, id: 'Envio de material UFs', route:'/'},
      {active: false, id: 'Envio de material DF', route:'/'},
      {active: false, id: 'Gerar Etiquetas', route:'/'},
      {active: false, id: 'Emitir certificado', route:'/'},
      {active: false, id: 'Serviços adicionais', route:'/'},
      {active: false, id: 'Matrículas pendentes', route:'/'},
      {active: false, id: 'Código de rastreio', route:'/'}
    ],
  },
  {
    id: 'DOCUMENTOS',
    icon: <IoDocumentTextSharp/>,
    children: [
      {active: false, id: 'Ofício DF', route:'/'},
      {active: false, id: 'Ofício UFs', route:'/'},
      {active: false, id: 'Gerar Etiquetas', route:'/'},
      {active: false, id: 'Atas de provas', route:'/'},
      {active: false, id: 'Protocolo de certificado', route:'/'},
      {active: false, id: 'Protocolo de material', route:'/'},
      {active: false, id: 'Ficha de matrícula', route:'/'},
      {active: false, id: 'Declaração', route:'/'},
      {active: false, id: 'Resultado de provas', route:'/'},
      {active: false, id: 'Emitir certificado', route:'/'},
      {active: false, id: 'Livro digital de certificados', route:'/'},
      {active: false, id: 'Autorizações de estudo', route:'/'}
    ],
  },
  {
    id: 'RELATÓRIOS',
    icon: <SummarizeIcon/>,
    children: [
      {active: false, id: 'Transações financeiras', route:'/'},
      {active: false, id: 'Cursos Sintético', route:'/'},
      {active: false, id: 'Cursos Analítico', route:'/'}
    ],
  },
  {
    id: 'MENSAGENS',
    icon: <MessageIcon/>,
    children: [
      {active: false, id: 'Enviar mensagens', route:'/'},
      {active: false, id: 'Cursos Sintético', route:'/'},
      {active: false, id: 'Cursos Analítico', route:'/'}
    ],
  },
  {
    id: 'CONFIGURAÇÕES',
    icon: <SettingsIcon/>,
    children: [
      {active: false, id: 'Autorizar curso por UF', route:'/'},
      {active: false, id: 'Token de liberação', route:'/'}
    ],
  },
  {
    id: 'CADASTROS',
    icon: <SwitchAccountIcon/>,
    children: [
      {active: false, id: 'Cad. Alunos e cursos', route:'adicionar-aluno'},
      {active: false, id: 'Cad. CH Diária LEP', route:'carga-diaria'},
      {active: false, id: 'Cad. Cursos', route:'cursos-cened'},
      {active: false, id: 'Cad. Fiscais de sala', route:'fiscais-de-sala'},
      {active: false, id: 'Cad. Penitenciárias', route:'penitenciarias'},
      {active: false, id: 'Cad. Representantes', route:'representantes'},
      {active: false, id: 'Cad. Taxa entrega/frete', route:'taxa-de-entrega'},
      {active: false, id: 'Cad. Grupo de Permissões', route:'/'},
      {active: false, id: 'Cad. Usuários do Sistema', route:'usuarios-do-sistema'},
      {active: false, id: 'Cad. Grupos de Provas', route:'grupos-de-provas'},
      {active: false, id: 'Cad. Agentes Penitenciários', route:'/'},
      {active: false, id: 'Cad. Etiquetas de material', route:'etiquetas-de-material'},
      {active: false, id: 'Cad. Cursos autorizados UF', route:'cursos-autorizados-uf'},
    ],
  },
  {
    id: 'NOTAS FISCAIS',
    icon: <ReceiptIcon/>,
    children: [
      {active: false, id: 'Emitir notas fiscais', route:'/'},
    ],
  },
  {
    id: 'SAIR',
    icon: <LogoutIcon/>,
    children: [
    ],
  },
];

const item = {
  color: '',
  borderRadius:'10px',
  '&:hover, &:focus': {
    bgcolor: '#f3f4f6',
  },
  marginY: '2px',
  transitionProperty: 'all',
  transitionDuration: '150ms'
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  px: 3,
};

export default function Navigator(props) {
  let [openId, setOpenId] = useState('');
  let [open, setOpen] = useState(false);
  const { ...other } = props;

  return (
    <Drawer className='text-black' variant="permanent" {...other}>
      <List disablePadding>
        <Box display={'flex'} alignItems='center' className='border-b border-gray-400'>
          
        <img src={icon} style={{height:'5vh', margin:'20px'}} alt='' />
        <h2 className='text-center text-xl font-bold'>
          CENED
        </h2>
        </Box>
        {categories.map(({ id, children, icon }) => (
          <Box key={id}>
            <ListItem className='rounded-lg transition hover:bg-[#f3f4f6] cursor-pointer' 
            onClick={()=>{openId===id? setOpen(!open) : setOpen(true) ;setOpenId(id)}} sx={{ my:0.2, px: 3 }}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            <Collapse in={openId===id ? open : false}>
            {children.map(({ id: childId, icon, active, route }) => (
              <Link key={childId} to={`${id.toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}/${route}`}>
                <ListItem onClick={()=> active = true} disablePadding>
                  <ListItemButton style={{padding: '5px', margin:0}} selected={active} sx={item}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText>{childId}</ListItemText>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
                </Collapse>
          </Box>
        ))}
      </List>
    </Drawer>
  );
}