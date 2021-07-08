import React from 'react'
import './App.css';
// import Formulario from './components/Formulario'
//import Contador from './components/Contador'
//import Listado from './components/Listado'
import Temperatura from './components/Temperatura'
//import Formulario1 from './components/Formulario1'
// import Prueba from './components/Prueba'
//import Hola from './components/Hola'


function App() {
  return (
    <div className="App mt-5">
      <h1>Titulo de nuestro primer proyecto</h1>

      {/* <Hola /> */}
      {/* <Formulario></Formulario> */}
      {/* <Contador></Contador> */}

      {/* <Contador></Contador> */}
      {/* <Listado></Listado> */}
      <Temperatura></Temperatura>
      {/* <Formulario1></Formulario1> */}
      {/* <Prueba></Prueba> */}
    </div>
  );
}

export default App;
