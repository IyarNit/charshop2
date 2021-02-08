import React, { useRef } from 'react';

const FeaturesTraits = () => {
    ////////Hooks////////////

    const mainRef = useRef("")


    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div>
            <textarea style={{ resize: "none" }} ref={mainRef} />
            <label>Features & Traits</label>
            <hr />
        </div>
    )
}
export default FeaturesTraits 