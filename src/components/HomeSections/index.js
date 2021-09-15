import React from "react";
import computerImage from "../../assets/images/computer.png";
import laptopImage from "../../assets/images/laptop.png";
import phoneImage from "../../assets/images/phone.png";

function HomeSections() {
  return (
    <div>
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <div className="home-text responsive title-hello">Hello!</div>
            <div></div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <div className="home-text responsive2">
              <br></br>
              My name is Robert McShinsky and I am a <em>full stack</em> web
              developer!
            </div>
            <div></div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container p-4">
        <section className="">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="ratio ratio-16x9 text-center">
                Three things that I always try to include in all my designs are
                that they are <strong>"Responsive"</strong>,
                <strong>"Modern"</strong>, and <strong>"Simple"</strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <div className="computer home-card ">
              <img src={computerImage} className="card-img-top" alt="..."></img>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <div className="home-text responsive">Responsive</div>
            <div>
              I aspire to always create a <strong>flexible</strong> service that
              is responsive and changing to each person's needs in this day and
              age of constant movement and <strong>innovation</strong>.
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <div className="home-text modern">Modern</div>
            <div>
              Because of where we are in time, we see a lot of things moving
              from the <strong>traditional</strong> way and more and more into
              new and exciting <strong>modern</strong> way.
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0  text-center">
            <div className="laptop home-card">
              <img src={laptopImage} className="card-img-top" alt="..."></img>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0  text-center">
            <div className="phone home-card">
              <img src={phoneImage} className="card-img-top" alt="..."></img>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 text-center">
            <div className="home-text simple">Simple</div>
            <div>
              But what is most important, dispite the new and cool gadgets and
              technology, is the simplicity of the <strong>user design</strong>{" "}
              and <strong> user experience.</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSections;
