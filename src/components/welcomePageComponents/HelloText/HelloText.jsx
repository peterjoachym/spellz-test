import React from "react";

const HelloText = ({shrink}
) => {
  return (
    (<div className="hello__text__container">
      {shrink && (<h1 className="hello__content">
        Yo 👋 <br />
        <br />
        <br />
        What’s your <br />
        <br />
        first name ?
      </h1>)}
    </div>)
  );
};

export default HelloText;
