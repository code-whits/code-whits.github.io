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
  const [functions, setFunctions] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getData = async (lang, limit) => {
      let data = [], tempData = {};
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-" +
        lang +
        "/main/misc/functions.json";
      if (searchValue !== "") {
        search(url, searchValue).then((ret) => {
          ret.forEach((element) => {
            tempData = {
              language: lang,
              data: element,
            };
          });
          data.push(tempData);
          tempData = {};
        });
      } else {
        await axios
          .get(url)
          .then((res) => {
            res.data.functions.slice(0, limit).forEach((element) => {
              tempData = {
                language: lang,
                data: element,
              };
              data.push(tempData);
              tempData = {};
            });
          })
          .catch((error) => console.error(error));
      }
      return data;
    };

    const search = async (lang, searchTerm) => {
      const url =
        "https://raw.githubusercontent.com/code-whits/code-whits-" +
        lang +
        "/main/misc/functions.json";
      let funcs = [], filteredList = [];
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

    const getFunctions = async (limit) => {
      let langs = ["python", "javascript", "c"];
      setFunctions([]);
      if (searchValue !== "") {
        for await (let lang of langs) {
          search(lang, searchValue).then((ret) => {
            let data = [], tempData = {};
            ret.forEach((element) => {
              tempData = {
                language: lang,
                data: element,
              };
              data.push(tempData);
              tempData = {};
            });
            setFunctions(functions => [...functions, ...data]);
          });
        }
      } else {
        for await (let lang of langs) {
          getData(lang, limit).then((data) => {
            setFunctions(functions => [...functions, ...data]);
          });
        }
      }
    };
    getFunctions(2);
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
        {functions.length !== 0 && <ListComponent items={functions} />}
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
