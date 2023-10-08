import React, { useRef, useState } from 'react'
import ScratchCard from "react-scratchcard-v4";
import cardImage from "../assets/sc-card.png"
import cardImage1 from "../assets/sc-card-1.png"
import PostScratch from './PostScratch';
import Lottie from "lottie-react"
import Celebration from "../assets/celebration.json"
import CelebSound from "../assets/confetti.mp3"

const ScratchCardComponent = () => {
  const [isScratched, setIsScratched] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  let audioRef = useRef(null);

  const handleCardClick = () => {
    setIsFlipped(true)
  }

  const handleMove = () => {
    if (audioRef && audioRef.current ) {
      if(isScratched){
      audioRef.current.volume = 1;
      audioRef.current.play();
      }
      else audioRef.current.pause();
    }
  }

  return (
    <div style={{display:"flex", height:isScratched ? "100vh": "auto", width:"100vw", overflow:"hidden", justifyContent:"center", alignItems:"center",
    marginTop:"-80px"}}>
      {isScratched && (
        <div style={{position:"absolute", width:"100%",height:"100%", overflow:'hidden', bottom:0, left:0,zIndex:100}}>
          <Lottie height={1000} width={1000} style={{position:"relative", bottom:"-160px", transform:"scale(2.4)", zIndex:100}} loop={false} animationData={Celebration} />
          <audio ref={audioRef} loop={false} autoPlay={true} preload='auto' >
            <source src={CelebSound} type='audio/ogg' />
          </audio>
        </div>
      )}
        <div
          style={{
            width: "280px",
            height: "360px",
            position: "relative",
            transformStyle: "preserve-3d",
            transition: "transform 0.8s",
            transform: isFlipped ? "rotateY(180deg)" : "none",
          }}
          onClick={handleCardClick}
        >
          <div
            className="card-front"
            style={{
              width: "280px",
              height: "360px",
              position: "absolute",
              backfaceVisibility: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "32px", overflow: isScratched ? "visible" : "hidden"
            }}
          >
            <img
              src={cardImage1}
              alt="Front Card"
              style={{ width: "100%", maxHeight: "100%" }}
            />
          </div>
          <div
            className="card-back"
            style={{
              width: "280px",
              height: "360px",
              position: "absolute",
              backfaceVisibility: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: "rotateY(180deg)",
              borderRadius: "32px", overflow: isScratched ? "visible" : "hidden"
            }}
          >
            <ScratchCard
              width={280}
              height={360}
              image={cardImage}
              finishPercent={30}
              brushSize={50}
              onComplete={() => { setIsScratched(true); handleMove(); }}
            >
              <PostScratch isScratched={isScratched} />
            </ScratchCard>
          </div>
        </div>
    </div>
  )
}

export default ScratchCardComponent