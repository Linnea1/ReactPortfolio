import { useState, useEffect } from "react";
import Card from "../components/common/Card.jsx";
import CardSkeleton from "../components/common/CardSkeleton.jsx";
import projects from "../data/projects.json";
import "./Projects.css";

function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false once component is mounted and data is ready
    setLoading(false);
  }, []);

  return (
    <div className="page">
      <div className="page-content">
        <h1 className="alternative-h1">My Projects</h1>
        <p>
          Check out my portfolio of projects that showcase my skills in web
          development and design. Explore my work below and see how I can help
          bring your next idea to reality.
        </p>

        <div className="projects-grid">
          {loading
            ? Array(6).fill(0).map((_, index) => <CardSkeleton key={index} />)
            : projects.map((project) => (
                <Card
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  thumbnail={project.thumbnail}
                  images={project.images.filter((img) => img !== "")}
                  tags={project.tools.filter((tool) => tool !== "")}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
