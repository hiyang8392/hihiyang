import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  ul {
    display: flex;
    justify-content: flex-end;

    li {
      margin-left: 30px;
      font-size: 16px;
      font-weight: bold;

      a {
        color: #A1AFBA;
        opacity:0.5;

        :active,
        &.active {
          color: #2B4C5D;
          opacity: 1;
        }

        &:hover {
          opacity: 1;
        }
      }
    }
  }
`;

const MainNav = () => {
  return (
    <Header>
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/about" exact>About</NavLink></li>
          <li><NavLink to="/project" exact>Project</NavLink></li>
        </ul>
      </nav>
    </Header>
  );
}

export default MainNav;
