import React from "react";

const Items = () => {
  //   const [disabled, setDisabled] = useState();

  return (
    <div className="items__container">
      <div className="item__lock__container">
        <img className="lock__icon" src="./assets/lock.png" alt="lock" />
        <div className="dinner__item__text__container">
          <p className=" dinner__item__text">Ingredient</p>
        </div>
      </div>
      <div className="item__lock__container">
        <img className="lock__icon" src="./assets/lock.png" alt="lock" />
        <div className="dinner__item__text__container">
          <p className="dinner__item__text">Preparation time</p>
        </div>
      </div>
    </div>
  );
};

export default Items;
