import React from 'react'
import PostSC from "../assets/post-sc.jpg"
const PostScratch = ({isScratched}) => {
  return (
    <div style={{backgroundColor:"white", borderRadius:"32px"}}>
        <img src={PostSC} alt="" style={{height:"100%", width:"100%", borderRadius:"32px", transitionDuration:"1000ms", transform: isScratched ? "scale(1.3)" : "scale(1)" }} />
        {/* <p>Hi there</p> */}
    </div>
  )
}

export default PostScratch