// import React from "react";
// import Part_2 from "../assets/2part.png";

// function Part2(){
//   return(
//    <div style={{display:"flex",flexDirection:"row",padding:"30px",fontFamily:"sans-serif"}}>
//       <div style={{ display:"flex",flexDirection:"column", background:"#337481",color:"#ffffff",justifyContent:"center",textAlign: "center",padding:"32px 48px",gap:"10px"}}>
//         <div style={{fontSize:"50px",fontWeight:"bold"}}>Pistachi-Yum</div>
//         <div style={{fontSize:"30px"}}>Creamy, cozy vibes make the Pistachio Latte a must-have this season.</div>
//         <button style={{display: "inline-block",fontSize:"16px",fontWeight:"bold",background:"#337481",color:"#ffffff",borderRadius:"20px",borderColor:"#ffffff",
//         padding: "15px 30px",cursor:"pointer",margin:"10px 225px"}}>Order now</button>
//       </div>
//       <img src={Part_2} alt="part2" />
//   </div>
//   );
// }
// export default Part2;

// import React from "react";
// import Part_2 from "../assets/2part.png";

// function Part2() {
//   return (
//     <div style={{
//        display: "flex",
//       flexDirection: "row",
//       padding: "30px",
//       fontFamily: "sans-serif",
//       '@media (min-width: 600px)': {
//         flexWrap: "wrap"
//       }
//       // flexWrap: "wrap", // Allow flex items to wrap to the next line
//     }}>
      
//       <div style={{
//         display: "flex",
//         flexDirection: "column",
//         background:"#337481",
//         color:"#ffffff",
//         justifyContent: "center",
//         textAlign: "center",
//         padding: "32px 48px",
//         gap: "20px",
//         // minWidth: "300px", // Set a minimum width for the column layout
//        // Allow the column to grow to fill the available space
//       }}>

//         <div style={{ fontSize: "50px", fontWeight: "bold" }}>Pistachi-Yum</div>
//         <div style={{ fontSize: "20px" }}>
//           <div style={{ marginBottom: "20px" }}>Creamy, cozy vibes make the Pistachio Latte a must-have this season.</div>
//           <button style={{
//             display: "inline-block",
//             fontSize: "16px",
//             background:"#337481",
//             color:"#ffffff",
//             borderRadius:"20px",
//             borderColor:"#ffffff",
//             padding: "12px 25px",
//             cursor: "pointer",
//             paddingTop: "10px",
//           }}>
//             Order now
//           </button>
//         </div>
//       </div>
//       <img
//         src={Part_2}
//         alt="part2"
//         style={{
//           width:"50%",
//           '@media (max-width: 600px)': {
//             width: "50%",
//           }
//             // Make the image fill the container
//            // Add space between the image and the text
//         }}
//       />
//     </div>
//   );
// }

// export default Part2;

import React from "react";
import Part_2 from "../assets/2part.png";

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
        background:"#337481",
        color:"#ffffff",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 48px",
        gap: "20px",
      }}>

        <div style={{ fontSize: "50px", fontWeight: "bold" }}>Pistachi-Yum</div>
        <div style={{ fontSize: "20px" }}>
          <div style={{ marginBottom: "20px" }}>Creamy, cozy vibes make the Pistachio Latte a must-have this season.</div>
          <button style={{
            display: "inline-block",
            fontSize: "16px",
            background:"#337481",
            color:"#ffffff",
            borderRadius:"20px",
            borderColor:"#ffffff",
            padding: "12px 25px",
            cursor: "pointer",
            paddingTop: "10px",
          }}>
            Order now
          </button>
        </div>
      </div>
      <img
        src={Part_2}
        alt="part2"
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

