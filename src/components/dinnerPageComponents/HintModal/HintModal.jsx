import React from "react";

const HintModal = (props) => {
  const communityShareMessage =
    "You can add any item you deem important to share your recipe with your community";
  const protectedFieldsMessage =
    "Any good recipe starts with good ingredients. Preparation time is of the utmost importance";
  const addItemMessage = "Can’t think of anything? How about “cooking time”?";

  const {handleOpenHintModal, handleAddItem, handleHintStage, nextHintStage}= props

  return (
    <div className="hint__modal__container ">
      <div className="hint__message__container">
        {!nextHintStage && (
          <h2 className="protected__fields__message">
            {protectedFieldsMessage}
          </h2>
        )}
        {!nextHintStage && (
          <div className="icon__text__container">
            <p className="icon">🤓</p>
            <p className="community__message">{communityShareMessage}</p>
          </div>
        )}
        {nextHintStage && (
          <div className="icon__text__container">
            <p className="icon">🤓</p>
            <p className="add__item__message">{addItemMessage}</p>
          </div>
        )}
      </div>
      <div className="hint__buttons__container">
        {!nextHintStage && (
          <button
            className="button hint__done__button"
            onClick={handleOpenHintModal}
          >
            Done!
          </button>
        )}
        {!nextHintStage && (
          <button
            className="button hint__add__item__button"
            onClick={handleHintStage}
          >
            Add an item &rarr;
          </button>
        )}
        {nextHintStage && (
          <button
            className="button hint__try__it__button"
            onClick={() => {
              handleAddItem();
              handleOpenHintModal();
            }}
          >
            Try it Now !
          </button>
        )}
      </div>
    </div>
  );
};

export default HintModal;
