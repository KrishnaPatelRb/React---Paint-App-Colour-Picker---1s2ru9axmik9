import React, { useState } from "react";
 
export default function Selection(props) {
    const [color,setColor]=useState({color:""})
    
    return (
        
        <div className="fix-box" style={color} onClick={()=>{
            
            props.applyColor(setColor)
        }}>
            <h2 style={{}} className="subeading">Selection</h2>
        </div>
    )
}
