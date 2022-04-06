import React, { createContext, useState } from "react";

const userDinnerContext = createContext();

export const UserDinnerContextProvider = ({ children }) => {
  const items=[

      { icon: "./assets/lock.png", itemName: "Ingredients" },
      { icon: "./assets/lock.png", itemName: "Preparation time" },
  ]
    
    const [itemsToMap, setItemsToMap] = useState(items
  );
  const [user, setUser] = useState();

  return (
    <userDinnerContext.Provider
      value={{
        itemsToMap,
        setItemsToMap,
        user,
        setUser,
      }}
    >
      {children}
    </userDinnerContext.Provider>
  );
};

export default userDinnerContext;
