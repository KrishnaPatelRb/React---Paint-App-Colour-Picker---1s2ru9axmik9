import React, { useState } from "react";
 
export default function Selection(props) {
    const [color,setColor]=useState("red")
    return (
        <div className="fix-box" style={{background:props.applyColor}} onClick={()=>{
    
        }}>
            <h2 style={{}} className="subeading">Selection</h2>
        </div>
    )
}
