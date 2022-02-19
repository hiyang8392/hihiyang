import styled from "styled-components";

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px 10px;
  max-width: 100%;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 10px;

  :hover {
    transform: scale(1.03);
  }

  .image {
    display: flex;
    margin-right: 3px;

    img {
      width: 30px;
      height: 30px;
    }
  }

  .info .title {
    font-size: 14px;
  }
`;

const Skill = (props) => {
  return (
    <StyledLi>
      <div className="image">
        <img src={`/assets/images/skill/${props.image}.png`} alt="logo" />
      </div>
      <div className="info">
        <div className="title">{props.title}</div>
      </div>
    </StyledLi>
  );
};

export default Skill;