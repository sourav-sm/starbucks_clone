import React from "react";
import Part1 from "../assets/1part.png";

function Part(){
  return(
   <div style={{display:"flex",flexDirection:"row",padding:"30px",fontFamily:"sans-serif"}}>
      <img src={Part1} alt="part1" />
      <div style={{ display:"flex",flexDirection:"column", background:"#bbf2d1",color:"#1e3932",justifyContent:"center",textAlign: "center",padding:"32px 48px",gap:"10px"}}>
        <div style={{fontSize:"50px",fontWeight:"bold"}}>New Year, New Yays</div>
        <div style={{fontSize:"30px"}}>Jump-start your year with a week full of offers in the Starbucks app.*</div>
        <button style={{display: "inline-block",fontSize:"16px",background:"#bbf2d1",color:"#1e3932",borderRadius:"20px",
  padding: "15px 30px",cursor:"pointer",margin:"10px 225px"}}>Open the app</button>
      </div>
  </div>
  );
}
export default Part;