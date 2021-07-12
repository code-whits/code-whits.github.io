import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import NavbarComponent from "../components/Navbar";
import ListComponent from "../components/List";
import SpinnerComponent from "../components/Spinner";
import FooterComponent from "../components/Footer";

import { languages, languageProps, getData } from "../utils/utils";

const Language = (props) => {
  const [functions, setFunctions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getFunctions = async () => {
      setFunctions([]);
      const { language } = props.match.params;
      if (languages.includes(language)) {
        getData(language, searchValue, setFunctions);
      } else {
        history.push("/Notfound");
      }
    };
    getFunctions();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [history, props, searchValue]);
  return (
    <>
      <NavbarComponent
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className="container width-custom">
        
          {languageProps.map((lang) => {
            if (lang.id === props.match.params.language)
              return (
                <div className="row mx-auto my-5" key={lang.id}>
                  <div className="col-sm-3">
                    <span className="d-flex justify-content-center align-items-center ml-5 my-3">
                      {lang.imgLarge}
                    </span>
                  </div>
                  <div className="d-flex justify-content-center align-items-center col-sm-9 px-3">
                    {lang.description}
                  </div>
                </div>
              );
              return null;
          })}
          {loading && <SpinnerComponent />}
          {!loading && <ListComponent items={functions} />}
        </div>
        < FooterComponent />
    </>
  );
};

export default Language;
