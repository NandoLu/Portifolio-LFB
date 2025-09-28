
const Footer = () => {
    return (
        <footer className="flex flex-col items-center justify-between bg-black text-white p-8 w-full box-border">
            <div className="flex gap-4 items-center mb-6">
                <a href="https://wa.me/5516992322494" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-7 h-auto brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/luiz.fernando.balbino/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram.png" alt="Instagram" className="w-7 h-auto brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/in/luiz-fernando-balbino-2336a1349/" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/linkedin.png" alt="LinkedIn" className="w-7 h-auto brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                </a>
                <a href="https://github.com/NandoLu" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/github.png" alt="GitHub" className="w-7 h-auto brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/@luiz.fernando.balbino" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/youtube.png" alt="YouTube" className="w-7 h-auto brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                </a>
            </div>

            <div>
                <p>Desenvolvido por Luiz Fernando Balbino © 2025</p>
            </div>
        </footer>
    );
}

export default Footer;