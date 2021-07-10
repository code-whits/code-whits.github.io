import React, { useState, useEffect } from "react";

import SpinnerComponent from "../components/Spinner";

import axios from "axios";

const SourceComponent = ({ src, language }) => {
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/code-whits/code-whits-" + language + "/main/lib/" +
      src;
    axios
      .get(url)
      .then((res) => setSource(res.data))
      .then(setLoading(false));
  }, [src]);
  return (
    <>
      {loading === false ? (
        <div className="text-light bg-dark my-3 mx-auto p-3 w-90">{source}</div>
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
};

export default SourceComponent;
