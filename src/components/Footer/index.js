import React from "react";
import profile from "../../assets/images/image5.png";

function Footer() {
  return (
    <footer className="page-footer font-small bg-dark pt-4">
      <div className="container">
        <div className="container-fluid text-center text-md-left text-light">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <img
                id="profileImg"
                src={profile}
                alt="robert mcshinsky profile"
              ></img>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3"></hr>

            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">
                Robert McShinsky
              </h5>
              <hr></hr>
              <p>
                Hello! Welcome to my portfolio page!
                <br></br>
                <br></br>
                I'd like to get to know you a lot better and work on some
                project or business ideas you might have!
                <br></br>
                <br></br>
                Feel free to look around this site to find out more about me and
                then shoot me message!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-social-link">
          <ul className="text-center">
            <li>
              <a href="https://www.facebook.com/robert.mcshinsky.5/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/robert-mcshinsky-4101ab213/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/mczynski/">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
