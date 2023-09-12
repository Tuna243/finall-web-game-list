import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import { GlobalApiContext } from "../contexts/GlobalApiContext";
import ImageSlide from "../components/ImageSlide";
const GameDetail = () => {
  const { id } = useParams();
  const [currentGame, setCurrentGame] = useState({});
  const [gameScreenShot, setGameScreenShot] = useState([]);
  const [gamePlatformId, setGamePlatformId] = useState([]);
  const [gameStore, setGameStore] = useState([]);
  const [gameGenres, setGameGenres] = useState([]);
  const { gameList } = useContext(GlobalApiContext);
  let navigate = useNavigate();
  const routeChange = (domain) =>{ 
    let path = domain; 
    navigate(path);
  }
  useEffect(() => {
    if (gameList) {
      const currentGameId = gameList.filter((Game) => {
        return Game.id == id;
      })[0];
      setCurrentGame(currentGameId);
      setGameScreenShot(currentGameId.short_screenshots);
      setGamePlatformId(currentGameId.platforms);
      setGameStore(currentGameId.stores);
      setGameGenres(currentGameId.genres);
      // console.log(currentGame);
      // console.log(gameStore);
      // console.log(gamePlatform);
      // console.log(gameGenres[0]);
    }
  }, [gameList]);

  if (gameList === undefined) {
    return <Loading />;
  }
  return (
    <div>
      {
        <div className="relative">
          <div className="absolute flex gap-5 top-8 p-5 bg-gradient-to-t from-transparent to-slate-500  w-1/2 h-[100%] m-8 bg-center">
            <img
              src={currentGame.background_image}
              alt=" Loading..."
              className="h-[150px] w-[120px] border-solid-[3px] object-cover bg-relative "
            />
            <div className="relative">
              <h1 className="text-[2rem] text-white font-bold right-3">
                {currentGame.name}
              </h1>
              <p className="text-[0.9 rem] text-white">
                {" "}
                Released: {currentGame.released} {currentGame.name}{" "}
              </p>
              <p className="text-white font-bold">
                PlatForm :{" "}
                {gamePlatformId.map((obj, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-slate-200 m-2 p-0 text-black"
                    >
                      {obj.platform.name}{" "}
                    </span>
                  );
                })}
              </p>
              <p className="text-white font-bold">
                Rating: {currentGame.rating} <br />
                Genres:{" "}
                {gameGenres.map(({ name }) => {
                  return (
                    <span className="bg-slate-200 m-2 p-0 text-black">
                      {name}{" "}
                    </span>
                  );
                })}
              </p>
              <h2 className="font-bold text-[1.4rem] text-white">
                Editor's Preview
              </h2>
              <p className="text-white max-w-lg">
                Commodo nostrud ut aute minim nulla. Ipsum Lorem et tempor
                aliquip cupidatat. Proident ipsum commodo aliquip commodo
                officia do irure voluptate mollit dolor minim fugiat et. Aliqua
                cillum laborum culpa nulla culpa amet nulla.
              </p>
              <h2 className="font-bold text-[1.4rem] text-white">Downloads</h2>
              <div className="flex gap-4">
                {gameStore.map((obj, index) => {
                  return (
                    <div key={(index)}>
                      <button onClick={()=>{routeChange(obj.store.domain)}}>{obj.store.name}</button>
                    </div>
                  );
                })}
              
              </div>
              <div className="max-w-md h-2 ">
                <h2 className="font-bold text-[1.4rem] text-white">
                  Game Captures
                </h2>
                <ImageSlide gameScreenShot={gameScreenShot} />
              </div>
            </div>
          </div>
          <img
            src={currentGame.background_image}
            alt=" Loading..."
            className=" md:h-auto w-full object-cover bg-fixed z-3 "
          />
        </div>
      }
    </div>
  );
};

export default GameDetail;
