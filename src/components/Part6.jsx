// import React from "react";
// import Part_6 from "../assets/6part.png";

// function Part6() {
//   return (
//     <div style={{ display: "flex", flexDirection: "row", padding: "30px", fontFamily: "sans-serif" }}>
//       <div style={{ display: "flex", flexDirection: "column", background: "#337481", color: "#ffffff", justifyContent: "center", textAlign: "center", padding: "32px 48px", gap: "10px" }}>
//         <div style={{ fontSize: "50px", fontWeight: "bold" }}>Pistachi-Yum</div>
//         <div style={{ fontSize: "30px" }}>Creamy, cozy vibes make the Pistachio Latte a must-have this season.</div>
//         <button style={{ display: "inline-block", fontSize: "16px", fontWeight: "bold", background: "#337481", color: "#ffffff", borderRadius: "20px", borderColor: "#ffffff", padding: "15px 30px", cursor: "pointer", margin: "10px 225px" }}>Order now</button>
//       </div>
//       <img src={Part_6} alt="part6"/>
//     </div>
//   );
// }

// export default Part6;


import React from "react";
import Part_6 from "../assets/6part.png";

function Part6() {
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
        background:"#d4e9e2",
        color:"#1e3932",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 48px",
        gap: "20px",
      }}>

        <div style={{ fontSize: "30px", fontWeight: "bold" }}>Send Starbucks Cards in Venmo</div>
        <div style={{ fontSize: "20px" }}>
          <div style={{ marginBottom: "20px",textAlign:"center" }}>Send a little treat to someone you care about and brighten their day.<br/> You can now send Starbucks eGifts directly through Venmo.**</div>
          <button style={{
            display: "inline-block",
            fontSize: "16px",
            background:"#d4e9e2",
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
        src={Part_6}
        alt="part6"
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

export default Part6;

