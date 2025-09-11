import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-[#021024] text-white p-6 md:p-8 flex justify-between items-center w-full box-border">
            <div className="logo">
                <Link to="/" className="text-2xl font-bold text-white no-underline">
                    LFB
                </Link>
            </div>
            

            <button 
                onClick={toggleMenu} 
                className="md:hidden text-white focus:outline-none z-50"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    ></path>
                </svg>
            </button>


            <ul className="hidden md:flex space-x-6 list-none m-0 p-0">
                <li><Link to="/" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Home</Link></li>
                <li><Link to="/about" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Sobre</Link></li>
                <li><Link to="/" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Projetos</Link></li>
                <li><Link to="/" className="text-lg text-white no-underline transition-colors duration-300 hover:text-[#a0a0a0]">Contato</Link></li>
            </ul>


            <div 
                className={`fixed top-0 right-0 h-full w-64 bg-[#021024] shadow-lg z-40 transition-transform duration-500 ease-in-out transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                <div className="flex justify-end p-6">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-8 text-2xl font-bold mt-10">
                    <li><Link to="/" onClick={toggleMenu} className="text-white no-underline">Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu} className="text-white no-underline">Sobre</Link></li>
                    <li><Link to="/" onClick={toggleMenu} className="text-white no-underline">Projetos</Link></li>
                    <li><Link to="/" onClick={toggleMenu} className="text-white no-underline">Contato</Link></li>
                </ul>
            </div>
            

            {isMenuOpen && (
                <div 
                    onClick={toggleMenu} 
                    className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
                ></div>
            )}
        </nav>
    );
};

export default NavBar;