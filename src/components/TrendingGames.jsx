import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/common/Loading";
function TrendingGames({ gameList }) {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
  }, []);
  return (
    <div className="mt-5 hidden md:block z-10 ">
      <h2 className="font-bold text-[#172554] text-[30px] dark:text-white">
        Trending Games
      </h2>
      <div className="md:grid md:grid-cols-3 gap-4 mt-5 lg:grid-cols-4 cursor-pointer">
        {loading ? (
          gameList.map(
            (item, index) =>
              index < 4 && (
                <div
                  className="sticky bg-[#a3a3a3] dark:bg-[#172554] rounded-lg p-2
                hover:scale-110 transition-all duration-300 ease-in-out"
                >
                  <img
                    src={item.background_image}
                    alt="Loading..."
                    className="h-[270px] rounded-lg object-cover"
                  />
                  <h2 className="text-[#172554] dark:text-white p-2 text-[1rem] font-bold">
                    {item.name}
                  </h2>
                  <button
                    className="relative mt-3 bottom-3 bg-[#2563eb] border-b-2 text-white rounded-lg w-30 h-30 mb-2 p-2 hover:bg-[#25eb77] 
                    "
                    onClick={() => navigate(`/Games/Details/${item.id} `)}
                  >
                    SEE MORE
                  </button>
                </div>
              )
          )
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
}

export default TrendingGames;
