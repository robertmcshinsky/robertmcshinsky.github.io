import React from "react";
import loadingVid from "../../utils/loading.mp4";

let percentageNum = 1;

function Loading() {
  window.onload = function () {
    setTimeout(() => {
      document
        .querySelector("#loading-fruit")
        .setAttribute("style", "display:none");
      document
        .querySelector("#wholePage")
        .setAttribute("style", "display:block;");

      let fadeBackground = setInterval(() => {
        percentageNum = percentageNum - 0.1;
        document
          .querySelector("#loading-screen")
          .setAttribute(
            "style",
            `background-color: rgb(52, 58, 64,  ${percentageNum})`
          );

        if (percentageNum < 0) {
          clearInterval(fadeBackground);
        }
      }, 100);
    }, 4000);
  };
  return (
    <div id="loading-screen">
      <div id="loading-fruit">
        <video className="p-3" id="logoVideo" autoPlay>
          <source src={loadingVid} type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Loading;
