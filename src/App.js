import React from "react";
// import Header from './Header';
import Footer from "./Footer";
import Resume from "./Resume";
import ContactMe from "./ContactMe";
import AboutMe from "./AboutMe";
import "./Header.css";
import "./App.css";

import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
// import Home from "./Home";
import Portfolio from "./Portfolio";
// import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-container">
          <div className="header">
            <h1 className="logo">Shailesh Karki</h1>
            <nav className="header-right">
              {/* <NavLink exact to="/">Home</NavLink> */}
              <NavLink exact to="/">
                Portfolio
              </NavLink>
              <NavLink to="/Resume">Resume</NavLink>
              <NavLink to="/AboutMe">About Me</NavLink>
              <NavLink to="/ContactMe">Contact Me</NavLink>
            </nav>
          </div>
          <div className="content">
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/Resume" component={Resume} />
            <Route path="/AboutMe" component={AboutMe} />
            <Route path="/ContactMe" component={ContactMe} />
            <Route exact path="/" component={Portfolio} />
          </div>
        </div>
        <Footer name="Shailesh Karki" />
      </div>
    </Router>
  );
}

export default App;
