import Header from './Header'
import Project from './Project'
import Background_dots from './Background_dots'

import './App.css'

import odoo_logo from './assets/odoo_logo.png'
import psql_logo from './assets/psql_logo.png'
import python_logo from './assets/python_logo.png'
import pytorch_logo from './assets/pytorch_logo.png'
import react_logo from './assets/react_logo.png'

import vodudahue from './assets/sch_vodudahue.png'
import jpg_titulo from './assets/ceritficado_titulo.jpg'

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
        <span className='div-center-title'>
          <h2>Proyectos Hechos</h2>
        </span>
        <Project img={vodudahue}>
          <div className='div-project-content'>
            <h2>Mapa Sonoro Vodudahue</h2>
            <p>
              Plataforma online que te permite visualizar las vistas panorámicas
              de diversos puntos llamativos del Parque Vodudahue, ubicado
              dentro del Parque Nacional Pumalín, en la X Región de Los Lagos, Chile.
              <br />
              Además de vistas, la plataforma ofrece los sonidos en 360° de la
              naturaleza en ese punto, a lo largo de todas las estaciones del año.
            </p>
            <div className='div-button'>
              <button
                className='normal'
                onClick={() => window.open('http://64.23.214.210:5173/', '_blank')}>
                Visitar página WEB
              </button>
            </div>
          </div>
        </Project>
      </div>

      <div id='div-datos_academicos' className='div-datos_academicos'>

        <Background_dots />

        <span className='div-center-title'>
          <h1>Datos Académicos</h1>
        </span>

        <span className='div-center-title-titulo'>
          <h2>Título Universitario</h2>
        </span>

        <div className='div-titulo-container'>
          <img className='img-titulo' src={jpg_titulo} alt="imagen titulo" />
        </div>
      </div>
    </>
  )
}

export default App
