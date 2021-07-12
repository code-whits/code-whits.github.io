import React from "react";

const EmptyListComponent = () => {
  return (
        <div className="container d-flex flex-row align-items-center justify-content-center py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <span className="display-1 d-block">Oops!</span>
              <div className="my-4 lead">
                Cannot find what you are looking for!
              </div>
            </div>
          </div>
        </div>
  );
};

export default EmptyListComponent;
