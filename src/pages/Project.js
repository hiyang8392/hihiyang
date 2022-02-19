import styled from "styled-components";
import ProjectItem from "../components/ProjectItem";
import projectData from "../data/project";

const StyledProject = styled.div`
  margin-bottom: 28px;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 10px;
  }

  h3 {
    margin: 5px 5px 5px 0;
  }
`;

const StyledGroup = styled.div`
  height: 375px;
  overflow-y: scroll;
`;

const projectItem = projectData.map((project) => {
  return (
    <ProjectItem
      key={project.image}
      image={project.image}
      name={project.name}
      demoUrl={project.demoUrl}
      githubUrl={project.githubUrl}
      desc={project.desc}
      techList={project.techList}
    />
  );
});

const Project = () => {
  return (
    <StyledProject>
      <h1>Project</h1>
      <StyledGroup>{projectItem}</StyledGroup>
    </StyledProject>
  );
}

export default Project;
