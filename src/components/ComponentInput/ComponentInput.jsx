import React from "react";

const ComponentInput = () => {
  //   const [disabled, setDisabled] = useState();

  return (
    <form className="component__input__container">
      <label className="ingredient__input__label" htmlFor="ingredient">
        <img className="lock__icon" src="./assets/lock.png" alt="lock" />
        <input
          className=" dinner__input ingredient__input"
          type="text"
          placeholder="Ingredients"
        />
      </label>
      <label className="ingredient__input__label" htmlFor="time_input">
        <img className="lock__icon" src="./assets/lock.png" alt="lock" />
        <input
          className="dinner__input preparation__time__input"
          type="text"
          placeholder="Preparation time"
        />
      </label>
    </form>
  );
};

export default ComponentInput;
