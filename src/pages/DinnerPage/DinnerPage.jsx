import React from "react";
import DinnerHeader from "../../components/DinnerHeader/DinnerHeader";
import "./DinnerPage.css";
import Items from "../../components/Items/Items";
import AddItemButton from "../../components/AddItemButton/AddItemButton";

const DinnerPage = () => {
  return (
    <div className="dinner__page__container">
      <DinnerHeader />
      <Items />
      <AddItemButton />
    </div>
  );
};

export default DinnerPage;
