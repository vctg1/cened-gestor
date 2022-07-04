import * as React from 'react';
import PropTypes from 'prop-types';
import {GiHamburgerMenu} from 'react-icons/gi'
import {Routes, Route} from 'react-router-dom'

function Header(props) {
  const { onDrawerToggle } = props;
  return (
    <header className='bg-blue-500 flex text-white text-center items-center h-20 p-2'>
      <GiHamburgerMenu className='block lg:hidden md:hidden' onClick={onDrawerToggle} size={30}/>
      <Routes>
        <Route path='/' element={<h2 className='text-3xl m-auto font-semibold'>Página Inicial</h2>}/>
        <Route path='/Cadastros/Alunos' element={<h2 className='text-3xl m-auto font-semibold'>Alunos</h2>}/>
        <Route path='/Cadastros/Matriculas' element={<h2 className='text-3xl m-auto font-semibold'>Matriculas</h2>}/>
        <Route path='/Cadastros/Penitenciarias' element={<h2 className='text-3xl m-auto font-semibold'>Penitenciárias</h2>}/>
        <Route path='/Cadastros/Representantes' element={<h2 className='text-3xl m-auto font-semibold'>Representantes</h2>}/>
        <Route path='/Cadastros/FiscaisdeSala' element={<h2 className='text-3xl m-auto font-semibold'>Fiscais de Sala</h2>}/>
        <Route path='/Cadastros/CursosCENED' element={<h2 className='text-3xl m-auto font-semibold'>Cursos CENED</h2>}/>
        <Route path='/Cadastros/UsuariosdoSistema' element={<h2 className='text-3xl m-auto font-semibold'>Usuários do Sistema</h2>}/>
      </Routes>
    </header>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;