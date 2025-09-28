import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import ProjectDetail from '../components/ProjectDetail';
import DynamicBackground from '../components/DynamicBackground';
import '../index.css';

function App() {
  return (
    <>
      <DynamicBackground />
      <NavBar />
      <div className="px-4 pt-2">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          {/* Rota dinâmica */}
          <Route path='/projects/:projectName' element={<ProjectDetail />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;