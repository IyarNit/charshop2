import React, { useRef } from 'react';
import { DeathRolls } from "../assests/componentImporter"

const Health = () => {
    ////////Hooks////////////
    const maxHp = useRef("")
    const currentHp = useRef("")
    const tempHp = useRef("")
    const totalHitDie = useRef("")
    const hitDieNumber = useRef("")



    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div>
            <label> Max HP </label>
            <input type="number" ref={maxHp} />
            <label> Current HP </label>
            <textarea style={{ resize: "none" }} ref={currentHp} />
            <label> Temporary HP </label>
            <textarea style={{ resize: "none" }} ref={tempHp} />
            <p>Total:<input type="number" ref={totalHitDie} /></p>
            <textarea style={{ resize: "none" }} ref={hitDieNumber} />
            <footer>Hit Dice</footer>
            <DeathRolls />
            <hr />
        </div>
    )
}
export default Health 