import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import '../index.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="px-20 pt-6">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;