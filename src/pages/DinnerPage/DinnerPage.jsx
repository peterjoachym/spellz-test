import React,{useState} from "react";
import "./DinnerPage.css";
import DinnerHeader from "../../components/dinnerPageComponents/DinnerHeader/DinnerHeader";
import Items from "../../components/dinnerPageComponents/Items/Items";
import AddItemButton from "../../components/dinnerPageComponents/AddItemButton/AddItemButton";
import HintModal from "../../components/dinnerPageComponents/HintModal/HintModal";

const DinnerPage = () => {

  const [openHintModal, setOpenHintModal]=useState();

  const handleOpenHintModal=()=>{
    setOpenHintModal(!openHintModal)
  }

  return (
    <div className="dinner__page__container">
      <DinnerHeader handleOpenHintModal={handleOpenHintModal}/>
      <Items />
      <AddItemButton />
      {openHintModal&&<HintModal/>}
    </div>
  );
};

export default DinnerPage;
