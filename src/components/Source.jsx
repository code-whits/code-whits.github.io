import React, { useState, useEffect } from "react";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as Style } from 'react-syntax-highlighter/dist/esm/styles/prism';

import SpinnerComponent from "../components/Spinner";

import axios from "axios";

const SourceComponent = ({ src, language }) => {
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/code-whits/code-whits-" +
      language +
      "/main/lib/" +
      src;
    axios
      .get(url)
      .then((res) => setSource(res.data.trimEnd()))
      .then(setLoading(false));
  }, [src, language]);
  return (
    <>
      {loading === false ? (
        <div className="my-3 mx-auto w-90">
          <SyntaxHighlighter language={language} style={Style}>{source}</SyntaxHighlighter>
        </div>
      ) : (
        <SpinnerComponent />
      )}
    </>
  );
};

export default SourceComponent;
