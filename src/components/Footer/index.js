import React from "react";

function Footer() {
  return (
    <footer className="page-footer font-small bg-dark pt-4">
      <div className="container">
        <div className="container-fluid text-center text-md-left text-light">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">Footer text 1</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Expedita sapiente sint, nulla, nihil repudiandae commodi
                voluptatibus corrupti animi sequi aliquid magnam debitis, maxime
                quam recusandae harum esse fugiat. Itaque, culpa?
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3"></hr>

            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Footer text 2</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio
                deserunt fuga perferendis modi earum commodi aperiam temporibus
                quod nulla nesciunt aliquid debitis ullam omnis quos ipsam,
                aspernatur id excepturi hic.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-social-link">
          <ul className="text-center">
            <li>
              <a href="/">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="/">
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
