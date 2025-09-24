const Contact = () => {
    return (
        <section className="flex flex-col items-center text-white w-full py-20 px-4 md:px-12 box-border">
            {/* Título e Subtítulo */}
            <div className="flex flex-col w-full p-0 text-center">
                <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">Onde me Encontrar</h1>
                <p className="text-xl md:text-2xl text-white mt-2">Sinta-se livre para conectar comigo! 😊</p>
            </div>

            <div className="flex flex-col items-center w-full max-w-2xl mt-8">
                {/* Links */}
                <div className="flex gap-4 items-center mb-6">
                    <a href="https://wa.me/5516992322494" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-7 h-auto brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                    </a>
                    <a href="https://www.instagram.com/luiz.fernando.balbino/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/instagram.png" alt="Instagram" className="w-7 h-auto brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/luiz-fernando-balbino-2336a1349/" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/linkedin.png" alt="LinkedIn" className="w-7 h-7 brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                    </a>
                    <a href="https://github.com/NandoLu" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/github.png" alt="GitHub" className="w-7 h-7 brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                    </a>
                    <a href="https://www.youtube.com/@luiz.fernando.balbino" target="_blank" rel="noopener noreferrer">
                        <img src="/icons/youtube.png" alt="YouTube" className="w-7 h-7 brightness-0 invert transition-opacity duration-300 hover:opacity-70 cursor-pointer" />
                    </a>
                </div>

                {/* Botão de Download */}
                <a href="/caminho-para-seu-curriculo.pdf" download className="bg-[#0b3d8a] text-white font-semibold py-3 px-6 rounded-2xl transition-transform duration-300 hover:scale-105 mb-6">
                    Baixar currículo
                </a>

                {/* Formulário */}
                <form className="bg-neutral-900 p-6 rounded-xl w-full max-w-2xl flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <input type="text" placeholder="Nome" className="p-3 rounded-md bg-neutral-800 border border-neutral-700 w-full text-white" />
                        <input type="email" placeholder="Email" className="p-3 rounded-md bg-neutral-800 border border-neutral-700 w-full text-white" />
                    </div>
                    <textarea placeholder="Mensagem" rows="5" className="p-3 rounded-md bg-neutral-800 border border-neutral-700 w-full text-white resize-none"></textarea>
                    <button type="submit" className="bg-[#0b3d8a] text-white font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:scale-105">
                        Enviar Mensagem
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;