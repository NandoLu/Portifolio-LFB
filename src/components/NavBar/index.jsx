import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="bg-[#021024] text-white p-6 md:p-8 flex justify-between items-center w-full box-border">
            <div className="logo">
                <Link to="/" className="text-2xl font-bold text-white no-underline">
                    LFB
                </Link>
            </div>
            <ul className="hidden md:flex space-x-6 list-none m-0 p-0">
                <li><Link to="/" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Home</Link></li>
                <li><Link to="/about" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Sobre</Link></li>
                <li><Link to="/" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Projetos</Link></li>
                <li><Link to="/" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;