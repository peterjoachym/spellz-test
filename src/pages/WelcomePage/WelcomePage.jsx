import React, { useState } from "react";
import "./WelcomePage.css";
import Logo from "../../components/Logo/Logo";
import HelloText from "../../components/HelloText/HelloText";
import NameInput from "../../components/NameInput/NameInput";

const WelcomePage = () => {
  const [shrink, setShrink] = useState(false);
  return (
    <div className="welcome__page__container">
      <Logo shrink={shrink} setShrink={setShrink}/>
      <HelloText shrink={shrink}/>
      <NameInput shrink={shrink}/>
    </div>
  );
};

export default WelcomePage;
