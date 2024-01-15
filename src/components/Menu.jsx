import React from "react";
import logo from "../assets/logo2.png";
import { FaLocationDot } from "react-icons/fa6";

function Menu(){
  return(
  <div>
    {/* final div */}
    <div style={{fontFamily:"sans-serif",display:"flex",flexDirection:"row",justifyContent:"space-between",background:"white",padding:"20px",textAlign:"center"}}>
        {/* div 1 */}
      <div style={{display:"flex",flexDirection:"row",gap:"20px",fontSize:"15px",fontWeight:"bold"}}>
        <img style={{height:"50px"}} src={logo} alt="Logo" />
        <div style={{paddingTop:"15px"}}>MENU</div>
        <div style={{paddingTop:"15px"}}>REWARD</div>
        <div style={{paddingTop:"15px"}}>GIFT CARDS</div>
      </div>
      <div style={{display:"flex",flexDirection:"row",fontSize:"15px",fontWeight:"bold"}}>
         <div style={{display:"flex",flexDirection:"row",padding:"20px",gap:"10px"}}><FaLocationDot />
           <div>Find a store</div>
           </div>
         {/* <button style={{borderRadius:"35%",padding:"5px 20px",fontSize:"18px"}}>Sign in</button>
         <button style={{background:"black",borderRadius:"35%",fontSize:"18px",fontWeight:"bold"}}>Join now</button> */}
         <button style={{ borderRadius: "15px", padding: "10px 20px", fontSize: "15px", background: "#fff", cursor: "pointer",margin:"10px" }}>
           Sign in
         </button>
         <button style={{ borderRadius: "8px", padding: "10px 20px", fontSize: "15px", background: "black", color: "#fff", cursor: "pointer",margin:"10px" }}>
           Join now
         </button>
      </div>
    </div>
    {/* end div 1 */}
  </div>
//   final div
  );
}
export default Menu;