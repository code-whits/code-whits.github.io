import React from "react";

const EmptyListComponent = () => {
  return (
        <div class="container d-flex flex-row align-items-center justify-content-center py-5">
          <div class="row justify-content-center">
            <div class="col-md-12 text-center">
              <span class="display-1 d-block">Oops!</span>
              <div class="my-4 lead">
                Cannot find what you are looking for!
              </div>
            </div>
          </div>
        </div>
  );
};

export default EmptyListComponent;
