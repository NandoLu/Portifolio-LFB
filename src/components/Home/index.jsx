import './Home.css';

const Home = () => {
    return (
        <>
            <nav className="section">
                <div className="title">
                    <h1>Olá!</h1>
                    <h1>Me chamo</h1>
                    <h1>Luiz Fernando Balbino</h1>
                </div>
                <div className='container-photo'>
                    <img className='photo' src='../public/luiz-photo.jpg' alt="Foto de Luiz Fernando Balbino"></img>
                </div>
            </nav>
            <nav className="section">
                <div className="text">
                    <h1>Um pouco sobre mim</h1>
                    <p>Sou estudante de Engenharia de Software na
                        FIAP, tenho 19 anos e estou buscando uma oportunidade de estágio como
                        Desenvolvedor.</p>
                    <p>Formado em Técnico em Informática em 2024 no Instituto Federal do Sul de Minas.</p>
                </div>
                <div className='container-photo'>
                    <img className='icon' src='../public/icons/data-management.png' alt="Icone Tecnologia"></img>
                </div>
            </nav>
            <div className="contribuicoes-container">
                <div className="title">
                    <h1 >Minhas Contribuições</h1>
                    <div className="github-graph">
                        <img
                            src="https://raw.githubusercontent.com/NandoLu/portfolio-assets/main/streak-stats.svg"
                            alt="Gráfico de Contribuições do GitHub"
                            className="contribuicoes-img"
                        />
                    </div>
                    <p className="github-link">
                        Veja meu perfil completo no <a href="https://github.com/NandoLu" target="_blank" rel="noopener noreferrer">GitHub</a>.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Home;