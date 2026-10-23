//aca importo los componentes asi los traigo y los pueda usar
import './App.css'
import {Routes, Route} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  //route relaciona con path la url con lo que se muestre en element
  //routes renderiza las route que coincidan
  //sidebar fuera de las rutas p/que cambie el contenido y no el menu
  return (
    <div className='layout'>
      <Sidebar />
      <main className='contenido'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App