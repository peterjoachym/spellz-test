import React from "react";

const WelcomePageButtons = ({ shrink }) => {
  return (
    <div className="welcome__page__buttons__container">
      {shrink && (
        <button type="button" className="button skip__button">
          Skip
        </button>
      )}
      {shrink && (
        <button type="submit" className="button lets__start__button">
          Let's start &rarr;
        </button>
      )}
    </div>
  );
};

export default WelcomePageButtons;
