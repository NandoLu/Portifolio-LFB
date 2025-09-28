import educochain from '../../assets/project-img/educochain.png';
import safewater from '../../assets/project-img/safewater.png';
import galeriavirtual from '../../assets/project-img/galeriavirtual.png';

const ListaProjetos = () => {
    // Array de Projetos
    const listProjects = [
        { name: 'EduCoChain', icon: educochain, date: '23 de junho de 2025' },
        { name: 'SafeWater', icon: safewater, date: '10 de março de 2025' },
        { name: 'Galeria Virtual', icon: galeriavirtual, date: '5 de fevereiro de 2025' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 md:px-6">
            {listProjects.map((project, index) => (
                <div key={index} className="bg-neutral-900 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col">
                    <div className="flex justify-center items-center bg-gray-800 relative h-48 md:h-60">
                        <img
                            src={project.icon}
                            alt={project.name}
                            className="absolute inset-0 w-full h-full object-cover"
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