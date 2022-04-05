import React, { useState } from "react";
import "./WelcomePage.css";
import Logo from "../../components/Logo/Logo";
import HelloText from "../../components/HelloText/HelloText";

const WelcomePage = () => {
  const [shrink, setShrink] = useState(false);
  return (
    <div className="welcome__page__container">
      <Logo shrink={shrink} setShrink={setShrink}/>
      <HelloText shrink={shrink}/>
    </div>
  );
};

export default WelcomePage;
