import React from "react";

const DinnerHeader = () => {
  return (
    <div className="dinner__header__container">
      <div className="dinner__title__container">
        <div className="title__text__container">
          <h1 className="title__text__content">Dinner Recipee</h1>
        </div>
        <button type="button" className="button info__button">
          ?
        </button>
      </div>
      <h2c className="dinner__subtitle">
        Here is a great recipe for your dinner
      </h2c>
    </div>
  );
};

export default DinnerHeader;
