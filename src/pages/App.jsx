import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import About from '../components/About'
import '../index.css'

function App() {

  return (
    <div className='container'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
