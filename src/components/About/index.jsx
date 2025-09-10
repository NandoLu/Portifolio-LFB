import './About.css';

const About = () => {
    return (
        <nav className="section">
            <div className="saudacoes">
                <h1>Quem sou eu?</h1>
                <h1>Estudante de Engenharia de Software</h1>
                <p className="font-normal text-lg md:text-xl m-0">
                    Sou bacharelando de Engenharia de Software (2/8) na FIAP, tenho 19 anos e estou buscando uma oportunidade de estágio como Desenvolvedor.
                </p>
            </div>
            <div className='container-photo'>
                <p></p>
                <img className='photo' src='../public/luiz-photo.jpg'></img>
            </div>
        </nav>
    );
}

export default About;