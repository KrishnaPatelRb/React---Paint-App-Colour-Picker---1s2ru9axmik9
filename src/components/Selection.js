import React, { useState } from "react";
 
export default function Selection(props) {
    const [color,setColor]=useState({background:""})
    
    return (
        
        <div className="fix-box" style={color} onClick={()=>{
            setColor(props.a)
        }}>
            <h2 style={{}} className="subeading">Selection</h2>
        </div>
    )
}
