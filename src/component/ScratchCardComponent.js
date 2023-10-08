import React, { useRef, useState } from 'react'
import ScratchCard from "react-scratchcard-v4";
import cardImage from "../assets/sc-card.png"
import PostScratch from './PostScratch';
import Lottie from "lottie-react"
import Celebration from "../assets/celebration.json"
import CelebSound from "../assets/confetti.mp3"

const ScratchCardComponent = () => {
  const [isScratched, setIsScratched] = useState(false);
  let audioRef = useRef(null);

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
    <div style={{display:"flex", borderRadius:"32px", height:isScratched ? "100vh": "auto", width:"100vw", overflow:"hidden", justifyContent:"center", alignItems:"center"}}>
      {isScratched && (
        <div style={{position:"absolute", width:"100%",height:"100%", overflow:'hidden', bottom:0, left:0,zIndex:100}}>
          <Lottie height={1000} width={1000} style={{position:"relative", bottom:"-160px", transform:"scale(2.4)", zIndex:100}} loop={false} animationData={Celebration} />
          <audio ref={audioRef} loop={false} autoPlay={true} preload='auto' >
            <source src={CelebSound} type='audio/ogg' />
          </audio>
        </div>
      )}
      <div style={{borderRadius:"32px", overflow:isScratched? "visible":"hidden"}}>
        <ScratchCard 
          // onClick={(e) => handleMove}
          width= {280}
          height= {360}
          image= {cardImage}
          finishPercent= {40} 
          onComplete ={() => {setIsScratched(true); handleMove();}} 
        >        
          <PostScratch isScratched={isScratched} />
        </ScratchCard>
      </div>
    </div>
  )
}

export default ScratchCardComponent