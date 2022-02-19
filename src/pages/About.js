import styled from "styled-components";
import ExperienceGroup from "../components/ExperienceGroup";
import SkillGroup from "../components/SkillGroup";

const StyledAbout = styled.div`
  flex-grow: 1;

  h1 {
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 10px;
  }

  h3 {
    margin: 5px 5px 5px 0;
    opacity: 0.7;
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const About = () => {
  return (
    <StyledAbout>
      <h1>About</h1>
      <Group>
        <ExperienceGroup />
        <SkillGroup />
      </Group>
    </StyledAbout>
  );
}

export default About;
