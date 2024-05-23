import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Card from './Components/Card';
import Form from './Components/Formorm';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="App">
        <Card />
        <button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
        </button>
        {showForm && <Form />}
      </div>
    </>
  );
}

export default App
