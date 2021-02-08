import React, { useRef } from 'react';


const PassiveWisdom = () => {
    ////////Hooks////////////
    const passiveWisdomRef = useRef("")

    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div>
            <label>Passive Wisdom</label>
            <input type="text" ref={passiveWisdomRef} />
            <hr/>
        </div>
    )
}
export default PassiveWisdom