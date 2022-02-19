import styled from "styled-components";
import Main from "../components/UI/Main";

const StyledMain = styled(Main)`
  min-width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;

  h2 {
    margin-bottom: 20px;
  }

  .profile {
    width: 50%;
    font-size: 36px;
    line-height: 50px;
  }

  .avatar {
    width: 50%;

    img {
      border-radius: 50px;
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .profile,
    .avatar {
      width: 100%;
      text-align: center;
    }
  }
`;

const Home = () => {
  return (
    <StyledMain>
      <div className="avatar">
        <img src="assets/images/home/avatar.jpg" alt="avatar" />
      </div>
      <div className="profile">
        <h2>Hi, I am Yang</h2>
        <p>Web Developer</p>
      </div>
    </StyledMain>
  );
}

export default Home;
