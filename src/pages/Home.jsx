import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { PythonLogo, JsLogo, CLogo } from "../components/Logo";
import NavbarComponent from "../components/Navbar";
import ListComponent from "../components/List";
import FooterComponent from "../components/Footer";

const languages = [
  {
    id: "python",
    img: <PythonLogo />,
  },
  {
    id: "javascript",
    img: <JsLogo />,
  },
  {
    id: "c/c++",
    img: <CLogo />,
  },
];

const Home = () => {
  // todo: implement a generalized function
  const [pyFunctions, setPyFunctions] = useState([]);
  const [jsFunctions, setJsFunctions] = useState([]);
  const [cFunctions, setCFunctions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const search = async (url, searchTerm) => {
    let funcs = [];
    var filteredList = [];
    await axios
      .get(url)
      .then((res) => (funcs = res.data.functions))
      .catch((error) => console.error(error));
    let tokens = searchTerm
      .toLowerCase()
      .split(" ")
      .filter(function (token) {
        return token.trim() !== "";
      });
    let searchTermRegex = new RegExp(tokens.join("|"), "gim");
    filteredList = funcs.filter(function (func) {
      for (var key in func) {
        var searchString = "";
        if (func.hasOwnProperty(key) && func[key] !== "") {
          searchString += func[key].toString().toLowerCase().trim() + " ";
        }
      }
      return searchString.match(searchTermRegex);
    });
    return filteredList;
  };

  useEffect(() => {
    async function getPyFunctions() {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-python/main/misc/functions.json";
      if (searchValue !== "") {
        search(url, searchValue).then((ret) => setPyFunctions(ret));
      } else {
        await axios
          .get(url)
          .then((res) => setPyFunctions(res.data.functions.slice(0, 2)))
          .catch((error) => console.error(error));
      }
    }
    async function getJsFunctions() {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-javascript/main/misc/functions.json";
      if (searchValue !== "") {
        search(url, searchValue).then((ret) => setJsFunctions(ret));
      } else {
        await axios
          .get(url)
          .then((res) => setJsFunctions(res.data.functions.slice(0, 2)))
          .catch((error) => console.error(error));
      }
    }
    async function getCFunctions() {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-c/main/misc/functions.json";
      if (searchValue !== "") {
        search(url, searchValue).then((ret) => setCFunctions(ret));
      } else {
        await axios
          .get(url)
          .then((res) => setCFunctions(res.data.functions.slice(0, 2)))
          .catch((error) => console.error(error));
      }
    }
    getPyFunctions();
    getJsFunctions();
    getCFunctions();
  }, [searchValue]);
  return (
    <>
      <NavbarComponent
        setSearchValue={setSearchValue}
        searchValue={searchValue}
      />
      <div className="container w-65">
        <h2 className="my-4 font-custom select-none">Featured</h2>
        <div className="m-2 row w-90 mx-auto">
          {languages.map((language) => {
            return (
              <div
                key={language.id}
                className="d-flex justify-content-around col-sm row border rounded m-2 py-3"
              >
                {language.img}
                <Link
                  to={"/l/" + language.id}
                  className="text-decoration-none text-capitalize text-light col-sm-8"
                >
                  <span className="fs-4 fw-normal text-capitalize">
                    {language.id}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <h2 className="my-4 font-custom select-none">Latest</h2>
        {pyFunctions.length !== 0 && (
          <ListComponent items={pyFunctions} language="python" />
        )}
        {jsFunctions.length !== 0 && (
          <ListComponent items={jsFunctions} language="javascript" />
        )}
        {cFunctions.length !== 0 && (
          <ListComponent items={cFunctions} language="c" />
        )}
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
