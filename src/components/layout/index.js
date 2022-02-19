import styled from "styled-components";
import Nav from "./Nav";
import Footer from "./Footer";
import Card from "../UI/Card";

const LayoutCard = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 10vh auto;
  padding: 30px 100px;
  max-width: 1200px;
  min-height: 80vh;
  background-color: #fff;
`;

const Layout = (props) => {
  return (
    <LayoutCard>
      <Nav />
      {props.children}
      <Footer />
    </LayoutCard>
  );
}

export default Layout;
