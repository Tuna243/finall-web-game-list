import React, { useContext, useEffect, useState } from "react";
import { HiOutlineStar } from "react-icons/hi2";
import { HiMiniEye } from "react-icons/hi2";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { GlobalApiContext } from "../contexts/GlobalApiContext";
import GlobalApi from "../services/GlobalApi";
function GameByGenresId({ gameListByGenreId }) {
  const [gameByGenreId, setGameByGenreId] = useState([]);
  const getGameListByGenreId = () => {
    GlobalApi.getGameListByGenreId(gameListByGenreId).then((resp) => {
      setGameByGenreId(resp.data.results);
    });
  };
  useEffect(() => {
    getGameListByGenreId();
    // console.log(gameByGenreId);
  }, [gameListByGenreId]);

  const navigate = useNavigate();

  return (
    <div>
      <h2 className="font-bold text-[#172554] text-[30px] dark:text-white mt-5">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 grid-cols-3 lg:grid-cols-4 gap-6">
        {gameByGenreId.map((item) => (
          <div
            className="relative bg-gray-300 dark:bg-[#1e3a8a] p-2 rounded-lg pb-12 h-full cursor-pointer mt-5
                                hover:scale-110 transition-all ease-in-out duration-200"
            onClick={() => navigate(`/Games/Details/${item.id} `)}
          >
            <img
              src={item.background_image}
              alt={item.name}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[1rem] text-[#172554] dark:text-white font-bold">
              {item.name}
            </h2>
            <h2 className="absolute text-[1em] font-bold bottom-0 p-1 flex  items-center gap-2 text-gray-500 dark:text-gray-300 max-xl:">
              <HiOutlineStar /> {item.rating}
              <HiMiniEye /> {item.reviews_count}
              <HiMiniComputerDesktop /> {item.playtime}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameByGenresId;
