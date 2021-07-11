import React from "react";

const FooterComponent = () => {
  return (
    <footer className="text-lg-start py-2">
        <div className="d-flex justify-content-center list inline-list px-3 my-2">
            <span className="mx-2 mt-2"><a className="text-secondary text-decoration-none" href="https://github.com/code-whits">Github</a></span>
            <span className="mx-2 mt-2"><a className="text-secondary text-decoration-none" href="/contribute">Contribute</a></span>
        </div>
      <div
        className="text-center text-light px-4 my-2"
      >
        © 2021 Copyright&nbsp;
        <span className="text-light text-decoration-none">
          Code Whits
        </span>
      </div>
    </footer>
  );
};

export default FooterComponent;
