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
    <nav className="navbar bg-primary px-10 w-100">
      <span className="d-flex align-items-center">
        <Logo />
        <span className="text-light fs-4 fw-bold font-logo select-none">
          Code Whits&nbsp;
        </span>
      </span>
      <span className="mr-10">
        <input
          type="text"
          placeholder="Search"
          value={value}
          className="form-control display-none"
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
