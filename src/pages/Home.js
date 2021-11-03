import React from "react";
import HomeSections from "../components/HomeSections";
import Loading from "../components/Loading";
import Resume from "./Resume";
import Contact from "./Contact";

function Home() {
  return (
    <div>
      <Loading></Loading>
      <div id="wholePage" className="wholePage">
        <HomeSections></HomeSections>
        <Resume></Resume>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default Home;
