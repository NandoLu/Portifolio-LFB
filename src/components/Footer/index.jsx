import './Footer.css';

const Footer = () => {
    return (
        <nav className="footer">

            <div className="icons">
                <a href="https://wa.me/5516992322494" target="_blank">
                    <img src="../public/icons/whatsapp.png" alt="WhatsApp" />
                </a>
                <a href="https://www.instagram.com/luiz.fernando.balbino/" target="_blank">
                    <img src="../public/icons/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/luiz-fernando-balbino-2336a1349/" target="_blank">
                    <img src="../public/icons/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://github.com/NandoLu" target="_blank">
                    <img src="../public/icons/github.png" alt="GitHub" />
                </a>
                <a href="https://www.youtube.com/@luiz.fernando.balbino" target="_blank">
                    <img src="../public/icons/youtube.png" alt="YouTube" />
                </a>
            </div>

            <div className="logo">
                <p>Desenvolvido por Luiz Fernando Balbino © 2025</p>
            </div>
        </nav>
    );
}

export default Footer;