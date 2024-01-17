// import React from "react";
// import Part_4 from "../assets/4part.png";

// function Part4(){
//   return(
//    <div style={{display:"flex",flexDirection:"row",padding:"30px",fontFamily:"sans-serif"}}>
//       <div style={{ display:"flex",flexDirection:"column", background:"#337481",color:"#ffffff",justifyContent:"center",textAlign: "center",padding:"32px 48px",gap:"10px"}}>
//         <div style={{fontSize:"50px",fontWeight:"bold"}}>Hey there,hazeInut</div>
//         <div style={{fontSize:"30px"}}>Say hello to our HazeInut Oatmilk Shaken Espresso,a rich and layered pick-me-up.</div>
//         <button style={{display: "inline-block",fontSize:"16px",fontWeight:"bold",background:"#337481",color:"#ffffff",borderRadius:"20px",borderColor:"#ffffff",
//         padding: "15px 30px",cursor:"pointer",margin:"10px 225px"}}>Order now</button>
//       </div>
//       <img src={Part_4} alt="part4" />
//   </div>
//   );
// }
// export default Part4;

import React from "react";
import Part_4 from "../assets/4part.png";

function Part2() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      padding: "30px",
      fontFamily: "sans-serif",
      flexWrap: "wrap", // Allow flex items to wrap to the next line
    }}>
      
      <div style={{
        display: "flex",
        flexDirection: "column",
        background:"#efabfc",
        color:"#1e3932",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 48px",
        gap: "20px",
      }}>

        <div style={{ fontSize: "50px", fontWeight: "bold" }}>Hey there, hazelnut</div>
        <div style={{ fontSize: "17px" }}>
          <div style={{marginBottom: "20px"}}>Say hello to our Hazelnut Oatmilk Shaken Espresso, a rich and layered pick-me-up.</div>
          <button style={{
            display: "inline-block",
            fontSize: "16px",
            background:"#efabfc",
            color:"#1e3932",
            borderRadius:"20px",
            borderColor:"#1e3932",
            padding: "12px 25px",
            cursor: "pointer",
            paddingTop: "10px",
          }}>
            Order now
          </button>
        </div>
      </div>
      <img
        src={Part_4}
        alt="part4"
        style={{
          width: "100%",
          maxWidth: "700px",
          // Separate style object for media query
          '@media (max-width: 600px)': {
            width: "100%",
          }
        }}
      />
    </div>
  );
}

export default Part2;
