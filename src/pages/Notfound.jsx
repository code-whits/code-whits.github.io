import React from "react";

import NavbarComponent from "../components/Navbar";

const Notfound = () => {
  return (
    <div>
      <NavbarComponent />
      <div className="container width-custom">
        <h1>404 Not Found</h1>
      </div>
    </div>
  );
};

export default Notfound;
