import ProjectCard from "../project-card";
import projects from '../../../public/project.json'
export default function Projects() {

  return (
    <div className={'h-max'}>
      <div className={"text-center m-3 text-3xl py-10"}>My Projects:</div>
        <div className={"flex flex-wrap justify-evenly gap-3 mb-6"}>
        {
          projects.map((project, index) => (
            <ProjectCard key={index} {...project}/>
          ))
        }
      </div>
    </div>
  )
}