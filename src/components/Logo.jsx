import React from "react";

import LogoIcon from "../icons/logo.png";
import PythonIcon from "../icons/python.png";
import JsIcon from "../icons/js.png";
import CIcon from "../icons/c.png";

export const Logo = () => {
  return <img src={LogoIcon} className="ml-10 cw-logo" alt="logo" />;
};

export const PythonLogo = ({ styles }) => {
  return <img src={PythonIcon} className={styles} alt="logo" />;
};

export const JsLogo = ({ styles }) => {
  return <img src={JsIcon} className={styles} alt="logo" />;
};

export const CLogo = ({ styles }) => {
  return <img src={CIcon} className={styles} alt="logo" />;
};
