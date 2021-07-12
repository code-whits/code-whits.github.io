import React from "react";

import NavbarComponent from "../components/Navbar";
import FooterComponent from "../components/Footer";

const Notfound = () => {
  return (
    <div>
      <NavbarComponent />
        <div class="container d-flex justify-content-center align-items-center min-vh-custom">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">404</span>
              <div class="mb-4 lead">
                The page you are looking for was not found.
              </div>
              <a href="/" class="btn btn-link">
                Back to Home
              </a>
            </div>
        </div>
        <FooterComponent />
    </div>
  );
};

export default Notfound;
