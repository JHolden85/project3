import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Maps from "./pages/Maps";
import FourOFour from "./pages/NotFound";
import Auth from "./pages/LoginSignup";
import TeamPage from "./pages/TeamPage";
import API from "./utils/API";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    API.getUser().then(({ data }) => {
      console.log(data);
      setUser(data);
      setLoading(false);
    });
  }, []);

  const handleLogout = () => {
    API.logout().then((data) => {
      window.location.replace("/user/login");
    });
  };
  return (
    <Router>
      {!user && !loading && <Redirect to="/user/login" />}
      <Switch>
        <Route exact path="/" component={Maps} />
        <Route
          exact
          path="/user/login"
          component={() => <Auth setUser={setUser} />}
        />
        <Route exact path="/team" component={TeamPage} />
        <Route path="*" component={FourOFour} />
      </Switch>
      {/* temporary logout btn */}
      <button onClick={handleLogout}>Log Out</button>
      <h3>Hello {user?.username}</h3>
    </Router>
  );
}

export default App;
