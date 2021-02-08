import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LogRegForm from "./components/LogRegForm"
import { Main, Navbar } from "../src/assests/componentImporter"

function App() {
  return (
    <div className="App" style={{ margin: "auto", width: "100%" }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/LogReg" component={LogRegForm} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
