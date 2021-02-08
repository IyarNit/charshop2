import React from 'react';
import sword from "../assests/sword.svg"


const SwordIcon = (props) => {
    ////////Hooks////////////


    ////////Functions////////////


    /////////Jsx///////////
    return (
        <img src={sword} alt="SwordIcon" height={props.height} width={props.width} onClick={props.click} style={{cursor:"pointer"}}/>

    )
}
export default SwordIcon 