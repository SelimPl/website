import "./App.css";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Nav from "./components/Nav";
import Generator from "./components/Generator";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/website" exact>
          <Home />
        </Route>
        <Route path="/website/weather" component={Weather} />
        <Route path="/website/generator" component={Generator} />
        <Route  component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
