import React, { useContext, useEffect, useState } from "react";
import GenreList from "../components/GenreList";
import Banner from "../components/Banner";
import TrendingGames from "../components/TrendingGames";
import GamesByGenresId from "../components/GameByGenresId";
import Loading from "../components/common/Loading";
import { GlobalApiContext } from "../contexts/GlobalApiContext";

function Home() {

  const [genreId, setGenreId] = useState(4);
  const gameContext = useContext(GlobalApiContext);



  if (
    gameContext.gameList === undefined ||
    gameContext.gameGenre === undefined
  ) {
    return <Loading />;
  }
  // console.log(genreId);
  return (
    <div className=" grid grid-cols-4 px-8">
      <div className="hidden md:block">
        <GenreList setGenreId={setGenreId} />
      </div>
      <div className="col-span-4 md:col-span-3">
        <div>
          <Banner gameBanner={gameContext.gameList[Math.floor(Math.random() * gameContext.gameList.length)]} />
          <TrendingGames gameList={gameContext.gameList} />
          <GamesByGenresId
            gameListByGenreId={genreId}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
