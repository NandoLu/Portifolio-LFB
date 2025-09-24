import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import '../index.css';

function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;