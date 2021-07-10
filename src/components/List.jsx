import React, { useState } from "react";

import SourceComponent from "./Source";

import { PythonLogo, JsLogo, CLogo } from "../components/Logo";

const logos = {
  "python": <PythonLogo />,
  "javascript": <JsLogo />,
  "c": <CLogo />,
};

const ListComponent = ({ items, language }) => {
  const [open, setOpen] = useState(null);

  const toggleOpen = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="mx-3 my-4">
      {items.map((item, index) => {
        return (
          <div
            key={index}
            className="d-flex justify-contents-between border rounded p-4 my-3"
          >
            <div className="mx-3 w-100">
              <div className="fs-4 fw-bold my-1 mx-2">
                <span className="m-2">{logos[language]}</span>
                <span
                  className="cursor-pointer hover-underline"
                  onClick={() => toggleOpen(index)}
                >
                  {item.name}
                </span>
              </div>
              <div className="fs-5 fw-normal mx-4 cursor-default">
                {item.description}
              </div>
              {open === index && (
                <SourceComponent key={index} src={item.source} language={language} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListComponent;
