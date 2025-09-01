import './Section.css';

const Section = () => {
    return (
        <nav className="container-section">
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

export default Section;