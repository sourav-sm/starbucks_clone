// import React from "react";
// import Part_5 from "../assets/5part.png";

// function Part5(){
//   return(
//    <div style={{display:"flex",flexDirection:"row",padding:"30px",fontFamily:"sans-serif"}}>
//       <img src={Part_5} alt="part5" />
//       <div style={{ display:"flex",flexDirection:"column", background:"#337481",color:"#ffffff",justifyContent:"center",textAlign: "center",padding:"32px 48px",gap:"10px"}}>
//         <div style={{fontSize:"50px",fontWeight:"bold"}}>Pistachi-Yum</div>
//         <div style={{fontSize:"30px"}}>Creamy, cozy vibes make the Pistachio Latte a must-have this season.</div>
//         <button style={{display: "inline-block",fontSize:"16px",fontWeight:"bold",background:"#337481",color:"#ffffff",borderRadius:"20px",borderColor:"#ffffff",
//         padding: "15px 30px",cursor:"pointer",margin:"10px 225px"}}>Order now</button>
//       </div>
//   </div>
//   );
// }
// export default Part5;

import React from "react";
import Part_5 from "../assets/5part.png";

function Part5() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      padding: "30px",
      fontFamily: "sans-serif",
      flexWrap: "wrap", // Allow flex items to wrap to the next line
    }}>
      
      <img
        src={Part_5}
        alt="part1"
        style={{
          width: "100%",
          maxWidth: "700px",
          '@media (max-width: 600px)': {
            width: "100%",
          }
        }}
      />
      <div style={{
        display: "flex",
        flexDirection: "column",
        background: "#a5c4dc",
        color: "#1e3932",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 48px",
        gap: "20px"
      }}>

        <div style={{ fontSize: "50px", fontWeight: "bold" }}>Savory and satisfying</div>
        <div style={{ fontSize: "20px" }}>
          <div style={{ marginBottom: "20px" }}>Grab a subtly sweet Chicken, Maple Butter & Egg Sandwich on the way.</div>
          <button style={{
            display: "inline-block",
            fontSize: "16px",
            background: "#a5c4dc",
            color: "#1e3932",
            borderRadius: "20px",
            padding: "12px 25px",
            cursor: "pointer",
            paddingTop: "10px",
          }}>
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Part5;