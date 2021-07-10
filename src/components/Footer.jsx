import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-dark text-center text-lg-start py-2">
        <div className="d-flex justify-content-center list inline-list">
            <span className="mx-2 mt-2"><a className="text-secondary text-decoration-none" href="https://github.com/code-whits">Github</a></span>
            <span className="mx-2 mt-2"><a className="text-secondary text-decoration-none" href="#">Contribute</a></span>
        </div>
      <div
        className="text-light text-center p-3"
      >
        © 2021 Copyright&nbsp;
        <a class="text-light text-decoration-none">
          Code Whits
        </a>
      </div>
    </footer>
  );
};

export default FooterComponent;
