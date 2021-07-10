import React from "react";

import LogoIcon from "../icons/logo.png";
import PythonIcon from "../icons/python.png";
import JsIcon from "../icons/js.png";
import CIcon from "../icons/c.png";

export const Logo = () => {
  return (
    <span>
      <img src={LogoIcon} className="ml-10 cw-logo" alt="logo" />
      <span className="text-light fs-5 fw-bold">Code Whits</span>
    </span>
  );
};

export const PythonLogo = () => {
  return <img src={PythonIcon} className="logo" alt="logo" />;
};

export const JsLogo = () => {
  return <img src={JsIcon} className="logo" alt="logo" />;
};

export const CLogo = () => {
  return <img src={CIcon} className="logo" alt="logo" />;
};
