import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/SignupLogin";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/auth" component={Login} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
