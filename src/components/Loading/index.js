import React from "react";
import loadingVid from "../../utils/loading.mp4";

function Loading() {
  window.onload = function () {
    setTimeout(() => {
      document
        .querySelector("#loading-fruit")
        .setAttribute("style", "display:none");
      document
        .querySelector("#wholePage")
        .setAttribute("style", "display:block;");
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
