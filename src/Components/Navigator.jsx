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
import icon from '../images/favicon.ico'

const categories = [
  {
    id: 'Cadastros',
    icon: <IoDocumentTextSharp/>,
    children: [
      {active: false, id: 'Alunos'},
      {active: false, id: 'Matriculas'},
      {active: false, id: 'Penitenciárias'},
      {active: false, id: 'Representantes'},
      {active: false, id: 'Fiscais de Sala'},
      {active: false, id: 'Cursos CENED'},
      {active: false, id: 'Usuários do Sistema'}
    ],
  },{
    id: '2',
    icon: <IoDocumentTextSharp/>,
    children: [
      {active: false, id: 'Alunos'},
      {active: false, id: 'Matriculas'},
      {active: false, id: 'Penitenciárias'},
      {active: false, id: 'Representantes'},
      {active: false, id: 'Fiscais de Sala'},
      {active: false, id: 'Cursos CENED'},
      {active: false, id: 'Usuários do Sistema'}
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
          <Grid width={65} ml={2} >
        <img src={icon} alt='' />
          </Grid>
        <h2 className='py-5 text-center text-xl font-bold'>
          CENED
        </h2>
        </Box>
        <Link to={'/'}>
          <ListItem className='cursor-pointer' sx={{ ...item, ...itemCategory }}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Início</ListItemText>
          </ListItem>
        </Link>
        {categories.map(({ id, children, icon }) => (
          <Box key={id}>
            <ListItem className='rounded-lg transition hover:bg-[#f3f4f6] cursor-pointer' 
            onClick={()=>{openId===id? setOpen(!open) : setOpen(true) ;setOpenId(id)}} sx={{ my:0.2, px: 3 }}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            <Collapse in={openId===id ? open : ''}>
            {children.map(({ id: childId, icon, active }) => (
              <Link key={childId} to={`${id}/${childId.replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, "")}`}>
                <ListItem onClick={()=> active = true} disablePadding>
                  <ListItemButton selected={active} sx={item}>
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