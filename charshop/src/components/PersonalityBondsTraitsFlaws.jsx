import React, { useRef } from 'react';

const PersonalityBondsTraitsFlaws = () => {
    ////////Hooks////////////

    const personalityTraitsRef = useRef("")
    const idealsRef = useRef("")
    const bondsRef = useRef("")
    const flawsRef = useRef("")

    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div>
            <textarea style={{ resize: "none" }} ref={personalityTraitsRef} />
            <label>Personality & Traits</label>

            <textarea style={{ resize: "none" }} ref={idealsRef} />
            <label>Ideals</label>

            <textarea style={{ resize: "none" }} ref={bondsRef} />
            <label>Bonds</label>

            <textarea style={{ resize: "none" }} ref={flawsRef} />
            <label>Flaws</label>
            <hr />

        </div>
    )
}
export default PersonalityBondsTraitsFlaws 