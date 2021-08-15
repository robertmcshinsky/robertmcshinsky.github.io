import React from "react";
import Header from "../Header";

function Icons() {
  let degrees = 0;
  let rotating;
  function rotate(e) {
    console.log("clicked", e.target.id);
    rotating = setInterval(() => {
      document
        .querySelector(`#${e.target.id}`)
        .setAttribute("style", `transform: rotateY(${degrees}deg)`);
      degrees++;
      if (degrees > 360) {
        degrees = 0;
      }
    }, 5);
  }
  function stopRotate(e) {
    degrees = 0;

    console.log(e);
    console.log("unclicked");
    clearInterval(rotating);
    document
      .querySelector(`#${e.target.id}`)
      .setAttribute("style", `transform: rotateY(0deg)`);
  }
  return (
    <div id="about">
      <Header></Header>
      <div>
        <div className="text-center white-text">
          <div id="about-title">About</div>
        </div>
        <div id="logos">
          <div
            className="logos"
            id="bootstrap-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="c-plus-plus-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="css-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="database-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="express-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="git-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="html-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="javascript-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="jquery-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="mongodb-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="nodejs-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="react-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
          <div
            className="logos"
            id="uiux-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Icons;
