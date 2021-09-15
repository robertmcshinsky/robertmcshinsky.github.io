import React from "react";
let percentageNum = 1;
function Transition() {
  window.onload = function () {
    setTimeout(() => {
      let fadeBackground = setInterval(() => {
        percentageNum = percentageNum - 0.1;
        document
          .querySelector("#loading-screen")
          .setAttribute(
            "style",
            `background-color: rgb(52, 58, 64,  ${percentageNum})`
          );

        if (percentageNum < -2) {
          clearInterval(fadeBackground);
          document
            .querySelector("#loading-screen")
            .setAttribute("style", `display:none`);
        }
      }, 50);
    }, 100);
  };
  return <div id="loading-screen"></div>;
}

export default Transition;
