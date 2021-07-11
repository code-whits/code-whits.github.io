import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import NavbarComponent from "../components/Navbar";
import ListComponent from "../components/List";

import axios from "axios";

const Language = (props) => {
  const [functions, setFunctions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const languages = ["python", "javascript", "c"];
    async function getFunctions(language) {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-" +
        language +
        "/main/misc/functions.json";
      await axios
        .get(url)
        .then((res) => setFunctions(res.data.functions))
        .catch((error) => console.error(error));
    }

    const { language } = props.match.params;
    if (languages.includes(language)) {
      getFunctions(language);
    } else {
      history.push("/Notfound");
    }
  }, [history, props]);
  return (
    <>
      <NavbarComponent />
      <div className="container w-65">
        <ListComponent
          items={functions}
          language={props.match.params.language}
        />
      </div>
    </>
  );
};

export default Language;
