import React from "react";
import "./Header.css";

class Header extends React.Component {
  // constructor() {
  //     super();
  // }

  render() {
    return (
      <div className="header">
        <a href="#default" className="logo">
          <h1>{this.props.title}</h1>
        </a>
        <nav className="header-right">
          <a clasName="active" href="/">
            Home
          </a>
          <a href="/Portfolio">Portfolio</a>
          <a href="/Resume">Resume</a>
          <a href="/ContactMe">Contact Me</a>
          <a href="/AboutMe">About Me</a>
        </nav>
      </div>
    );
  }
}
export default Header;
