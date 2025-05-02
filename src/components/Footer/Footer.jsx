import React from "react";
import JoinNow from "./JoinNow";
import Links from "./Links";

const Footer = () => {
  return (
    <div className="relative">
      <img
        src="/deco/RectangleF.svg"
        alt="Protection Icon"
        className="absolute bottom-0 left-0 w-2xl h-2xl blur-lg"
      />

      <div className="myContainer">
        <JoinNow />
        <Links />
      </div>
    </div>
  );
};

export default Footer;
