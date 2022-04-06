import React from "react";
import DinnerHeader from "../../components/DinnerHeader/DinnerHeader";
import "./DinnerPage.css";
import Items from "../../components/Items/Items";

const DinnerPage = () => {
  return <div className="dinner__page__container">
    <DinnerHeader/>
    <Items/>
  </div>;
};

export default DinnerPage;
