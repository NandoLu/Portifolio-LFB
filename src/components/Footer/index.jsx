import './Footer.css';

const Footer = () => {
    return (
        <nav className="footer">
            <ul className="footer-list">
                <li><a href="https://wa.me/5516992322494" target="_blank">whats</a></li>
                <li><a href="https://www.instagram.com/luiz.fernando.balbino/" target="_blank">insta</a></li>
                <li><a href="https://www.linkedin.com/in/luiz-fernando-balbino-2336a1349/" target="_blank">linkedin</a></li>
                <li><a href="https://github.com/NandoLu" target="_blank">github</a></li>
                <li><a href="https://www.youtube.com/@luiz.fernando.balbino" target="_blank">yout</a></li>
            </ul>
            <div className="logo">
                <p>Desenvolvido por Luiz Fernando Balbino &copy; 2025</p>
            </div>
        </nav>
    );
}

export default Footer;