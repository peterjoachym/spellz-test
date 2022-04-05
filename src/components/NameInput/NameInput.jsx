import React from "react";

const NameInput = ({ shrink }) => {
  return (
    <div className="name__input__container">
      {shrink && (
        <form classsName="name__input__form" action="submit">
          <input
            className="name__input"
            type="text"
            name="firstname"
            placeholder="Ex: Shazam"
          ></input>
        </form>
      )}
    </div>
  );
};

export default NameInput;
