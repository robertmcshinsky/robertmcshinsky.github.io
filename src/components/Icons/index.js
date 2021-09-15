import React from "react";

function Icons() {
  let degrees = 0;
  let rotating;
  function rotate(e) {
    rotating = setInterval(() => {
      document
        .querySelector(`#${e.target.id}`)
        .setAttribute("style", `transform: rotateY(${degrees}deg)`);
      degrees++;
      if (degrees > 360) {
        degrees = 0;
      }
    }, 5);
    showTooltip1(e);
  }
  function stopRotate(e) {
    degrees = 0;

    clearInterval(rotating);
    document
      .querySelector(`#${e.target.id}`)
      .setAttribute("style", `transform: rotateY(0deg)`);

    removeTooltip1(e);
  }

  function showTooltip1(e) {
    document
      .querySelector(`#logos1-tooltip`)
      .setAttribute("style", "display:block");
    document.querySelector(`#logos1-tooltip`).innerHTML = e.target.innerHTML;
  }

  function removeTooltip1(e) {
    document
      .querySelector(`#logos1-tooltip`)
      .setAttribute("style", "display:none");
    document.querySelector(`#logos1-tooltip`).innerHTML = "";
  }
  return (
    <div>
      <div id="logos1-tooltip" className="myToolTip"></div>

      <div className="text-center">
        <div>
          <h1 className="mt-5 little-titles">THE BASICS</h1>
        </div>
        <div id="logos1">
          <div
            className="logos"
            id="css-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
            defaultValue="CSS"
          >
            Cascading Style Sheets (CSS)
          </div>

          <div
            className="logos"
            id="html-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Hyperlink Text Markup Language (HTML)
          </div>
          <div
            className="logos"
            id="javascript-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Java Script (JS)
          </div>
        </div>

        <div>
          <h1 className="mt-5 little-titles">MERN STACK</h1>
        </div>
        <div id="logos2">
          <div
            className="logos"
            id="mongodb-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Mongo Database (Mongo DB)
          </div>
          <div
            className="logos"
            id="express-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Express JS
          </div>

          <div
            className="logos"
            id="react-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            React
          </div>
          <div
            className="logos"
            id="nodejs-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Node JS
          </div>
        </div>
        <div>
          <h1 className="mt-5 little-titles">BACKEND AND DATABASES</h1>
        </div>
        <div id="logos3">
          <div
            className="logos"
            id="c-plus-plus-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            C++
          </div>

          <div
            className="logos"
            id="database-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Database
          </div>

          <div
            className="logos"
            id="jquery-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            JQuery
          </div>
        </div>
        <div>
          <h1 className="mt-5 little-titles">MISCELENIOUS</h1>
        </div>
        <div id="logos4">
          <div
            className="logos"
            id="bootstrap-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Bootstrap
          </div>
          <div
            className="logos"
            id="git-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            Git
          </div>
          <div
            className="logos"
            id="uiux-logo"
            onMouseEnter={rotate}
            onMouseLeave={stopRotate}
          >
            User Interfase and User Experience (UI UX)
          </div>
        </div>
      </div>
    </div>
  );
}

export default Icons;
