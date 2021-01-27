import React from "react";
import "./Portfolio.css";
import tictactoe from "./assets/tictactoe.png";
import subscription from "./assets/subscription_app.png";
import beerbuddy from "./assets/beer_buddy.png";
import search_recipe from "./assets/search_recipe.png";
import portfolio from "./assets/portfolio.png";
import roster from "./assets/roster.jpeg";
import jobtracker from "./assets/jobtracker.png";
class Portfolio extends React.Component {
  render() {
    return (
      <div className="home">
        <h2 className="portfolio-h2">Here's some work I have done recently</h2>
        <div className="portfolio">
          <div className="portfolio-content">
            <h3>
              <a
                href="https://roster-application.herokuapp.com/"
                title="Click to go to Roster Application"
              >
                Roster Application
              </a>
            </h3>
            <img src={roster} alt="" />
            <p>
              The key functionality for this app is to allow a small business
              owner to manage their staff details, rosters, hourly rate payments
              with basic financial reports. The technology stack comprises of:
              React, Node, JavaScript, PostgreSQL, CSS, HTML and
              Bootstrap/MDBootstrap with our code stored on GitHub.
            </p>
          </div>

          <div className="portfolio-content">
            <h3>
              <a
                href="https://agile-oasis-31545.herokuapp.com/"
                title="Click to go app username=q@ga.co password=12345678"
              >
                Job Tracker Application
              </a>
            </h3>
            <img src={jobtracker} alt="" />
            <p>
              This app allows job seekers to save information about job they
              have applied. The technology used to create this application are
              are Node.js, JavaScript, PostgreSQL, CSS, HTML and code is stored
              on GitHub.
            </p>
          </div>
          <div className="portfolio-content">
            <h3>
              <a
                href="https://cryptic-eyrie-20577.herokuapp.com/"
                title="Click to go to Search Recipe"
              >
                Search Recipe
              </a>
            </h3>
            <img src={search_recipe} alt="" />
            <p>
              This is a web app that helps users to search recipes based on dish
              name or ingredients. Users can create their account and save
              recipes for future reference purpose, if they like to do so. This
              app was built using Node.js, React.js, CSS and PostgreSQL.
            </p>
          </div>
          <div className="portfolio-content">
            <h3>
              <a
                href="https://enigmatic-bastion-88209.herokuapp.com/"
                title="Click to go to Beer Buddy"
              >
                Beer Buddy
              </a>
            </h3>
            <img src={beerbuddy} alt="" />
            <p>
              This is a web app that shows different bars around in melbourne,
              along with beers they serve and ratings given by patrons to that
              beer. Users can add information about new bar too and they can
              rate their experience with a particular beer in that bar, if they
              wish too. This app was built using Node.js, HTML, CSS, Javascript
              and PostgreSQL.
            </p>
          </div>
          <div className="portfolio-content">
            <h3>
              <a
                href="https://warm-sands-35456.herokuapp.com/"
                title="Click to go to Subscription Track App"
              >
                Subscription Track App
              </a>
            </h3>
            <img src={subscription} alt="" />
            <p>
              This is a web app that helps users to keep the information of
              services they have suscribed and how much they are spending on
              those subscriptions for the month. This app was built using Ruby,
              HTML, CSS, JavaScript and PostgreSQL.
            </p>
          </div>
          <div className="portfolio-content">
            <h3>
              {" "}
              <a
                href="https://shaileshkarki.github.io/tictactoe/"
                title="Click to go to Tic Tac Toe"
              >
                Tic Tac Toe
              </a>
            </h3>
            <img src={tictactoe} alt="" />
            <p>
              This is simple game app based on traditional tic tac toe game,
              built using HTML, JavaScript and Css.
            </p>
          </div>
          <div className="portfolio-content">
            <h3>
              <a href="http://shaileshkarki.surge.sh/">My Portfolio Website</a>
            </h3>
            <img src={portfolio} alt="" />
            <p>
              This is single page application built using React to show some of
              the projects I have done recently to learn website development.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
