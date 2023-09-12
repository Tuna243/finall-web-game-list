import React, { useContext, useEffect, useState } from "react";
import { GlobalApiContext } from "../contexts/GlobalApiContext";

function GenreList({ setGenreId }) {
  const { gameGenre } = useContext(GlobalApiContext);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="px-6 sticky">
      <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
      {gameGenre.map((item, index) => (
        <div
          onClick={() => {
            setActiveIndex(index);
            setGenreId(item.id);
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer
            hover:bg-gray-300 p-2 group
            rounded-lg hover:dark:bg-gray-600
            ${activeIndex == index ? "bg-gray-300 dark:bg-gray-600" : null}`}
        >
          <img
            src={item.image_background}
            className={`w-[40px] h-[40px]
                object-cover rounded-lg group-hover:scale-105 transition-all
                ease-out duration-300 ${
                  activeIndex == index ? "scale-105" : null
                }`}
          />
          <h3
            className={`dark:text-white text-[18px]
                group-hover:font-bold transition-all
                ease-out duration-300 ${
                  activeIndex == index ? "font-bold" : null
                }`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
