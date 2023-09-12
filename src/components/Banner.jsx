import React from "react";
import { useNavigate } from "react-router-dom";

function Banner({ gameBanner }) {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold ">{gameBanner.name}</h2>
        <button
          className="bg-[#facc15] text-white px-2 p-1 hover:bg-white hover:text-black"
          onClick={() => navigate(`/Games/Details/${gameBanner.id} `)}
        >
          Play Now
        </button>
      </div>
      <img
        src={gameBanner.background_image}
        alt=" Loading..."
        className="md:h-[320px] w-full object-cover rounded-xl bg-fixed"
      />
    </div>
  );
}

export default Banner;
