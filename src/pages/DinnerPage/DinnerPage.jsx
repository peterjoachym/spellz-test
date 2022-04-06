import React from "react";
import DinnerHeader from "../../components/DinnerHeader/DinnerHeader";
import "./DinnerPage.css";
import ComponentInput from "../../components/ComponentInput/ComponentInput";

const DinnerPage = () => {
  return <div className="dinner__page__container">
    <DinnerHeader/>
    <ComponentInput/>
  </div>;
};

export default DinnerPage;
