import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">LFB</a>
            </div>
            <ul className="nav-menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#projetos">Projetos</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;