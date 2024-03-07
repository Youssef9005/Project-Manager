import { useState } from "react";
import NoProject from "./components/NoProjects";
import SideBar from "./components/SideBar";
import EditProject from "./components/EditProject";
import AddProject from "./components/AddProject";

function App() {
  const [projectIndex, setProjectIndex] = useState();

  const [projectState, setProjectState] = useState({
    projectState: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectState: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectState: undefined,
      };
    });
  }

  function handleEditProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        projectState: "edit",
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: projectIndex,
      };

      return {
        ...prevState,
        projectState: projectIndex,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  let content;

  if (projectState.projectState === null) {
    content = (
      <AddProject
        onCancel={handleCancelAddProject}
        onAdd={handleAddProject}
        addProject={setProjectState}
        project={projectState}
      />
    );
  } else if (projectState.projectState === undefined) {
    content = <NoProject onAdd={handleStartAddProject} />;
  } else {
    content = (
      <EditProject
        projects={projectState}
        ele={projectIndex}
        onCancel={handleCancelAddProject}
      />
    );
  }

  return (
    <section className="flex items-center">
      <SideBar
        projects={projectState.projects}
        getIndex={setProjectIndex}
        onAdd={handleStartAddProject}
        editProject={handleEditProject}
      />
      {content}
    </section>
  );
};

export default App;
