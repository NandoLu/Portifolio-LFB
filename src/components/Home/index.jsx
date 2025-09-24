import Habilidades from "../Habilidades";

const Home = () => {
    return (
        <>
            {/* SAUDAÇÕES */}
            <section className="flex flex-col md:flex-row flex-1 justify-around items-center text-white w-full py-20 px-4 md:px-12 box-border">
                <div className="flex flex-col w-full md:w-1/2 p-0 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">Olá!</h1>
                    <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">Me chamo</h1>
                    <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">Luiz Fernando Balbino</h1>
                </div>
                <div className="w-1/2 md:w-1/4 mt-8 md:mt-0 flex justify-center">
                    <img className="rounded-full w-full max-w-sm h-auto" src='../public/luiz-photo.jpg' alt="Foto de Luiz Fernando Balbino" />
                </div>
            </section>

            {/* SOBRE */}
            <section className="flex flex-col md:flex-row flex-1 justify-around items-center text-white w-full py-20 px-4 md:px-12 box-border">
                <div className="flex flex-col items-center md:items-start w-full md:w-1/2 p-0 gap-8 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-bold m-0">Um pouco sobre mim</h1>
                    <p className="font-normal text-lg md:text-xl m-0">
                        Sou bacharelando de Engenharia de Software (2/8) na FIAP, tenho 19 anos e estou buscando uma oportunidade de estágio como Desenvolvedor.
                    </p>
                    <p className="font-normal text-lg md:text-xl m-0">
                        Formado em Técnico em Informática em 2024 no Instituto Federal do Sul de Minas.
                    </p>
                </div>
                <div className="w-1/2 md:w-1/4 mt-8 md:mt-0 flex justify-center">
                    <img className="w-full h-auto max-w-sm filter brightness-0 invert transition-opacity duration-500 hover:opacity-50" src='../public/icons/data-management.png' alt="Icone Tecnologia" />
                </div>
            </section>

            {/* CONTRIBUICOES */}
            <section className="flex flex-col items-center text-white w-full box-border py-20 px-4 md:px-12">
                <div className="flex flex-col w-full items-center text-center">
                    <h1 className="text-3xl md:text-4xl font-bold m-0">Minhas Contribuições</h1>
                    <div className="w-full overflow-x-auto mt-5">
                        <img
                            src="https://raw.githubusercontent.com/NandoLu/portfolio-assets/main/github-contributions-calendar.svg"
                            alt="Gráfico de Contribuições do GitHub"
                            className="w-full h-auto max-w-2xl mx-auto"
                        />
                    </div>
                    <p className="text-center mt-5">
                        Veja meu perfil completo no <a href="https://github.com/NandoLu" target="_blank" rel="noopener noreferrer" className="text-[#3e85ff] no-underline text-base transition-colors duration-300 hover:text-white">GitHub</a>.
                    </p>
                </div>
            </section>


            {/* HABILIDADES */}
            <section className="flex flex-col items-center text-white w-full py-20 px-4 md:px-12 box-border">
                <div className="flex flex-col items-center w-full p-0 gap-6">
                    <h1 className="text-3xl md:text-4xl font-bold m-0">Habilidades</h1>
                    <Habilidades/>
                </div>
            </section>
        </>
    );
}

export default Home;