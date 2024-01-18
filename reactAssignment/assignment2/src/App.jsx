import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("White");

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: color, padding: "20px" }}>
      <div style={{ background: color, minHeight: "550px", padding: "20px" }}></div>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }}>
        <button onClick={() => setColor("red")} style={{ background: "red", color: "white", borderRadius: "30px", margin: "5px" }}>Red</button>
        <button onClick={() => setColor("Yellow")} style={{ background: "yellow", color: "", borderRadius: "30px", margin: "5px" }}>Yellow</button>
        <button onClick={() => setColor("Black")} style={{ background: "black", color: "white", borderRadius: "30px", margin: "5px" }}>Black</button>
        <button onClick={() => setColor("Purple")} style={{ background: "purple", color: "white", borderRadius: "30px", margin: "5px" }}>Purple</button>
        <button onClick={() => setColor("Green")} style={{ background: "green", color: "white", borderRadius: "30px", margin: "5px" }}>Green</button>
        <button onClick={() => setColor("Blue")} style={{ background: "blue", color: "white", borderRadius: "30px", margin: "5px" }}>Blue</button>
        <button onClick={() => setColor("White")} style={{ background: "orange", color: "", borderRadius: "30px", margin: "5px" }}>Default</button>
      </div>
    </div>
  );
}

export default App;
