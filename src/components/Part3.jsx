// import React from "react";
// import Part_3 from "../assets/3part.png";

// function Part3(){
//   return(
//    <div style={{display:"flex",flexDirection:"row",padding:"30px",fontFamily:"sans-serif"}}>
//       <img src={Part_3} alt="part3" />
//       <div style={{ display:"flex",flexDirection:"column", background:"#337481",color:"#ffffff",justifyContent:"center",textAlign: "center",padding:"32px 48px",gap:"10px"}}>
//         <div style={{fontSize:"50px",fontWeight:"bold"}}>"This is our Community.We're in it together."</div>
//         <div style={{fontSize:"30px"}}>-oliva,starbucks Partner(Employee)</div>
//         <div style={{fontSize:"30px"}}>Our partners uplift each other and their communities every day.</div>
//         <button style={{display: "inline-block",fontSize:"16px",fontWeight:"bold",background:"#337481",color:"#ffffff",borderRadius:"20px",borderColor:"#ffffff",
//         padding: "15px 30px",cursor:"pointer",margin:"10px 225px"}}>Learn more</button>
//       </div>
//   </div>
//   );
// }
// export default Part3;

import React from "react";
import Part_3 from "../assets/3part.png";

function Part3() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      padding: "30px",
      fontFamily: "sans-serif",
      flexWrap: "wrap", // Allow flex items to wrap to the next line
    }}>
      
      <img
        src={Part_3}
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
        background:" #006241",
        color:"#ffffff",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 48px",
        gap: "20px"
      }}>

        <div style={{ fontSize: "30px", fontWeight: "bold" }}>his is our Community.We're in it together.</div>
        <div style={{ fontSize: "22.5px" }}>
          <div style={{ marginBottom: "10px"}}>-oliva,starbucks Partner(Employee).</div>
          <div style={{ marginBottom: "40px" }}>Our partners uplift each other and their communities every day.</div>
          <button style={{
            display: "inline-block",
            fontSize: "16px",
            background:"#006241",
            color:"#ffffff",
            borderRadius: "20px",
            borderColor:"#ffffff",
            padding: "12px 25px",
            cursor: "pointer",
            paddingTop: "10px",
          }}>
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Part3;