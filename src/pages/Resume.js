import React from "react";
import Icons from "../components/Icons";
import Portfolio from "./Portfolio";

function Resume() {
  function openAccordion(e) {
    let id = e.target.attributes[0].value;
    let element = document.querySelector(`#${id}`);
    element.classList.toggle("active");
    let panel = element.nextSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    let chev = id + "-chev";
    document.querySelector(`#${chev}`).classList.toggle("fa-chevron-down");
    document.querySelector(`#${chev}`).classList.toggle("fa-chevron-up");
    let chev2 = id + "-chev2";
    document.querySelector(`#${chev2}`).classList.toggle("fa-chevron-down");
    document.querySelector(`#${chev2}`).classList.toggle("fa-chevron-up");
  }
  return (
    <div>
      <div>
        <div
          id="acc1"
          className="accordion text-center"
          onClick={openAccordion}
        >
          <span id="acc1-chev" className="fa fa-chevron-down"></span>{" "}
          Introduction{" "}
          <span id="acc1-chev2" className="fa fa-chevron-down"></span>
        </div>
        <div className="panel">
          <div className="container">
            <div className="card text-center m-5">
              <div className="card-header">Get to know a little about me!</div>
              <div className="card-body">
                <h3 className="card-title">Robert McShinsky</h3>
                <p className="card-text">
                  Hello! I am a full stack web developer! - front end and back
                  end!
                  <br></br>
                  Personally I enjoy creating attractive and competitive
                  websites through front end work and design.
                </p>
              </div>
              <div className="card-footer text-muted">
                Reach out to me by Email, Text or Call
                <hr></hr>
                robert.mcshinsky@gmail.com | (801)-592-9657
              </div>
            </div>
          </div>
        </div>

        <div
          id="acc2"
          className="accordion text-center"
          onClick={openAccordion}
        >
          <span id="acc2-chev" className="fa fa-chevron-down"></span> Experience{" "}
          <span id="acc2-chev2" className="fa fa-chevron-down"></span>
        </div>
        <div className="panel">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">Web Developer</h3>
                    <div className="card-header bg-transparent">
                      BYU McKay School of Education Website
                    </div>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">
                          <strong> Workplace Responsibilities</strong>
                        </li>
                        <li className="list-group-item">
                          Train new employees and teach them the basics around
                          the workplace and operating systems.
                        </li>
                        <li className="list-group-item">
                          Creating new single page websites weekly for the Deans
                          of the college as well as the teachers and instructors
                          who have online teaching plans and lessons.
                        </li>
                      </ul>
                    </div>
                    <p className="card-text">
                      <small className="text-muted">
                        Immediate Supervisor: Aaron Olsen
                      </small>
                    </p>
                    <div className="card-footer bg-transparent ">
                      May 2021 - Present
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      Ballroom, Latin and Cabaret Dance Instructor
                    </h3>
                    <div className="card-header bg-transparent">
                      Lagacy Dance Studio
                    </div>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">
                          <strong> Workplace Responsibilities</strong>
                        </li>
                        <li className="list-group-item">
                          Teach ballroom and latin choreography to 10+ classes
                          per week in preparation for shows throughout the year.
                          with kids ages ranging from 3 - 20 years old.
                        </li>
                      </ul>
                    </div>
                    <p className="card-text">
                      <small className="text-muted">
                        Immediate Supervisor: Julia Penate
                      </small>
                    </p>
                    <div className="card-footer bg-transparent ">
                      October 2020 - Present
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      BYU Ballroom Touring Company Member
                    </h3>
                    <div className="card-header bg-transparent">
                      BYU Ballroom Dance Department
                    </div>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">
                          <strong> Workplace Responsibilities</strong>
                        </li>
                        <li className="list-group-item">
                          As part of the BYU Ballroom Dance Touring company, I
                          teach and train new participants the tour show and
                          also help prepare them for the World Championships in
                          Blackpool, England every three years.
                        </li>
                        <li className="list-group-item">
                          I also help the Touring Team Director, Curt Holman, to
                          choreograph and organize new material and new
                          choreographical pieces to perform each year.
                        </li>
                      </ul>
                    </div>
                    <p className="card-text">
                      <small className="text-muted">
                        Immediate Supervisor: Curt & Sharon Holman
                      </small>
                    </p>
                    <div className="card-footer bg-transparent ">
                      June 2019 - Present
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      Proctor and Communications Specialist
                    </h3>
                    <div className="card-header bg-transparent">
                      BYU Independent Study
                    </div>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">
                          <strong> Workplace Responsibilities</strong>
                        </li>
                        <li className="list-group-item">
                          Proctor 30-60 Nationally Certified Exams daily.
                        </li>
                        <li className="list-group-item">
                          Make 10-20 calls daily to schools and institutions
                          around the world regarding proctoring certifications
                          and qualifications.
                        </li>
                        <li className="list-group-item">
                          Write 15 - 30 emails daily to schools and institutions
                          around the world regarding proctoring certifications
                          and qualifications.
                        </li>
                      </ul>
                    </div>
                    <p className="card-text">
                      <small className="text-muted">
                        Immediate Supervisor: David Lund
                      </small>
                    </p>
                    <div className="card-footer bg-transparent ">
                      April 2019 - March 2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <h3 className="card-title">
                      Two year Service Missionary in Lima Peru
                    </h3>
                    <div className="card-header bg-transparent">
                      The Church of Jesus Christ of Latter Day Saints
                    </div>
                    <div className="card-text">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item text-center">
                          <strong> Workplace Responsibilities</strong>
                        </li>
                        <li className="list-group-item">
                          Spend 12 hours each day contacting and communicating
                          with people from all walks of life and inviting them
                          to make changes in their day to day life to help them
                          come closer to God
                        </li>
                        <li className="list-group-item">
                          For 18 months, I was training, instructing, motivating
                          and helping new missionaries and older missionaries to
                          execute new methods and skills to help them become
                          better service missionaries.
                        </li>
                      </ul>
                    </div>

                    <p className="card-text">
                      <small className="text-muted">
                        Immediate Supervisor: President Godfrey
                      </small>
                    </p>
                    <div className="card-footer bg-transparent ">
                      August 2016 - August 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="acc3"
          className="accordion text-center"
          onClick={openAccordion}
        >
          <span id="acc3-chev" className="fa fa-chevron-down"></span> Skills{" "}
          <span id="acc3-chev2" className="fa fa-chevron-down"></span>
        </div>
        <div className="panel">
          <Icons></Icons>
        </div>
        <div
          id="acc4"
          className="accordion text-center"
          onClick={openAccordion}
        >
          <span id="acc4-chev" className="fa fa-chevron-down"></span> Education{" "}
          <span id="acc4-chev2" className="fa fa-chevron-down"></span>
        </div>
        <div className="panel">
          <div className="card-group m-5">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Communications in Advertising Major
                </h5>
                <div className="card-header">
                  Brigham Young University (BYU)
                </div>
              </div>
              <div className="card-footer">
                <div className="text-muted">2018 - Present</div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  Professional Education Award for Web Development
                </h5>
                <div className="card-header">University of Utah (UofU)</div>
                <div className="card-header">Purdue University</div>
              </div>
              <div className="card-footer">
                <div className="text-muted">December 2020 - July 2021</div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">General Education Degree (GED) </h5>
                <div className="card-header">Timpview High School</div>
              </div>
              <div className="card-footer">
                <div className="text-muted">August 2012 - May 2016</div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="acc5"
          className="accordion text-center"
          onClick={openAccordion}
        >
          <span id="acc5-chev" className="fa fa-chevron-down"></span> Portfolio{" "}
          <span id="acc5-chev2" className="fa fa-chevron-down"></span>
        </div>
        <div className="panel">
          <Portfolio></Portfolio>
        </div>

        <div
          id="acc6"
          className="accordion text-center"
          onClick={openAccordion}
        >
          <span id="acc6-chev" className="fa fa-chevron-down"></span> Extra{" "}
          <span id="acc6-chev2" className="fa fa-chevron-down"></span>
        </div>

        <div className="panel">
          <div className="container">
            <div className="card text-center m-5">
              <div className="card-body">
                <h5 className="card-title">Languages</h5>
                <div className="card-text">
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action ">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Spanish</h5>
                        <div>Fluent</div>
                      </div>
                      <p className="mb-1">
                        4 Years of Secondary School Spanish.
                      </p>
                      <p className="mb-1">
                        2 Years of Foreign Spanish Experience.
                      </p>
                      <p className="mb-1">
                        2 Years of College Spanish Courses.
                      </p>
                    </div>

                    <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">French</h5>
                        <small className="text-muted">Beginner</small>
                      </div>
                      <p className="mb-1">
                        2 Years of Secondary School French.
                      </p>
                    </div>

                    <div className="list-group-item list-group-item-action">
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">Russian</h5>
                        <small className="text-muted">Introductory</small>
                      </div>
                      <p className="mb-1">1 Year of College Courses.</p>
                    </div>
                  </div>
                </div>

                <h5 className="card-title m-3">Ballroom Dance</h5>
                <div className="card-text">
                  <div className="list-group">
                    <div className="list-group-item list-group-item-action ">
                      <div className="d-flex w-100 justify-content-between"></div>

                      <p className="mb-1">
                        Current USA Adult Amateur Ballroom Finalists.
                      </p>
                      <p className="mb-1">
                        Top 3 USA Adult Amateur Smooth Finalist.
                      </p>
                      <p className="mb-1">
                        Current BYU Ballroom Touring Company Member.
                      </p>
                      <p className="mb-1">
                        2 time U-21 Adult Amateur Ballroom Top 4.
                      </p>
                      <p className="mb-1">
                        USA Representative to the Youth World Championships in
                        Paris, France.
                      </p>
                      <p className="mb-1">
                        13th in Youth Amateur Ballroom at the World
                        Championships in Paris, France.
                      </p>
                      <p className="mb-1">
                        2 time Youth Amateur Ballroom Top 3.
                      </p>
                      <p className="mb-1">
                        1 time Youth Amateur Latin Finalist.
                      </p>
                      <p className="mb-1">
                        USA Representative to the Junior World Championships in
                        Blackpool, England.
                      </p>
                      <p className="mb-1">2 time Junior Amateur Latin Top 3.</p>
                      <p className="mb-1">
                        3 time Junior Amateur Smooth Champions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-muted">
                Thanks for Learning all about me!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
