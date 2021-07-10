import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import { PythonLogo, JsLogo, CLogo } from "../components/Logo"
import NavbarComponent from "../components/Navbar"
import ListComponent from "../components/List"
import FooterComponent from "../components/Footer";

const languages = [
  {
    id: "python",
    class: "fab fa-python",
    img: < PythonLogo />,
  },
  {
    id: "javascript",
    class: "fab fa-js-square",
    img: < JsLogo />,
  },
  {
    id: "c/c++",
    class: "fab fa-cuttlefish",
    img: < CLogo />,
  },
];

const Home = () => {
  // todo: implement a generalized function
  const [pyFunctions, setPyFunctions] = useState([]);
  const [jsFunctions, setJsFunctions] = useState([]);
  const [cFunctions, setCFunctions] = useState([]);

  useEffect(() => {
    async function getPyFunctions() {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-python/main/misc/functions.json";
      await axios
        .get(url)
        .then((res) => setPyFunctions(res.data.functions.slice(-2)))
        .catch((error) => console.error(error));
    }
    async function getJsFunctions() {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-javascript/main/misc/functions.json";
      await axios
        .get(url)
        .then((res) => setJsFunctions(res.data.functions.slice(-2)))
        .catch((error) => console.error(error));
    }
    async function getCFunctions() {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-c/main/misc/functions.json";
      await axios
        .get(url)
        .then((res) => setCFunctions(res.data.functions.slice(-2)))
        .catch((error) => console.error(error));
    }
    getPyFunctions();
    getJsFunctions();
    getCFunctions();
  }, []);
  return (
    <>
      <NavbarComponent />
      <div className="container">
        <h2 className="my-4">Featured</h2>
        <div className="m-2 row">
          {languages.map((language) => {
            return (
              <div
                key={language.id}
                className="d-flex justify-content-around col-sm row border rounded m-2 py-3"
              >
                {/* <i
                  className={language.class + " my-2 mx-auto fs-4 col-sm-2"}
                ></i> */}
                {language.img}
                <Link
                  to={"/l/" + language.id}
                  className="text-decoration-none text-capitalize text-dark col-sm-8"
                >
                  <span className="fs-4 fw-bold text-capitalize">
                    {language.id}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
        <h2 className="my-4">Latest</h2>
        <ListComponent items={pyFunctions} language="python" />
        <ListComponent items={jsFunctions} language="javascript" />
        <ListComponent items={cFunctions} language="c" />
      </div>
      < FooterComponent />
    </>
  );
};

export default Home;
