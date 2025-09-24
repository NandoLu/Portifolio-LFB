import Habilidades from "../Habilidades";

const About = () => {
    return (
        <section className="flex flex-col flex-1 justify-around items-center text-white w-full py-20 px-4 md:px-12 box-border">
            <div className="flex flex-col w-full md:w-1/2 p-0 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">Quem sou eu?</h1>
                <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">Estudante de Engenharia de Software</h1>
                <p className="font-normal text-lg md:text-xl m-0 md:m-1 mt-4 md:mt-6">
                    Sou bacharelando de Engenharia de Software (2/8) na FIAP, tenho 19 anos e estou buscando uma oportunidade de estágio como Desenvolvedor.
                </p>
            </div>
            {/* HABILIDADES */}
            <section className="flex flex-col items-center text-white w-full py-20 px-4 md:px-12 box-border">
                <div className="flex flex-col items-center w-full p-0 gap-6">
                    <Habilidades />
                </div>
            </section>
        </section>
    );
}

export default About;