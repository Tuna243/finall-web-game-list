import React, { useEffect, useState } from "react";
import Home from "./pages/home";
import GameDetail from "./pages/GameDetail";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { ThemeContext } from "./contexts/ThemeContext";
import { GlobalApiContext } from "./contexts/GlobalApiContext";
import { Routes, Route } from "react-router-dom";
import GlobalApi from "./services/GlobalApi";
import "./App.css";
import NotFound from "./components/NotFound";
function App() {
  const [theme, setTheme] = useState("light");
  const [gameList, setGameList] = useState();
  const [gameGenre, setGameGenre] = useState();

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );

    GlobalApi.getAllGames.then((resp) => {
      setGameList(resp.data.results);
    });

    GlobalApi.getGenreList.then((resp) => {
      setGameGenre(resp.data.results);
    });
  }, []);

  return (
    <GlobalApiContext.Provider value={{ gameList, gameGenre }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`${theme} ${theme == "dark" ? "bg-[#0c0d14]" : null} `}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Games/Details/:id" element={<GameDetail />}></Route>
            <Route path="/*" element={<NotFound/>}></Route>
          </Routes>
          <Footer />
        </div>
      </ThemeContext.Provider>
    </GlobalApiContext.Provider>
  );
}

export default App;
