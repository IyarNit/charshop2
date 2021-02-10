import React from 'react';
import die20 from "../assests/die20.svg"
import sword from "../assests/sword.svg"

const Die20Icon = (props) => {
    ////////Hooks////////////


    ////////Functions////////////


    /////////Jsx///////////
    return (
        <img src={props.src} alt={props.alt} height={props.height} width={props.width} onClick={props.click} style={{cursor:"pointer"}}/>

    )
}
export default Die20Icon 