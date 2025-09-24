import ListaProjetos from '../ListaProjetos'

const Projects = () => {
    return (
        <>
            <section className="flex flex-col flex-1 justify-around items-center text-white w-full py-20 px-4 md:px-12 box-border">
                <div className="flex flex-col w-full md:w-1/2 p-0 text-center md:text-left">
                    <h1 className="text-3xl md:text-5xl font-bold m-0 md:m-1">Projetos</h1>
                </div>
                {/* PROJETOS */}
                <section className="flex flex-col items-center text-white w-full py-20 px-4 md:px-12 box-border">
                    <div className="flex flex-col items-center w-full md:w-4/5 lg:w-11/12 p-0 gap-6">
                        <ListaProjetos />
                    </div>
                </section>
            </section>
        </>
    )
}

export default Projects