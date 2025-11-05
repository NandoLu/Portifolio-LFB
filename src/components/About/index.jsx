import Habilidades from "../Habilidades";

const About = () => {
    return (
        <>
            <section className="flex flex-col md:flex-row flex-1 justify-around items-center text-white w-full py-20 md:px-12 box-border">
                {/* Primeira div com o texto principal */}
                <div className="flex flex-col w-full md:w-1/3 p-0 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">
                        Quem sou eu?
                    </h1>
                    <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">
                        Estudante de <span className="text-blue-600">Engenharia de Software</span>
                    </h1>
                </div>
                {/* Segunda div com a descrição */}
                <div className="flex flex-col w-full md:w-2/4 mt-8 md:mt-0 items-center justify-center gap-4">
                    <p className="font-normal text-lg md:text-xl text-center md:text-left">
                        Sou bacharelando de <span className="text-blue-600">Engenharia de Software (2/8) na FIAP</span>, tenho 19 anos e estou buscando uma oportunidade de estágio como <span className="text-blue-600">Desenvolvedor</span>.
                    </p>
                    <p className="font-normal text-lg md:text-xl text-center md:text-left">
                        Além disso, sou formado em <span className="text-blue-600">Técnico em Informática pelo IFSULDEMINAS</span>, onde comecei a ficar fascinado por tecnologia.
                    </p>
                    <p className="font-normal text-lg md:text-xl text-center md:text-left">
                        Sou apaixonado por criar soluções novas e úteis através do código. Nas horas vagas, gosto de expressar minha criatividade pintando e desenhando.
                    </p>
                </div>
            </section>
            {/* HABILIDADES */}
            <section className="flex flex-col items-center text-white w-full py-20 px-4 md:px-12 box-border">
                <div className="flex flex-col items-center w-full p-0 gap-6">
                    <Habilidades />
                </div>
            </section>
        </>
    );
}

export default About;