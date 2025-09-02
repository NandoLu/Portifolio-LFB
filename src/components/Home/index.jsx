import './Home.css';

const Home = () => {
    return (
        <nav className="container-home">
            <div className="saudacoes">
                <h1>Olá!</h1>
                <h1>Me chamo</h1>
                <h1>Luiz Fernando Balbino</h1>
            </div>
            <div className='container-photo'>
                <img className='photo' src='../public/luiz-photo.jpg'></img>
            </div>
        </nav>
    );
}

export default Home;