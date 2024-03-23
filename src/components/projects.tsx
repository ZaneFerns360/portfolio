import React from "react";

interface Project {
  title: string;
  name: string;
  image: string;
}

const projects: Project[] = [
  { title: "Project 1", name: "Name 1", image: "img/flask.png" },
  { title: "Project 2", name: "Name 2", image: "img/flask.png" },
  { title: "Project 3", name: "Name 3", image: "img/flask.png" },
  { title: "Project 4", name: "Name 4", image: "img/flask.png" },
];

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {projects.map((project, index) => (
        <div key={index} className="rounded-lg bg-gray-900 p-4">
          <a href="##" className="group relative">
            <img
              src={project.image}
              alt={project.title}
              className="h-40 w-full object-cover group-hover:opacity-50"
            />
            <div className="relative inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-center text-white">
                <p className="text-lg font-semibold">{project.title}</p>
                <p>{project.name}</p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
