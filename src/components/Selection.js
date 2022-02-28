import React, { useState } from "react";
 
export default function Selection(props) {
    const [background,setBackground]=useState({background:""})
    
    return (
        
        <div className="fix-box" style={background} onClick={()=>{
            
            props.applyColor(setBackground)
        }}>
            <h2 className="subeading">Selection</h2>
        </div>
    )
}
