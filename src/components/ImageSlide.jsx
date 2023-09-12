import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import '../components/common/assets/ImageSlide.css'
const Slideshow = ({ gameScreenShot }) => {
  console.log(gameScreenShot.image);
  return (
    <div className="slide-container mt-5 rounded-md border-8 border-x-gray-200  ">
      <Fade>
        {gameScreenShot.map((gameScreenShot, index) => (
          <div key={index}>
            <img className='w-full ring-offset-zinc-700' src={gameScreenShot.image} />
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;
