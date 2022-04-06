import React, { useContext } from "react";
import userDinnerContext from "../../../context/userDinnerContext";
import Item from "../Item/Item";

const Items = (props) => {
  const { nextHintStage } = props;

  const { itemsToMap } = useContext(userDinnerContext);
  
  return (
    <div className="items__container">
      {itemsToMap.map((item, index) => (
        <Item
          key={index}
          index={index}
          {...itemsToMap}
          nextHintStage={nextHintStage}
        />
      ))}
    </div>
  );
};

export default Items;
