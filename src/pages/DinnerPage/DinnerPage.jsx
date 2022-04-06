import React,{useState} from "react";
import DinnerHeader from "../../components/DinnerHeader/DinnerHeader";
import "./DinnerPage.css";
import Items from "../../components/Items/Items";
import AddItemButton from "../../components/AddItemButton/AddItemButton";
import HintModal from "../../components/HintModal/HintModal";

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
