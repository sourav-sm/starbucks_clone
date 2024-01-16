import React from "react";
import Part_5 from "../assets/5part.png";

function Part5(){
  return(
   <div style={{display:"flex",flexDirection:"row",padding:"30px",fontFamily:"sans-serif"}}>
      <img src={Part_5} alt="part5" />
      <div style={{ display:"flex",flexDirection:"column", background:"#337481",color:"#ffffff",justifyContent:"center",textAlign: "center",padding:"32px 48px",gap:"10px"}}>
        <div style={{fontSize:"50px",fontWeight:"bold"}}>Pistachi-Yum</div>
        <div style={{fontSize:"30px"}}>Creamy, cozy vibes make the Pistachio Latte a must-have this season.</div>
        <button style={{display: "inline-block",fontSize:"16px",fontWeight:"bold",background:"#337481",color:"#ffffff",borderRadius:"20px",borderColor:"#ffffff",
        padding: "15px 30px",cursor:"pointer",margin:"10px 225px"}}>Order now</button>
      </div>
  </div>
  );
}
export default Part5;