import { Link } from 'react-router-dom';
import { projectsData } from '../ProjectDetail'; // Importa os dados

const ListaProjetos = () => {
    // Array de Projetos
    const listProjects = Object.entries(projectsData).map(([path, project]) => ({
      name: project.name,
      path: path,
      icon: project.icon,
      date: project.date,
    }));

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 md:px-6">
            {listProjects.map((project, index) => (
                // Link para que direcione
                <Link key={index} to={`/projects/${project.path}`}>
                    <div className="bg-neutral-900 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 overflow-hidden flex flex-col">
                        {/* Imagem */}
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
                </Link>
            ))}
        </div>
    );
};

export default ListaProjetos;