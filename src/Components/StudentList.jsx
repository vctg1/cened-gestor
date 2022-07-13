import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import SearchInput from '../Components/input-fields/SearchInput'
import { Button } from "@mui/material";
import { Grid } from '@mui/material';
import FlexBetween from '../Components/flexbox/FlexBetween'
import {AiOutlineMore} from 'react-icons/ai'
import {Add} from '@mui/icons-material'
import BasicMenu from '../Components/others/BasicMenu';
import SearchIcon from '../icons/SearchIcon';

const columns = [
  {
    id: 'more',
    label: '',
    minWidth: 100
  },
  { 
    id: 'name', 
    label: 'Nome', 
    minWidth: 170 
  },

  { 
    id: 'cpf', 
    label: 'CPF', 
    minWidth: 100 
  },

  {
    id: 'infopen',
    label: 'Infopen',
    minWidth: 170
  },

  {
    id: 'agent',
    label: 'Preposto',
    minWidth: 170,
  },


  {
    id: 'ufPeni',
    label: 'UF / Penitenciária',
    minWidth: 170,
  },
];

export default function StudentsContent({setSelectedStudent, setSelectedBtn}) {
  const api = process.env.REACT_APP_API_KEY
  const Navigate = useNavigate()
  const [rows, setRows] = useState([])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [students, setStudents] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const navigateAddUser = ()=> Navigate('/cadastros/adicionar-aluno')
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  
  const addStudentRow = ()=>{
    let rowsProvisory = []
    students.forEach((st)=>{
      rowsProvisory.push({
        name: st.nome,
        id: st.id,
        cpf: st.cpf,
        agent: st.nomePreposto,
        infopen: '999999',
        ufPeni: `${st.penitenciaria.ufDescricao} / ${st.penitenciaria.nome}`,
        more: <BasicMenu setSelected={setSelectedStudent} setBtn={setSelectedBtn} id={st.id}><AiOutlineMore size={25} color='black'/></BasicMenu>
      })
    })
    setRows(rowsProvisory)
  }

  const searchStudent = ()=>{
    axios.get(`${api}/alunos?Search=${searchValue}&limit=200`).then(response=>{
      setStudents(response.data.data)
    })
  }

  useEffect(()=>{
    axios.get(`${api}/alunos?limit=200`).then(response=>{
      setStudents(response.data.data)
    })
  }, [])


  useEffect(()=>{
    addStudentRow()
  }, [students])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Grid>
      <FlexBetween>
        <div className='flex items-center w-1/2'>
          <SearchInput
            value={searchValue}
            placeholder="Pesquisar por Nome ou CPF"
            onChange={(e) => setSearchValue(e.target.value)}/>
            <div className='ml-5'>
              <Button startIcon={<SearchIcon/>} onClick={searchStudent} className='ml-10' variant='contained'>
                Buscar
              </Button>
            </div>
        </div>

        <Button onClick={navigateAddUser} startIcon={<Add/>} variant="contained">
          Adicionar Novo Usuário
        </Button>
      </FlexBetween>
      <Paper className='mt-5' sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 740 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>

                </TableCell>

                <TableCell>
                  Nome
                </TableCell>

                <TableCell>
                  CPF
                </TableCell>

                <TableCell>
                  Infopen
                </TableCell>

                <TableCell>
                  Preposto
                </TableCell>

                <TableCell>
                  UF / Penitenciária
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Grid>
  );
}
