import './Footer.css';

const Footer = () => {
    return (
        <nav className="footer">
            <ul className="footer-list">
                <li><a href="#whats">whats</a></li>
                <li><a href="https://www.instagram.com/luiz.fernando.balbino/">insta</a></li>
                <li><a href="https://www.linkedin.com/in/luiz-fernando-balbino-2336a1349/">linkedin</a></li>
                <li><a href="https://github.com/NandoLu">github</a></li>
                <li><a href="https://www.youtube.com/@luiz.fernando.balbino">yout</a></li>
            </ul>
            <div className="logo">
                <p>Desenvolvido por Luiz Fernando Balbino &copy; 2025</p>
            </div>
            
        </nav>
    );
}

export default Footer;