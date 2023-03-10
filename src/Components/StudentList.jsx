import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import axios from 'axios';
import SearchInput from '../Components/input-fields/SearchInput'
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { Grid } from '@mui/material';
import FlexBetween from '../Components/flexbox/FlexBetween'
import {AiOutlineMore} from 'react-icons/ai'
import {Add, ArrowBack, ArrowForward} from '@mui/icons-material'
import BasicMenu from './BasicMenu';
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
    label: 'INFOPEN',
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

export default function StudentsContent() {
  let [loading, setLoading] = useState(true);
  const api = process.env.REACT_APP_API_KEY;
  const Navigate = useNavigate();
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(1);
  const [students, setStudents] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const navigateAddUser = ()=> Navigate('/cadastros/adicionar-aluno');
  let [pageNumbers, setPageNumbers] = useState([]);
  let [searchLength, setSearchLength] = useState();

  useEffect(()=>{
    axios.get(`${api}/alunos?Page=1`).then(response=>{
      setStudents(response.data.data)
    });
  }, [])

  const searchStudent =e=>{
    e.preventDefault();
    setSearchLength(null);
    setPage(1);
    if(searchValue !== ''){
      axios.get(`${api}/alunos?Search=${searchValue}`).then(response=>{
        setStudents(response.data.data)
      });
      axios.get(`${api}/alunos?Search=${searchValue}&Limit=300`).then(response=>{
        setSearchLength(response.data.data.length);
      });
    }
    else{axios.get(`${api}/alunos?Page=1`).then(response=>{
      setStudents(response.data.data)
    });}
  }

  const handleChangePage = (event, newPage) => {
      setPage(newPage);
      if(searchValue!== ''){
        axios.get(`${api}/alunos?Search=${searchValue}&Page=${newPage}`).then(response=>{
          setStudents(response.data.data)
        })
      }
      else{
      axios.get(`${api}/alunos?Page=${newPage}`).then(response=>{
        setStudents(response.data.data)
      })}
  };

  useEffect(()=>{
    setLoading(true);
    let rowsPrev = []
    students.forEach((st)=>{
      rowsPrev.push({
        name: st.nome,
        id: st.id,
        cpf: st.cpf,
        agent: st.nomePreposto,
        infopen: '999999',
        ufPeni: `${st.penitenciaria.ufDescricao} / ${st.penitenciaria.nome}`,
        more: <BasicMenu id={st.id}><AiOutlineMore size={25} color='black'/></BasicMenu>
      })
    })
    setRows(rowsPrev)
  }, [students])
  useEffect(()=>{
    setTimeout(()=>{setLoading(false)}, 1500);
  }, [rows])

  useEffect(()=>{
    setLoading(true);
    if (searchLength){
      let numbersPrev = [];
      let i = 1;
      if(searchLength/10+1 < 10){
      while(i <= searchLength/10+1){
          numbersPrev.push(i);
          i++
      }}
      else if(page > 4){
        i=page-4
        let j = page-5
        while(numbersPrev.length<10 && i <= searchLength/10+1){
          numbersPrev.push(i);
          i++}
          while(numbersPrev.length<10){
            numbersPrev.unshift(j);
            j--;
          }
      }
      else{
        while(i <= 10){
          numbersPrev.push(i);
          i++
        }
      }
      setPageNumbers(numbersPrev);
    }
    else if(page > 4){
      let numbersPrev = [];
      let i = page-4;
      while (numbersPrev.length <10) {
        numbersPrev.push(i);
        i++;
      }
      setPageNumbers(numbersPrev);
    }
    else{
      let numbersPrev = []
      let i = 1;
        while(i <= 10){
          numbersPrev.push(i);
          i++
        }
      setPageNumbers(numbersPrev);
    }
  }, [page, searchLength])
  

  return (
    <Grid>
      <FlexBetween>
        <form onSubmit={searchStudent} className='flex items-center w-3/4'>
          <SearchInput
            value={searchValue}
            placeholder="Pesquisar por Nome ou CPF"
            onChange={(e) => setSearchValue(e.target.value)}/>
            <div className='ml-5'>
              <Button type='submit' startIcon={<SearchIcon/>} className='ml-10' variant='contained'>
                Buscar
              </Button>
            </div>
        </form>

        <Button onClick={navigateAddUser} startIcon={<Add/>} variant="contained">
          Adicionar Novo Usuário
        </Button>
      </FlexBetween>
      <Paper className='mt-5' sx={{ width: '100%', overflow: 'hidden' }}>
        {!loading && rows ? 
        <TableContainer sx={{ maxHeight: 740 }}>
          <table className='w-full table-auto'>
            <thead>
              <tr className='w-full text-sm'>
                <td>

                </td>
                <td className='py-4 px-2'>
                  Nome
                </td>

                <td className='py-4 px-2'>
                  CPF
                </td>

                <td className='py-4 px-2'>
                  INFOPEN
                </td>

                <td className='py-4 px-2'>
                  Preposto
                </td>

                <td className='py-4 px-2'>
                  UF / Penitenciária
                </td>
                <td>

                </td>
              </tr>
            </thead>
            <tbody>
            {rows.map((row) => {
                  return (
                    <tr className='border-t border-b text-sm border-gray-300 w-full' tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <td className='p-2' key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </TableContainer>
                :
                <Box width='100%' height='66vh' display='flex' alignItems='center' justifyContent='center' >
                  <CircularProgress size={90}/>
                </Box>
              }
        {/*
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        */}
        <div className='flex justify-end p-2 select-none gap-2'>
          <Button variant='contained' disabled={page <= 1} onClick={(e)=> handleChangePage(e, page-1)}>
          <ArrowBack/>
          </Button>
          {pageNumbers.map((number)=>
          <Button variant={page===number?'contained' : 'outlined'} onClick={(e)=> handleChangePage(e, number)}>
            <Typography>
            {number}
            </Typography>
          </Button>)}
          <Button variant='contained' disabled={students.length <= 9} onClick={(e)=> handleChangePage(e, page+1)}>
          <ArrowForward/>
          </Button>
        </div>
      </Paper>
    </Grid>
  );
}