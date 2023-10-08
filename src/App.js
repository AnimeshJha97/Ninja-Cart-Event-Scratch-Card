import ScratchCardComponent from "./component/ScratchCardComponent"
import ImgTop from "./assets/img-top.jpg"
function App() {
  return (
    <div style={{position:"relative",height:"100vh", overflow:"hidden", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#122c4b"}}>
        <img style={{height:"800px", objectFit:"contain", position:"absolute", top:0, opacity:0.3}} src={ImgTop} alt="" />
      <div style={{position:"absolute", top:0, height:"100%", width:"100%", backgroundColor:"rgba(0,0,0,0.85)"}} />
      <ScratchCardComponent />
    </div>
  );
}

export default App;
