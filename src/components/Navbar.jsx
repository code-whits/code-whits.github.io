import React, { useState, useEffect } from "react";

import { Logo } from "../components/Logo";

const NavbarComponent = ({ setSearchValue, searchValue }) => {
  const [value, setValue] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchValue(value);
    }
  };

  useEffect(() => {
    if (searchValue !== "") {
      setValue(searchValue);
    }
  }, [searchValue]);

  return (
    <nav className="navbar bg-primary row d-flex justify-content-center">
        <a className="justify-center d-flex align-items-center text-decoration-none col-xs-12 col-sm-12 col-md-12 col-lg-7 col-xl-7" href="/">
          <Logo />
          <span className="text-light fs-4 fw-bold font-logo select-none">
            Code Whits&nbsp;
          </span>
        </a>
        <span className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3">
          <input
            type="text"
            placeholder="Search"
            value={value}
            className="form-control"
            onKeyDown={(e) => handleKeyPress(e)}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </span>
    </nav>
  );
};

export default NavbarComponent;
