import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'

// pages
import Raiz from './pages/Raiz'
import Doctors from './pages/Doctors'
import Specialities from './pages/Specialities'

function App() {

  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Raiz/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/specialities' element={<Specialities/>} />
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
