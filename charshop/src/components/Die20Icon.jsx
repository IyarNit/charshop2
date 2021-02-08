import React from 'react';
import die from "../assests/die20.svg"


const Die20Icon = (props) => {
    ////////Hooks////////////


    ////////Functions////////////


    /////////Jsx///////////
    return (
        <img src={die} alt="die20Icon" height={props.height} width={props.width} onClick={props.click} style={{cursor:"pointer"}}/>

    )
}
export default Die20Icon 