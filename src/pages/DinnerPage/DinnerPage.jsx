import React, { useContext } from "react";
import "./DinnerPage.css";
import DinnerHeader from "../../components/dinnerPageComponents/DinnerHeader/DinnerHeader";
import Items from "../../components/dinnerPageComponents/Items/Items";
import AddItemButton from "../../components/dinnerPageComponents/AddItemButton/AddItemButton";
import HintModal from "../../components/dinnerPageComponents/HintModal/HintModal";
import userDinnerContext from "../../context/userDinnerContext";

const DinnerPage = () => {
  const { openHintModal } = useContext(userDinnerContext);

  return (
    <div className="dinner__page__container">
      <DinnerHeader />
      <Items />
      <AddItemButton />
      {openHintModal && <HintModal />}
    </div>
  );
};

export default DinnerPage;
