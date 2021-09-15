import React from "react";
import image0 from "../assets/images/galImage0.png";
import image1 from "../assets/images/galImage1.png";
import image2 from "../assets/images/galImage2.png";
import image3 from "../assets/images/galImage3.png";
import image4 from "../assets/images/galImage4.png";
import image5 from "../assets/images/galImage5.png";
import image6 from "../assets/images/galImage6.png";
import image7 from "../assets/images/horiseon.png";
import image8 from "../assets/images/marvel.png";
import image9 from "../assets/images/scheduler.png";

function Portfolio() {
  return (
    <div>
      <div className="container p-5">
        <div className="card-columns">
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image0}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">
                Online Journal or Appointment Keeper
              </h5>
              <p className="card-text">
                This application was created for the purpose of learning how to
                set up a login and create account system. Once logged in, you
                may make journal entries, update them and also delete them. This
                application follows all C.R.U.D. practices.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Github Repository:{" "}
                  <a href="https://github.com/Jasonpsmith180/fullstack-appointment-app">
                    {" "}
                    Appointment App
                  </a>{" "}
                  <br></br>
                  <a href="https://secure-basin-72350.herokuapp.com/">
                    Live Site
                  </a>
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image1}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Command Line HTML Page Creator</h5>
              <p className="card-text">
                This application is run on the command line and can be used to
                create dynamic html documents. A fun feature of this application
                is the ability to create as many team members that you want and
                also choose whether they are a Manager, Engineer, or Intern.
                This application has potential for other abilities and features
                as well.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Github Repository:{" "}
                  <a href="https://github.com/robertmcshinsky/Module-10-Challenge">
                    Team Generator
                  </a>{" "}
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image2}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Frydrych Tailoring</h5>
              <p className="card-text">
                A simple application that a client wanted for his small
                business. It's a tailoring company for custom made suits for
                ballroom dancers. Single Page application with a link to a shop.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Prototype Site:{" "}
                  <a href="https://robertmcshinsky.github.io/frydrych/">
                    Frydrych Tailoring
                  </a>{" "}
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image3}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Timed Quiz</h5>
              <p className="card-text">
                This is the start page and as you can see, you will have 25
                seconds to answer as many questions as possible. If you get a
                question wrong, 5 seconds will be taken from your time, and if
                you get a question right, then 3 seconds will be added to your
                clock!
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  Github Repository:{" "}
                  <a href="https://github.com/robertmcshinsky/Module-04-Challenge">
                    Timed Quiz
                  </a>{" "}
                  <br></br>
                  <a href="https://robertmcshinsky.github.io/Module-04-Challenge/">
                    Live Site
                  </a>
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image4}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                This project is to create a note taking app that runs on the
                client and server side. It creates new notes and saves them to
                the database. Simply type your Title and your text, and hit that
                save button.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  Github Repository:{" "}
                  <a href="https://github.com/robertmcshinsky/Module-11-Challenge">
                    Note Taker
                  </a>{" "}
                  <br></br>
                  <a href="https://fierce-eyrie-78555.herokuapp.com/notes">
                    Live Site
                  </a>{" "}
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image5}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">
                This Webpage is a fully functional program that takes in various
                forms of input such as letters, numbers, and special characters.
                When you click the "Generate Password" button, it will pop up
                some alerts which will ask how long you want the your password
                to be as well as what kind of criteria you would like.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Github Repository:{" "}
                  <a href="https://github.com/robertmcshinsky/Module-03-Challenge">
                    Password Generator
                  </a>{" "}
                  <br></br>
                  <a href="https://robertmcshinsky.github.io/Module-03-Challenge/">
                    Live Site
                  </a>{" "}
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image6}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">XKCD Browser</h5>
              <p className="card-text">
                An application that uses an API to browse XKCD comics.
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image7}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Horiseon</h5>
              <p className="card-text">
                A simple excersize during a bootcamp to understand the in's and
                out's of basic and advanced CSS concepts.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  Github Repository:{" "}
                  <a href="https://github.com/robertmcshinsky/Module-01-Challenge">
                    Horiseon
                  </a>{" "}
                  <br></br>
                  <a href="https://robertmcshinsky.github.io/Module-01-Challenge/">
                    Live Site
                  </a>{" "}
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image8}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Marvel Character Toss</h5>
              <p className="card-text">
                Marvel Developer Portal API. OMDb API Bulma was used for
                styling.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  Github Repository:{" "}
                  <a href="https://github.com/cody1967/dispatch">Marvel</a>{" "}
                  <br></br>
                  <a href="https://cody1967.github.io/dispatch/">
                    Live Site
                  </a>{" "}
                </small>
              </p>
            </div>
          </div>{" "}
          <div className="card text-center">
            <img
              className="card-img-top"
              src={image9}
              alt="portfolio examples"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Scheduler</h5>
              <p className="card-text">
                This project was to make a funcional every day kind of
                scheduling web application. Click on any hour range and type
                what you want to accomplish in that time zone. Be sure to click
                the save button, or your schedule for that hour might not be
                saved.
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  Github Repository:{" "}
                  <a href="https://github.com/robertmcshinsky/Module-05-Challenge">
                    Scheduler
                  </a>{" "}
                  <br></br>
                  <a href="https://robertmcshinsky.github.io/Module-05-Challenge/">
                    Live Site
                  </a>{" "}
                </small>
              </p>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
