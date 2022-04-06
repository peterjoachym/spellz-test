import React, { useContext } from "react";
import userDinnerContext from "../../../context/userDinnerContext";
import { useNavigate } from "react-router-dom";

const NameInput = () => {
  const { setUser, user, shrink } = useContext(userDinnerContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dinner");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dinner");
  };
  return (
    <form className="name__input__container" onSubmit={handleSubmit}>
      {shrink && (
        <input
          className="name__input"
          type="text"
          name="firstname"
          placeholder="Ex: Shazam"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        ></input>
      )}
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
    </form>
  );
};

export default NameInput;
