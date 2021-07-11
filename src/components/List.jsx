import React, { useState, useEffect } from "react";

import SourceComponent from "./Source";

import { PythonLogo, JsLogo, CLogo } from "../components/Logo";

const logos = {
  "python": <PythonLogo />,
  "javascript": <JsLogo />,
  "c": <CLogo />,
};

const ListComponent = ({ items }) => {
  const [open, setOpen] = useState([]);
  const [isnull, setIsnull] = useState(false)

  const toggleOpen = (index) => {
    if (open.includes(index)) {
      setOpen(open.filter(item => item !== index));
    } else {
      setOpen([...open, index]);
    }
  };

  useEffect(() => {
    if(items.length === 0) {
      setIsnull(true)
    }
  }, [items, items.length])

  return (
    <div className="mx-3 my-4">
      {!isnull && items.map((item, index) => {
        return (
          <div
            key={index}
            className="d-flex justify-contents-between bg-ternary border rounded px-1 pb-2 my-3"
          >
            <div className="mx-3 w-100">
              <div className="fn-title d-flex align-items-center mx-2">
                <span className="m-2">{logos[item.language]}</span>
                <span
                  className="cursor-pointer hover-underline"
                  onClick={() => toggleOpen(index)}
                >
                  {item.data.name}
                </span>
              </div>
              <div className="fw-normal mx-4 cursor-default">
                {item.data.description}
              </div>
              {open.includes(index) && (
                <SourceComponent key={index} src={item.data.source} language={item.language} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListComponent;
