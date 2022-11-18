import React from 'react';
import './App.css';
//import Sidebar from './Components/Sidebar';
import Creargrupos from './pages/Creargrupos';
import VerEmpleados from './pages/VerEmpleados';
//import { ChakraProvider } from '@chakra-ui/react'
import Login from './pages/Login';
import VerGrupos from './pages/VerGrupos';
import CerrarSesion from './pages/CerrarSesion';
import Monitorear from './pages/Monitorear';
import Actualizargrupos from './pages/Actualizargrupos';
import { Route, Routes } from "react-router-dom"



function App() {
  return (
   <div className="App">
        <Routes>
          <Route path='/'  element={<Login/>}/>
          <Route path='/Crear-grupos'  element= {<Creargrupos/>}/>
          <Route path='/verempleados' element={<VerEmpleados/>}/>  
          <Route path='/vergrupos' element={<VerGrupos/>}/>
          <Route path='/actualizargrupos/:id' element={<Actualizargrupos/>}/>  
          <Route path='/monitorear' element={<Monitorear/>}/>  
          <Route path='/cerrarsesion' element={<CerrarSesion/>}/> 
        </Routes>
    </div>
  );
}

export default App;

// <div className="App"><Sidebar/></div>

/*
import CerrarSesion from './pages/CerrarSesion';
import CrearGrupo from './pages/CrearGrupo';
import Monitorear from './pages/Monitorear';

import VerGrupos from './pages/VerGrupos'; 
*/

/* 
<Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component ={VerEmpleados} />
      </Switch>
    </Router>
*/