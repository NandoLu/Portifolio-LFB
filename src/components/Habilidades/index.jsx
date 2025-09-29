import nodejsIcon from '../../assets/icons/nodejs.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import pythonIcon from '../../assets/icons/python.svg';
import reactIcon from '../../assets/icons/react.svg';
import reactNativeIcon from '../../assets/icons/react-native.svg';
import gitIcon from '../../assets/icons/git.svg';
import githubIcon from '../../assets/icons/github.svg';

const Habilidades = () => {
    // Array de dados com as habilidades e os caminhos das imagens
    const backendSkills = [
        { name: 'Node JS', icon: nodejsIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'Django', icon: pythonIcon },
    ];

    const frontendSkills = [
        { name: 'React JS', icon: reactIcon },
        { name: 'React-Native', icon: reactNativeIcon },
        { name: 'JavaScript', icon: javascriptIcon },
        { name: 'TypeScript', icon: typescriptIcon },
        { name: 'Python', icon: pythonIcon },
    ];

    const tools = [
        { name: 'Git', icon: gitIcon },
        { name: 'GitHub', icon: githubIcon },
    ];

    return (
        <>
            {/* HABILIDADES */}
            <section className="flex flex-col items-center text-white w-full md:px-12 box-border">
                <div className="flex flex-col items-center w-full p-0 gap-6">
                    <h1 className="text-3xl md:text-4xl font-bold m-0">Habilidades</h1>
                    <div className="flex flex-col items-center gap-4 w-full">
                        {/* Back-End */}
                        <div className="bg-black rounded-xl p-4 md:p-6 w-full max-w-4xl">
                            <h2 className="mt-0 mb-3 text-2xl">Back-End</h2>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {backendSkills.map((skill, index) => (
                                    <li key={index} className="bg-gray-800 text-white p-4 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:scale-105 cursor-pointer h-32 w-full">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 mb-2"
                                        />
                                        <span className="text-sm mt-1">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Front-End */}
                        <div className="bg-black rounded-xl p-4 md:p-6 w-full max-w-4xl">
                            <h2 className="mt-0 mb-3 text-2xl">Front-End</h2>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {frontendSkills.map((skill, index) => (
                                    <li key={index} className="bg-gray-800 text-white p-4 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:scale-105 cursor-pointer h-32 w-full">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 mb-2"
                                        />
                                        <span className="text-sm mt-2">{skill.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ferramentas */}
                        <div className="bg-black rounded-xl p-4 md:p-6 w-full max-w-4xl">
                            <h2 className="mt-0 mb-3 text-2xl">Ferramentas</h2>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {tools.map((tool, index) => (
                                    <li key={index} className="bg-gray-800 text-white p-4 rounded-xl text-center flex flex-col items-center justify-center transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:scale-105 cursor-pointer h-32 w-full">
                                        <img
                                            src={tool.icon}
                                            alt={tool.name}
                                            className="w-12 h-12"
                                        />
                                        <span className="text-sm mt-2">{tool.name}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Habilidades;