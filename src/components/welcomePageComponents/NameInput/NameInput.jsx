import React from "react";

const NameInput = ({ shrink, firstName }) => {
  return (
    <form className="name__input__container">
      {shrink && (
        <input
          className="name__input"
          type="text"
          name="firstname"
          placeholder="Ex: Shazam"
          value={firstName}
        ></input>
      )}
    </form>
  );
};

export default NameInput;
