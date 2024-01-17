import React from "react";
import Part_1 from "../assets/1part.png";

function Part2() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      padding: "30px",
      fontFamily: "sans-serif",
      flexWrap: "wrap", // Allow flex items to wrap to the next line
    }}>
      
      <img
        src={Part_1}
        alt="part2"
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
        background: "#bbf2d1",
        color: "#1e3932",
        justifyContent: "center",
        textAlign: "center",
        padding: "32px 48px",
        gap: "20px"
      }}>

        <div style={{ fontSize: "50px", fontWeight: "bold" }}>New Year, New Yays</div>
        <div style={{ fontSize: "20px" }}>
          <div style={{ marginBottom: "20px" }}>Jump-start your year with a week full of offers in the Starbucks app.*</div>
          <button style={{
            display: "inline-block",
            fontSize: "16px",
            background: "#bbf2d1",
            color: "#1e3932",
            borderRadius: "20px",
            padding: "12px 25px",
            cursor: "pointer",
            paddingTop: "10px",
          }}>
            Open the app
          </button>
        </div>
      </div>
    </div>
  );
}

export default Part2;
