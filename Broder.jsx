import React, { Children } from "react";

const Border = ({Children}) => {
    return (
        <div style={{border:'2px solid black', backgroundColor:'blue', height:'150px', width:'120px'}}>{Children}</div>
    )
}

export default Border

