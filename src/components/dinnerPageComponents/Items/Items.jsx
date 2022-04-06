import React from "react";

const Items = (props) => {
  const { nextHintStage } = props;

  return (
    <div className="items__container">
      <div
        className={
          nextHintStage
            ? "item__lock__container transparent__background"
            : "item__lock__container"
        }
      >
        <img className="lock__icon" src="./assets/lock.png" alt="lock" />
        <div className="dinner__item__text__container">
          <p className=" dinner__item__text">Ingredient</p>
        </div>
      </div>
      <div
        className={
          nextHintStage
            ? "item__lock__container transparent__background"
            : "item__lock__container"
        }
      >
        <img className="lock__icon" src="./assets/lock.png" alt="lock" />
        <div className="dinner__item__text__container">
          <p className="dinner__item__text">Preparation time</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
