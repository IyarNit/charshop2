import React, { useRef } from 'react';
import { connect } from "react-redux"
import { addPlayerStrMod, addPlayerDexMod, addPlayerConMod, addPlayerIntMod, addPlayerWisMod, addPlayerChaMod } from "../store/actions/actionsConfig"

const AbilityComp = (props) => {
    ////////Hooks////////////
    const strenght = useRef({});
    const strenghtMod = useRef({});
    const dextirity = useRef({});
    const dextirityMod = useRef({});
    const constitution = useRef({});
    const constitutionMod = useRef({});
    const intelligence = useRef({});
    const intelligenceMod = useRef({});
    const wisdom = useRef({});
    const wisdomMod = useRef({});
    const charisma = useRef({});
    const charismaMod = useRef({});
    ////////Functions////////////

    const checker = (target, targetFather, targetProp, targetDispatch) => {
        // console.log(target, targetFather)
        if (targetFather.current.value > 30) {
            targetFather.current.value = 30;
        } else if (targetFather.current.value < 1 && targetFather.current.value != "") {
            targetFather.current.value = 1;
        } else if (targetFather.current.value === "") {
            target.current.value = "";
            return
        }
        target.current.value = Math.floor((targetFather.current.value - 10) / 2)
        props.dispatch(targetDispatch(target.current.value))
        // console.log(targetDispatch)
    }
    const calcMod = (target, targetFather) => {

        target.current.value = Math.floor((targetFather.current.value - 10) / 2)
    }
    /////////Jsx///////////
    return (
        <div>
            <label>Strength</label>
            <input type="number" name="strenght" onBlur={() => checker(strenghtMod, strenght, props.playerStrenghtMod, addPlayerStrMod)} onChange={() => calcMod(strenghtMod, strenght)} ref={strenght} />
            <input type="number" ref={strenghtMod} disabled />
            <label>Dextirity</label>
            <input type="number" name="dextirity" onBlur={() => { checker(dextirityMod, dextirity, props.playerDextirityMod, addPlayerDexMod) }} onChange={() => calcMod(dextirityMod, dextirity)} ref={dextirity} />
            <input type="number" ref={dextirityMod} disabled />
            <label>Constitution</label>
            <input type="number" name="constitution" onBlur={() => checker(constitutionMod, constitution, props.playerConstitutionMod, addPlayerConMod)} onChange={() => calcMod(constitutionMod, constitution)} ref={constitution} />
            <input type="number" ref={constitutionMod} disabled />
            <label>Intelligence</label>
            <input type="number" name="intelligence" onBlur={() => checker(intelligenceMod, intelligence, props.playerIntelligenceMod, addPlayerIntMod)} onChange={() => calcMod(intelligenceMod, intelligence)} ref={intelligence} />
            <input type="number" ref={intelligenceMod} disabled />
            <label>Wisdom</label>
            <input type="number" name="wisdom" onBlur={() => checker(wisdomMod, wisdom, props.playerWisdomMod, addPlayerWisMod)} onChange={() => calcMod(wisdomMod, wisdom)} ref={wisdom} />
            <input type="number" ref={wisdomMod} disabled />
            <label>Charisma</label>
            <input type="number" name="charisma" onBlur={() => checker(charismaMod, charisma, props.playerCharismaMod, addPlayerChaMod)} onChange={() => calcMod(charismaMod, charisma)} ref={charisma} />
            <input type="number" ref={charismaMod} disabled />
            <hr />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        playerProficiency: state.playerProficiency,
        playerStrenghtMod: state.playerStrenghtMod,
        playerDextirityMod: state.playerDextirityMod,
        playerConstitutionMod: state.playerConstitutionMod,
        playerIntelligenceMod: state.playerIntelligenceMod,
        playerWisdomMod: state.playerWisdomMod,
        playerCharismaMod: state.playerCharismaMod,
    }
}
export default connect(mapStateToProps)(AbilityComp)