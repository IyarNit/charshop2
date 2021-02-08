import React, { useRef } from 'react';


const Languages = () => {
    ////////Hooks////////////
    const txtAreaRef = useRef("")

    ////////Functions////////////

    /////////Jsx///////////
    return (
        <div>
            <textarea style={{ resize: "none" }} ref={txtAreaRef} />
            <footer>Other Profieciencies & Languages</footer>
            <hr/>
        </div>
    )
}
export default Languages 