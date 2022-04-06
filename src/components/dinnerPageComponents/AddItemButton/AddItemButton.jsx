import React from "react";

const AddItemButton = (props) => {
  const { handleAddItem, nextHintStage } = props;

  return (
    <div className="add__item__button__container">
      <button
        className={nextHintStage?"add__item__button white__background" :"add__item__button"}
        type="button"
        onClick={handleAddItem}
      >
        + Add Item
      </button>
    </div>
  );
};

export default AddItemButton;
