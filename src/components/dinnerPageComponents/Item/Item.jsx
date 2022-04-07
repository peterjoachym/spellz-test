import React, { useContext } from "react";
import userDinnerContext from "../../../context/userDinnerContext";

const Item = (props) => {
  const { nextHintStage } = useContext(userDinnerContext);
  const { index } = props;

  return (
    <div
      className={
        nextHintStage
          ? "item__lock__container transparent__background"
          : "item__lock__container"
      }
    >
      <img
        className="lock__icon"
        src={props[index].icon}
        alt={props[index].icon}
      />
      <div className="dinner__item__text__container">
        <p className=" dinner__item__text">{props[index].itemName}</p>
      </div>
    </div>
  );
};

export default Item;
