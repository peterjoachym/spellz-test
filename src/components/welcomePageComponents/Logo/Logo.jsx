import React from "react";

const Logo = ({ shrink, setShrink }) => {
  
  const handleShrink = () => {
    setShrink(true);
  };

  return (
    <div
      className={shrink ? "logo__container__shrink" : "logo__container"}
      role="button"
      tabIndex={0}
      onClick={handleShrink}
    >
      <img
        className="logo__content"
        src="/assets/logo_spellz_white.png"
        alt="logo__spellz"
      />
    </div>
  );
};

export default Logo;
