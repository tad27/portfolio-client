import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../../client";

const ProjectContext = createContext();
const ResumeLink = "https://bit.ly/3IZ4rqc";

export const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    const data = await client.fetch('*[_type == "work"]');
    setProjects(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <ProjectContext.Provider
      value={{ projects, isLoading, setLoading, ResumeLink }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
export default ProjectContext;
