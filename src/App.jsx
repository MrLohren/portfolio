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
      </div>

      {/* <div className='div-tecnologias'>
        <img className='img-tech' src={python_logo} alt="python_logo" />
        <img className='img-tech' src={pytorch_logo} alt="pytorch_logo" />
        <img className='img-tech' src={react_logo} alt="react_logo" />
        <img className='img-tech' src={psql_logo} alt="psql_logo" />
        <img className='img-tech' src={odoo_logo} alt="odoo_logo" />
      </div> */}

      {/* un Project por cada proyecto hecho */}
      <Project />
    </>
  )
}

export default App
