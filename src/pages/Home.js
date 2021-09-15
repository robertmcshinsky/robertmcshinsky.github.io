import React from "react";
import HomeSections from "../components/HomeSections";
import Loading from "../components/Loading";

function Home() {
  return (
    <div>
      <Loading></Loading>
      <div id="wholePage" className="wholePage">
        <HomeSections></HomeSections>
      </div>
    </div>
  );
}

export default Home;
