import React from "react";

const itemListContainer = ({greeting}) =>
{
    return (
        <div style={{textAlign:"center", fontSize:"50px", fontFamily: "fantasy"}}>
            <h1>{greeting.toUpperCase() }</h1>
        </div>
    );
}

export default itemListContainer;