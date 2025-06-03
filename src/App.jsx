import Header from './Header'
import Project from './Project'
import Background_dots from './Background_dots'
import SocialCard from './SocialCard'

import './App.css'

import odoo_logo from './assets/odoo_logo.svg'
import psql_logo from './assets/psql_logo.svg'
import python_logo from './assets/python_logo.svg'
import pytorch_logo from './assets/pytorch_logo.svg'
import react_logo from './assets/react_logo.svg'

import vodudahue from './assets/sch_vodudahue.png'
import jpg_titulo from './assets/ceritficado_titulo.jpg'

import linkedin_logo from './assets/linkedin.svg'
import whatsapp_logo from './assets/whatsapp.svg'
import instagram_logo from './assets/instagram.svg'

function App() {

  return (
    <>
      <Header />

      <div className='div-personal_info'>

        <div className='buttons'>
          <button className='normal'>Datos académicos</button>
          <button className='normal'>Redes sociales</button>
          <button className='playground'><span>Playground</span></button>
        </div>

        <div className='intro'>
          <p>
            Soy Ingeniero Civil en Informática con experiencia en
            desarrollo de front-end, back-end, microservicios y
            redes neuronales de IA.
          </p>
          <p>
            Tengo experiencia trabajando en áreas como la industria forestal,
            trabajos de última milla con empresas de entregas de pedidos,
            trabajos con cervecerías, cafeterías y restoranes.
          </p>
          <p>
            Siempre buscando nuevos desafíos en rubros nuevos y nuevas tecnologías!
            Estas son las tecnologías con las que he trabajado y domino: <strong>↓</strong>
          </p>
        </div>

        <div className='techs'>
          <img src={odoo_logo} alt="Odoo ERP" />
          <img src={psql_logo} alt="PostreSQL" />
          <img src={python_logo} alt="Python" />
          <img src={pytorch_logo} alt="Pytorch" />
          <img src={react_logo} alt="React.js" />
        </div>

        <div className='intro'>
          <p>Y estos son unos de los proyectos en los que he trabajado! <strong>↓</strong></p>
        </div>

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

      <div className='div-redes-sociales'>

        <span className='div-center-title'>
          <h1>Redes Sociales</h1>
        </span>

        <div className='social-cards'>
          <SocialCard image={linkedin_logo}>
            <div>
              <p>Conecta conmigo por <strong>LinkedIn</strong> para trabajar juntos!</p>
              <button
                className='normal'
                onClick={() => window.open('https://www.linkedin.com/in/felipe-lagos-mart%C3%ADnez-b90922261/', '_blank')}>Visitar LinkedIn
              </button>
            </div>
          </SocialCard>

          <SocialCard image={whatsapp_logo}>
            <div>
              <p>Si lo deseas, puedes contactacte directamente conmigo también!</p>
              <button
                className='normal'
                onClick={() => window.open('https://wa.me/56967084316', '_blank')}>Háblame por WhatsApp!
              </button>
            </div>
          </SocialCard>

          <SocialCard image={instagram_logo}>
            <div>
              <p>Así como con mi WhatApp, si lo deseas, puedes hablarme por DM de Instagram!</p>
              <button
                className='normal'
                onClick={() => window.open('https://www.instagram.com/pipe.l.m/', '_blank')}>Envíame un DM!
              </button>
            </div>
          </SocialCard>
        </div>


      </div>
    </>
  )
}

export default App
