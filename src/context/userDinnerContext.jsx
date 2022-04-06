import React, { createContext, useState } from "react";

const userDinnerContext = createContext();

export const UserDinnerContextProvider = ({ children }) => {
  const items = [
    { icon: "./assets/lock.png", itemName: "Ingredients" },
    { icon: "./assets/lock.png", itemName: "Preparation time" },
  ];

  const [itemsToMap, setItemsToMap] = useState(items);
  const [user, setUser] = useState();
  const [shrink, setShrink] =useState();
  const [openHintModal, setOpenHintModal] = useState(false);
  const [nextHintStage, setNextHintStage] = useState(false);

  const handleOpenHintModal = () => {
    setOpenHintModal(!openHintModal);
  };

  const handleHintStage = () => {
    setNextHintStage(!nextHintStage);
  };
  const handleAddItem = () => {
    itemsToMap.append({ icon: "./assets/tick.png", itemName: "" });
  };

  return (
    <userDinnerContext.Provider
      value={{
        itemsToMap,
        setItemsToMap,
        user,
        setUser,
        shrink,
        setShrink,
        openHintModal,
        setOpenHintModal,
        nextHintStage,
        setNextHintStage,
        handleHintStage,
        handleOpenHintModal,
        handleAddItem,
      }}
    >
      {children}
    </userDinnerContext.Provider>
  );
};

export default userDinnerContext;
