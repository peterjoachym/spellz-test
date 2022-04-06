import React from "react";

const DinnerHeader = ({handleOpenHintModal}) => {

  return (
    <div className="dinner__header__container">
      <div className="dinner__title__container">
        <div className="title__text__container">
          <h1 className="title__text__content">Dinner Recipee</h1>
        </div>
        <button type="button" className="button info__button" onClick={handleOpenHintModal}>
          ?
        </button>
      </div>
      <h2 className="dinner__subtitle">
        Here is a great recipe for your dinner
      </h2>
    </div>
  );
};

export default DinnerHeader;
