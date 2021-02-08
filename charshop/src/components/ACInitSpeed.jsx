import React, { useRef } from 'react';
import { Initiative } from "../assests/componentImporter"


const ACInitSpeed = () => {
    ////////Hooks////////////
    const playerSpeed = useRef("")
    const ac = useRef("")


    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div>
            <label>Speed</label>
            <input type="number" ref={playerSpeed} />
            <Initiative />
            <input type="number" ref={ac} />
            <label>Armor Class</label>
            <hr/>

        </div>
    )
}
export default ACInitSpeed 