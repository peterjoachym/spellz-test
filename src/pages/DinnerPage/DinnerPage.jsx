import React, { useState } from "react";
import "./DinnerPage.css";
import DinnerHeader from "../../components/dinnerPageComponents/DinnerHeader/DinnerHeader";
import Items from "../../components/dinnerPageComponents/Items/Items";
import AddItemButton from "../../components/dinnerPageComponents/AddItemButton/AddItemButton";
import HintModal from "../../components/dinnerPageComponents/HintModal/HintModal";

const DinnerPage = () => {
  const itemsToMap =[{icon:"./assets/lock.png", itemName:"Ingredient"},{icon:"./assets/lock.png", itemName:"Ingredient"},{icon:"./assets/lock.png", itemName:"Ingredient"}]
  const [openHintModal, setOpenHintModal] = useState(false);
  const [nextHintStage, setNextHintStage] = useState(false);

  const handleOpenHintModal = () => {
    setOpenHintModal(!openHintModal);
  };

  const handleHintStage = () => {
    setNextHintStage(!nextHintStage);
  };

  const handleAddItem = () => {
    itemsToMap.append({icon:"./assets/tick.png", itemName:"" })
  };

  return (
    <div className="dinner__page__container">
      <DinnerHeader handleOpenHintModal={handleOpenHintModal} />
      <Items nextHintStage={nextHintStage} itemsToMap={itemsToMap}/>
      <AddItemButton nextHintStage={nextHintStage} handleAddItem={handleAddItem}/>
      {openHintModal && (
        <HintModal
          handleOpenHintModal={handleOpenHintModal}
          handleAddItem={handleAddItem}
          handleHintStage={handleHintStage}
          nextHintStage={nextHintStage}
        />
      )}
    </div>
  );
};

export default DinnerPage;
