import nodejsIcon from '../../assets/icons/nodejs.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import pythonIcon from '../../assets/icons/python.svg';

const ListaProjetos = () => {
    // Array de Projetos
    const listProjects = [
        { name: 'EduCoChain', icon: pythonIcon, date: '23 de junho de 2025' },
        { name: 'Proza', icon: javascriptIcon, date: '15 de maio de 2025' },
        { name: 'SafeWater', icon: typescriptIcon, date: '10 de março de 2025' },
        { name: 'Galeria Virtual', icon: nodejsIcon, date: '5 de fevereiro de 2025' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 md:px-6">
            {listProjects.map((project, index) => (
                <div key={index} className="bg-neutral-900 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col">
                    {/* Imagem */}
                    <div className="flex justify-center items-center bg-gray-800 p-8 h-4/2">
                        <img
                            src={project.icon}
                            alt={project.name}
                            className="w-24 h-24 object-contain"
                        />
                    </div>
                    
                    {/* Informações do projeto */}
                    <div className="flex flex-col items-center text-center p-4 flex-grow">
                        <h2 className="mt-0 mb-2 text-2xl font-semibold">{project.name}</h2>
                        <span className="text-gray-400 text-sm">{project.date}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListaProjetos;