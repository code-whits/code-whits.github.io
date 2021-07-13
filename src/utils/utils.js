import axios from "axios";

import { PythonLogo, JsLogo, CLogo } from "../components/Logo";

export const languages = ["python", "javascript", "c"];

export const languageProps = [
  {
    id: "python",
    imgSmall: <PythonLogo styles={"logoSmall"} />,
    imgLarge: <PythonLogo styles={"logoLarge"} />,
    description:
      "Python is an interpreted high-level general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant indentation.",
  },
  {
    id: "javascript",
    imgSmall: <JsLogo styles={"logoSmall"} />,
    imgLarge: <JsLogo styles={"logoLarge"} />,
    description:
      "JavaScript is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm."
  },
  {
    id: "c",
    imgSmall: <CLogo styles={"logoSmall"} />,
    imgLarge: <CLogo styles={"logoLarge"} />,
    description:
      "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system."
  },
];

const search = async (lang, searchTerm) => {
  const url =
    "https://raw.githubusercontent.com/code-whits/code-whits-" +
    lang +
    "/main/misc/functions.json";
  let funcs = [],
    filteredList = [];
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
    for (let key in func) {
      var searchString = "";
      if (func.hasOwnProperty(key) && func[key] !== "") {
        searchString += func[key].toString().toLowerCase().trim() + " ";
      }
    }
    return searchString.match(searchTermRegex);
  });
  return filteredList;
};

export const getData = async (lang, searchValue, setFunctions, limit) => {
  let data = [],
    tempData = {};
  const url =
    "https://raw.githubusercontent.com/code-whits/code-whits-" +
    lang +
    "/main/misc/functions.json";
  if (searchValue !== "") {
    search(lang, searchValue)
      .then((ret) => {
        let data = [],
          tempData = {};
        ret.forEach((element) => {
          tempData = {
            language: lang,
            data: element,
          };
          data.push(tempData);
          tempData = {};
        });
        setFunctions((functions) => [...functions, ...data]);
      })
      .catch((error) => console.error(error));
  } else {
    await axios
      .get(url)
      .then((res) => {
        var funcs;
        if(limit === null) {funcs = res.data.functions} else { funcs=res.data.functions.slice(0, limit) }
        funcs.forEach((element) => {
          tempData = {
            language: lang,
            data: element,
          };
          data.push(tempData);
          tempData = {};
        });
        setFunctions((functions) => [...functions, ...data]);
      })
      .catch((error) => console.error(error));
  }
};
