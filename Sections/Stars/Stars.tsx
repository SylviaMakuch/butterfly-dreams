import React from "react";
import Star from "./Star";


const Stars = () => {
const n = 100;

    return (    
       <mesh>
       
{[...Array(n)].map((elementInArray, i) => ( 
    <Star key={i} />
    ))}
        </mesh>

    );
}

export default Stars;