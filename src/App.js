import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/project" exact component={Project} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
