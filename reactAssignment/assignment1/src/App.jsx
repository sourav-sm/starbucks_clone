// import { useState } from 'react'
// import image from "./assets/pic.png"
// import './App.css'

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//       <div style={{display:"flex",flexDirection:"column",textAlign:"center",alignItems:"center",padding:"50px"}}>
//         <div style={{background:"#1EF7B7",maxHeight:"150px"}}>
//         <img  style={{borderRadius:"50%" ,height:"150px",padding:"50px"}} src={image} alt="image" />
//         </div>
//         {/* <div style={{ }}>
          
//         </div> */}
//         <div style={{background:"#ffffff",paddingTop:"30px",paddingBottom:"30px"}}>
//            <div>Sourav 32</div>
//            <div>India</div>
//         </div>
//         <div style={{background:"#ffffff",display:"flex",flexDirection:"row",justifyContent:"space-between",gap:"20px"}}>
//           <div>80k <br /> Followers</div>
//           <div>803k <br /> Likes</div>
//           <div>1.4k <br /> Photos</div>
//         </div>
//       </div>
//   )
// }

// export default App


import { useState } from 'react';
import image from "./assets/pic.png";
import './App.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center", alignItems: "center", padding: "50px", background: "#1EF7B7", color:"#0B3266",borderRadius: "10px", maxWidth: "300px", margin: "auto" }}>
      <div style={{ background: "#1EF7B7", borderRadius: "50%", overflow: "hidden", width: "150px", height: "150px", margin: "0 auto", border: "5px solid #fff" }}>
        <img style={{ borderRadius: "50%", width: "100%", height: "100%" }} src={image} alt="image" />
      </div>
      <div style={{ background: "#ffffff", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <div style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>Sourav 32</div>
        <div style={{ color: "#555" }}>India</div>
      </div>
      <div style={{ background: "#000", height: "2px", width: "100%", marginTop: "20px" }}></div>
      <div style={{ background: "#ffffff", display: "flex", flexDirection: "row", justifyContent: "space-between", gap: "50px", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
        <div>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>80k</div>
          <div>Followers</div>
        </div>
        <div>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>803k</div>
          <div>Likes</div>
        </div>
        <div>
          <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>1.4k</div>
          <div>Photos</div>
        </div>
      </div>
    </div>
  );
}

export default App;

