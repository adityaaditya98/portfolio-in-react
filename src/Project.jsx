import { PROJECTS } from "./assets/ProjectDetails";

function Project(){
 return (
    <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">
        Project
        </h2>
        <div>
            {PROJECTS.map((project,index)=>(
                <div key={index} className="mb-8 flex-wrap lg:justify-center flex items-center">
                    <div className="w-full lg:w-1/4 place-items-center">
                    <img src={project.image} width={250} height={250} alt={project.title} />
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                    <h3 className="mb-2 font-semibold text-2xl">
                        {project.title}
                    </h3>
                    <p className="mb-4 text-stone-400">{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300" key={index}>
                            {tech}
                        </span>
                    ))}
                    </div>
                    </div>
            ))
            }
        </div>

    </div>

 )
}
export default Project;