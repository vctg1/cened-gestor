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
  },
];

const item = {
  py: '10px',
  px: 5,
  color: '',
  '&:hover, &:focus': {
    bgcolor: '#f3f4f6',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  let [open, setOpen] = useState(false);
  const { ...other } = props;

  return (
    <Drawer className='text-black' variant="permanent" {...other}>
      <List disablePadding>
        <Box display={'flex'} alignItems='center' className='border-b border-gray-400'>
          <Grid width={65} ml={2} >
        <img src='favicon.ico' alt='' />
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
            <ListItem className='hover:bg-[#f3f4f6] cursor-pointer' onClick={()=>setOpen(!open)} sx={{ py: 2, px: 3 }}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText>{id}</ListItemText>
            </ListItem>
            <Collapse in={open}>
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

            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}