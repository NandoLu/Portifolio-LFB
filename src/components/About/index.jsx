import './About.css';

const About = () => {
    return (
        <nav className="section">
            <div className="saudacoes">
                <h1>Um pouco sobre mim:</h1>
            </div>
            <div className='container-photo'>
                <img className='photo' src='../public/luiz-photo.jpg'></img>
            </div>
        </nav>
    );
}

export default About;