import Header from './Header'
import Project from './Project'

import './App.css'

import odoo_logo from './assets/odoo_logo.png'
import psql_logo from './assets/psql_logo.png'
import python_logo from './assets/python_logo.png'
import pytorch_logo from './assets/pytorch_logo.png'
import react_logo from './assets/react_logo.png'

function App() {

  return (
    <>
      <Header />

      <div className='div-personal_info'>
        <button className='normal'>Datos académicos</button>
        <button className='normal'>Redes sociales</button>
        <button className='playground'><span>Playground</span></button>
      </div>

      <div className='div-projects'>
        <h2>Proyectos Hechos</h2>
        <Project />
      </div>
    </>
  )
}

export default App
