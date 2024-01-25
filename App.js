
import './App.css';
import Botoncito from './Componentes/componentebtn';
import Fecha from './Componentes/componentefecha';
import Datos from './Componentes/componenteDatos';
import PokemonSearch from './Componentes/PokemonSearch';

import Login from './Componentes/firebase/Login';
import { useState } from 'react';

function App() {
  const nombre = 'Erick'
  const materia = 'Desarrollo de Aplicaciones Web'
  const [isLoginModuleEnabled, setLoginModuleEnabled] = useState(false);

  const toggleLoginModule = () => {
    setLoginModuleEnabled(!isLoginModuleEnabled);
  };

  return (
    <div>
      <h1>Hola esta es mi primera pagina en React</h1>
      <p>React es bastante sencillito</p>
      <Fecha/>
      <Botoncito/>
      <Datos nombre = {nombre} materia ={materia} />
      <p>React es bastante sencillito no creen?</p>

      <h1>Pokemon Search App</h1>
      <PokemonSearch />

      <button onClick={toggleLoginModule}>
        {isLoginModuleEnabled
        ? "Deshabilitar Modulo de Inicio de Sesion"
        : "Habilitar Modulo de Inicio de Sesion"}
      </button>
      {isLoginModuleEnabled && <Login />}

    </div>
  );
}

export default App;
