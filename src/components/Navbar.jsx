import React from "react";

import { Logo } from "../components/Logo";

const NavbarComponent = () => {
  return (
    <nav className="navbar bg-primary px-10 w-100">
      <span className="d-flex align-items-center">
        <Logo />
        <span className="text-light fs-4 fw-bold">Code Whits&nbsp;</span>
      </span>
      <span className="mr-10">
        <input type="text" placeholder="Search" className="form-control" />
      </span>
    </nav>
  );
};

export default NavbarComponent;
