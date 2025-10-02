import { useParams, useNavigate } from 'react-router-dom';
import educochain from '../../assets/project-img/educochain.png';
import safewater from '../../assets/project-img/safewater.png';
import sf1 from '../../assets/project-img/sf-1.png';
import sf2 from '../../assets/project-img/sf-2.png';
import sf3 from '../../assets/project-img/sf-3.png';
import edu1 from '../../assets/project-img/edu-1.jpg';
import edu2 from '../../assets/project-img/edu-2.jpg';
import edu3 from '../../assets/project-img/edu-3.jpg';
import galeriavirtual from '../../assets/project-img/galeriavirtual.png';

export const projectsData = {
    'educochain': {
        name: 'EduCoChain',
        date: '23 de junho de 2025 (em desenvolvimento)',
        icon: educochain,
        project: 'DApp desenvolvido para o TOKENNATION Hackathon, com foco em trazer transparência e auditabilidade à gestão de verbas públicas para a educação, garantindo que o dinheiro público chegasse ao seu destino correto e que a sociedade pudesse acompanhar cada etapa do processo.',
        tecnologies: ['React Native', 'Node.js', 'TypeScript', 'Git', 'Smart Contracts', 'BNB Chain'],
        description: 'Fui responsável pelo desenvolvimento do protótipo do dApp. Isso incluiu a arquitetura técnica (Backend) baseada em Smart Contracts, a integração Full-Stack (conectando o frontend com os Contratos na BNB Chain), e a documentação do código.',
        images: [edu1, edu2, edu3]
    },
    'safewater': {
        name: 'SafeWater',
        date: '10 de março de 2025',
        icon: safewater,
        project: 'Uma plataforma para enfrentar os desafios de inundações em São Paulo, visando proteger vidas e reduzir perdas materiais para a população.',
        tecnologies: ['HTML', 'CSS', 'JavaScript', 'Python (backend)', 'Git', 'Wokwi', 'Twilio'],
        description: 'Minhas contribuições incluíram o desenvolvimento do backend em Python, o frontend e um sensor de nível de água Arduino em tempo real. Também fui responsável pela arquitetura do frontend e pela implementação da API Twilio para comunicação dinâmica de alertas por SMS.',
        images: [sf1, sf2, sf3]
    },
    'galeriavirtual': {
        name: 'Galeria Virtual',
        date: '5 de fevereiro de 2024',
        icon: galeriavirtual,
        project: 'Galeria Virtual desenvolvida para o projeto de extensão do IFSULDEMINAS “Poesia em Tirinhas”, como trabalho de conclusão de curso.',
        tecnologies: ['Django', 'Python', 'HTML', 'BootStrap', 'CSS', 'Git'],
        description: 'Liderei o ciclo completo de desenvolvimento, desde a idealização e documentação até o desenvolvimento das funcionalidades interativas, responsividade, banco de dados, login e cadastros de usuários.',
        images: []
    }
};

const ProjectDetail = () => {
    const { projectName } = useParams();
    const navigate = useNavigate();

    const project = projectsData[projectName];

    if (!project) {
        return <div className="text-white text-center py-20">Projeto não encontrado.</div>;
    }

    return (
        <section className="flex flex-col items-center text-white w-full py-10 px-4 md:px-12 box-border">
            <div className="w-full max-w-7xl flex flex-col items-center">
                {/* Botão de voltar */}
                <button
                    onClick={() => navigate(-1)}
                    className="bg-gray-800 text-white py-2 px-4 rounded-lg self-start mb-8 transition-transform duration-300 hover:scale-105"
                >
                    &larr; Voltar
                </button>

                {/* Contêiner principal para imagem e texto */}
                <div className="flex flex-col md:flex-row items-center md:items-start w-full md:space-x-8">
                    {/* Imagem principal */}
                    <img
                        src={project.icon}
                        alt={project.name}
                        className="w-full max-w-[150px] md:max-w-[200px] h-auto mb-8 md:mb-0 rounded-xl shadow-lg flex-shrink-0"
                    />

                    {/* Contêiner do texto */}
                    <div className="flex flex-col md:items-start items-center text-center md:text-left flex-grow">
                        {/* Título e data do projeto */}
                        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-blue-600">{project.name}</h1>
                        <span className="text-gray-400 text-sm md:text-base">{project.date}</span>

                        {/* Informações detalhadas */}
                        <div className="w-full mt-8">
                            <h2 className="text-2xl font-semibold mb-2 text-center md:text-left text-blue-600">Projeto</h2>
                            <p className="text-lg md:text-xl">{project.project}</p>
                        </div>

                        <div className="w-full mt-6">
                            <h2 className="text-2xl font-semibold mb-2 text-center md:text-left text-blue-600">Tecnologias Utilizadas</h2>
                            {/* Tags de tecnologia */}
                            <div className="flex flex-wrap gap-2 text-lg md:text-xl">
                                {project.tecnologies.map((tech, index) => (
                                    <span key={index} className="bg-blue-600 text-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="w-full mt-6">
                            <h2 className="text-2xl font-semibold mb-2 text-center md:text-left text-blue-600">Minhas Contribuições</h2>
                            <p className="text-lg md:text-xl">{project.description}</p>
                        </div>
                    </div>
                </div>

                {/* Galeria de imagens */}
                <div className="w-full mt-12">
                    <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Galeria de Fotos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.images.map((image, index) => (
                            <div key={index} className="bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
                                <img
                                    src={image}
                                    alt={`${project.name} - Imagem ${index + 1}`}
                                    className="w-full h-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetail;