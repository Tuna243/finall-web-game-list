import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/Logo (3).png";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiMiniMoon } from "react-icons/hi2";
import { HiSun } from "react-icons/hi2";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./assets/HeaderStyle.css";
import SearchSuggest from "./SearchSuggest";
import Home from "../../pages/home";
const Header = () => {
  /*// Search idea
     B1. Event Catch Input
     B2. Filter by event input value with textValue
    // const [toggle, setToggle] = useState(true)*/
  const { theme, setTheme } = useContext(ThemeContext);
  const [textValue, setTextValue] = useState();

  function onChangeHandle(event) {
    setTextValue(event.target.value);
  }
  return (
    <div className="flex items-center justify-around p-3 dark:bg-[#1f2030] static">
      <div className="flex font-bold text-black-200 p-1 m-3 items-center">
        <img src={logo} width={60} height={60} />
        <a href="/">
          <h2 className="text-3xl font-bold dark:text-white">Shaki Games</h2>
        </a>
      </div>
      <div className="flex bg-gray-200 p-2 w-3/5 mx-5 rounded-full items-center relative">
        <HiMiniMagnifyingGlass size={25} />
        <input
          type="text"
          className="bg-transparent  outline-none px-2 w-full"
          placeholder="Search Games"
          onChange={onChangeHandle}
        />
        {textValue && <SearchSuggest textValue={textValue} />}
      </div>

      <div>
        {theme == "light" ? (
          <HiMiniMoon
            className="text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
