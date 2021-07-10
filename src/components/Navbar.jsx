import React from "react";

import { Logo } from "../components/Logo"

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
        < Logo />
        <span className="mr-10">
          <input type="text" placeholder="Search" className="form-control mr-sm-2" />
        </span>
    </nav>
  );
};

export default NavbarComponent;
