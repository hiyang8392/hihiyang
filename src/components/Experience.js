import styled from "styled-components";

const StyledExperience = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  :hover {
    transform: scale(1.03);
  }

  .image {
    margin-right: 10px;

    img {
      width: 60px;
      height: 60px;
      border-radius: 4px;
    }
  }

  .info {
    .title {
      font-size: 16px;
    }

    .company {
      font-size: 12px;
    }
  }
`;

const Experience = (props) => {
  return (
    <StyledExperience>
      <div className="image">
        <img src={`/assets/images/experience/${props.image}.png`} alt="logo" />
      </div>
      <div className="info">
        <div className="title">{props.title}</div>
        <div className="company">{props.company}</div>
      </div>
    </StyledExperience>
  );
};

export default Experience;
