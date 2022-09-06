import React from "react";
import './App.css';

export default function Square({val, pilihsquare}){
    return(
        <div className="square" onClick={pilihsquare}>
            {val}
        </div>
    )
}