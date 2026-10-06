function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
