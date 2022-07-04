import React, {useEffect, useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

const columns = [
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
    id: 'agent',
    label: 'Preposto',
    minWidth: 170,
  },

  {
    id: 'cpfAgent',
    label: 'CPF Preposto',
    minWidth: 170,
  },

  {
    id: 'ufPeni',
    label: 'UF / Penitenciária',
    minWidth: 170,
  },
];

export default function Content() {
  const api = process.env.REACT_APP_API_KEY
  const [rows, setRows] = useState([
    {
      id: '0004',
      name: 'Lucas',
      cpf: '00000',
      agent: 'ASDASDASDASD',
      cpfAgent: '020340214',
      ufPeni: 'Acre'
    }
  ])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [students, setStudents] = useState([])
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
        cpfAgent: st.cpfPreposto,
        ufPeni: st.nacionalidade
      })
    })
    setRows(rowsProvisory)
  }

  useEffect(()=>{
    axios.get(`${api}/alunos?page=1`).then(response=>{
      setStudents(response.data.data)
    })
  }, [])

  useEffect(()=>{
    axios.get(`${api}/alunos?page=${page}`).then(response=>{
      setStudents(response.data.data)
    })
  }, [page])

  useEffect(()=>{
    addStudentRow()
  }, [students])

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 740 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                Nome
              </TableCell>

              <TableCell>
                CPF
              </TableCell>

              <TableCell>
                Preposto
              </TableCell>

              <TableCell>
                CPF Preposto
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
  );
}
