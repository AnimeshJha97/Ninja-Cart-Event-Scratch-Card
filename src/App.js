import ScratchCardComponent from "./component/ScratchCardComponent"
import ImgTop from "./assets/img-top.jpg"
import ImgBtm from "./assets/img-btm.jpg"
function App() {
  return (
    <div style={{position:"relative",height:"92.8vh", overflow:"hidden", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", backgroundImage:`url(${ImgBtm})`}}>
        <img style={{height:"280px", objectFit:"contain", position:"absolute", top:0, opacity:0.6}} src={ImgTop} alt="" />
      <div style={{position:"absolute", top:0, height:"100%", width:"100%", backgroundColor:"rgba(0,0,0,0.85)"}} />
      <ScratchCardComponent />
    </div>
  );
}

export default App;
