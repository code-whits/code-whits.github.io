import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavbarComponent from "../components/Navbar";
import ListComponent from "../components/List";
import FooterComponent from "../components/Footer";
import EmptyListComponent from "../components/EmptyList";

import { languages, languageProps, getData } from "../utils/utils";

const Home = () => {
  const [functions, setFunctions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getFunctions = async () => {
      setFunctions([]);
      for await (let language of languages) {
        getData(language, searchValue, setFunctions);
      }
    };
    getFunctions();
  }, [searchValue]);
  return (
    <>
      <NavbarComponent
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className="container width-custom">
        <h2 className="my-4 font-custom select-none">Featured</h2>
        <div className="m-2 row w-90 languages">
          {languageProps.map((language) => {
            return (
              <div
                key={language.id}
                className="d-flex justify-content-around align-items-center col-sm row border rounded m-2 py-3"
              >
                {language.imgSmall}
                <Link
                  to={"/l/" + language.id}
                  className="d-flex justify-content-center align-items-center text-decoration-none col-sm-8"
                >
                  <span className="text-light fs-4 fw-normal text-capitalize">
                    {language.id}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <h2 className="my-4 font-custom select-none">Latest</h2>
        {functions.length !== 0 && (
          <>
            <ListComponent items={functions} />{" "}
          </>
        )}
        {functions.length === 0 && <EmptyListComponent />}
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
