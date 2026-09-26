//aca importo los componentes asi los traigo y los pueda usar
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'


//el header dentro del return es para utilizarlo dentro de la funcion App

function App() {

  return (
    <div>
      <Header 
      nombre="Maximiliano Lorenzo"
      profesion="Desarrollador Web"
      />

      <Hero 
      titulo="Bienvenido a mi Portafolio"
      descripcion="Soy un estudiante de Programacion y encuentro soluciones a tus problemas a traves del Desarrolo Web"
      />

      <About />

      <Skills />

      <Projects />

      <Footer />


    </div>
  )
}

export default App