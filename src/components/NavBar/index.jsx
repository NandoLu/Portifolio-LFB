import {Link} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a>LFB</a>
            </div>
            <ul className="nav-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/">Projetos</Link></li>
                <li><Link to="/">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;