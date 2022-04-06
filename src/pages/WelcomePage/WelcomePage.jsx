import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./WelcomePage.css";
import Logo from "../../components/welcomePageComponents/Logo/Logo";
import HelloText from "../../components/welcomePageComponents/HelloText/HelloText";
import NameInput from "../../components/welcomePageComponents/NameInput/NameInput";
import WelcomePageButtons from "../../components/welcomePageComponents/WelcomePageButtons/WelcomePageButtons";

const WelcomePage = () => {
  const [shrink, setShrink] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/dinner");
  };
  return (
    <div className="welcome__page__container">
      <Logo shrink={shrink} setShrink={setShrink} />
      <HelloText shrink={shrink} />
      <NameInput shrink={shrink} />
      <WelcomePageButtons shrink={shrink} handleSubmit={handleSubmit} />
    </div>
  );
};

export default WelcomePage;
