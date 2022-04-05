import React, { useState } from "react";
import "./WelcomePage.css";
import Logo from "../../components/Logo/Logo";

const WelcomePage = () => {
  const [shrink, setShrink] = useState(false);
  return (
    <div className="welcome__page__container">
      <Logo shrink={shrink} setShrink={setShrink}/>
    </div>
  );
};

export default WelcomePage;
