import React from "react";
import "./block.css"


const Block = props =>{

    return (
        <div 
            className="block {props.className}" 
        >

            <h1 className="block-title">
            { props.title || "titre"} 
            <span> {props.titleColor}</span>
            <span>{props.leftTitle}</span>
            </h1>


            {props.children}
        </div>
    )
}


export default Block