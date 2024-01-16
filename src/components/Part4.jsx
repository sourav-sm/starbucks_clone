import React from "react";
import Part_4 from "../assets/4part.png";

function Part4(){
  return(
   <div style={{display:"flex",flexDirection:"row",padding:"30px",fontFamily:"sans-serif"}}>
      <div style={{ display:"flex",flexDirection:"column", background:"#337481",color:"#ffffff",justifyContent:"center",textAlign: "center",padding:"32px 48px",gap:"10px"}}>
        <div style={{fontSize:"50px",fontWeight:"bold"}}>Hey there,hazeInut</div>
        <div style={{fontSize:"30px"}}>Say hello to our HazeInut Oatmilk Shaken Espresso,a rich and layered pick-me-up.</div>
        <button style={{display: "inline-block",fontSize:"16px",fontWeight:"bold",background:"#337481",color:"#ffffff",borderRadius:"20px",borderColor:"#ffffff",
        padding: "15px 30px",cursor:"pointer",margin:"10px 225px"}}>Order now</button>
      </div>
      <img src={Part_4} alt="part4" />
  </div>
  );
}
export default Part4;