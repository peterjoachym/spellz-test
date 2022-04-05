import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePageButtons = ({ shrink, handleSubmit }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dinner");
  };

  return (
    <div className="welcome__page__buttons__container">
      {shrink && (
        <button
          type="button"
          className="button skip__button"
          onClick={handleClick}
        >
          Skip
        </button>
      )}
      {shrink && (
        <button
          type="submit"
          className="button lets__start__button"
          onClick={handleSubmit}
        >
          Let's start &rarr;
        </button>
      )}
    </div>
  );
};

export default WelcomePageButtons;
