import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
// Pages for the app
import Maps from "./pages/Maps";
import FourOFour from "./pages/NotFound";
import Auth from "./pages/LoginSignup";
import TeamPage from "./pages/TeamPage";

import API from "./utils/API";
import HeaderNavBar from "./components/HeaderNavBar";
import FooterNavBar from "./components/FooterNavBar";
import PhotoUpload from "./pages/Photo";
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

  return (
    <div>
      <HeaderNavBar username={user?.username || ""} />
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
          <Route exact path="/photo" component={PhotoUpload} />
          <Route path="*" component={FourOFour} />
        </Switch>
      </Router>
      <FooterNavBar />
    </div>
  );
}

export default App;
