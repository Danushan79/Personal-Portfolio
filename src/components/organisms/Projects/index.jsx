import Project from "../../molecules/Project";
import projects from "../../../data/projects";

export default function MyWorks() {
  return (
    <div className="container mx-auto  w-full md:px-20 px-8 text-black text-xl min-h-screen md:py-32 py-16">
      <h1 className="uppercase text-center text-4xl pb-12 font-bold">
        My Works
      </h1>

      {/* {projects.length > 0 ? (
        projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 "
          >
            <Project
              description={project.description}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
            />
          </div>
        ))
      ) : (
        <p className="text-center">No projects available now</p>
      )} */}

      {projects.length > 0 ? (
        <div className="grid grid-flow-row auto-rows-max grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
          {projects.map((project, index) => (
            <Project
              key={index}
              description={project.description}
              imageUrl={project.imageUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      ) : (
        <p className="text-center">No projects available now</p>
      )}
    </div>
  );
}
