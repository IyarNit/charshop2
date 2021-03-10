import React, { useRef, useEffect } from 'react';
import { connect } from "react-redux"
import { addPlayerStrMod, addPlayerDexMod, addPlayerConMod, addPlayerIntMod, addPlayerWisMod, addPlayerChaMod, setCharacter, clearCharacter } from "../store/actions/actionsConfig"
import { getAbilityComps, updateAbilityComps } from "../axiosCalls/axioscalls"
import { withRouter } from "react-router-dom"

const AbilityComp = (props) => {
    ////////Hooks////////////
    console.log("ability comp props", props)
    const strenght = useRef({});
    const strenghtMod = useRef({});
    const dexterity = useRef({});
    const dexterityMod = useRef({});
    const constitution = useRef({});
    const constitutionMod = useRef({});
    const intelligence = useRef({});
    const intelligenceMod = useRef({});
    const wisdom = useRef({});
    const wisdomMod = useRef({});
    const charisma = useRef({});
    const charismaMod = useRef({});


    useEffect(async () => {
        if (!props.currentCharacter) {
            props.history.push("/Characters")
            return
        }
        const result = await getAbilityComps(props?.currentUser?.userName, props?.currentCharacter?._id, props?.currentCharacter?.name)
        // console.log(result)
        // return

        if (!result) {
            return
        }
        console.log(result.data[0].abilities)
        // return
        strenght.current.value = await result.data[0].abilities.strenghtAbility
        strenghtMod.current.value = await result.data[0].abilities.strenghtMod
        dexterity.current.value = await result.data[0].abilities.dexterityAbility
        dexterityMod.current.value = await result.data[0].abilities.dexterityMod
        constitution.current.value = await result.data[0].abilities.constitutionAbility
        constitutionMod.current.value = await result.data[0].abilities.constitutionMod
        intelligence.current.value = await result.data[0].abilities.intelligenceAbility
        intelligenceMod.current.value = await result.data[0].abilities.intelligencetMod
        wisdom.current.value = await result.data[0].abilities.wisdomAbility
        wisdomMod.current.value = await result.data[0].abilities.wisdomMod
        charisma.current.value = await result.data[0].abilities.charismaAbility
        charismaMod.current.value = await result.data[0].abilities.charismaMod
    }, []);
    ////////Functions////////////

    const checker = async (target, targetFather, targetProp, targetDispatch) => {
        // console.log(target, targetFather)
        // onBlur
        // can delete target prop ?
        if (targetFather.current.value > 30) {
            targetFather.current.value = 30;
            await databaseUpdater()
        } else if (targetFather.current.value < 1 && targetFather.current.value != "") {
            targetFather.current.value = 1;
            await databaseUpdater()
        } else if (targetFather.current.value === "") {
            target.current.value = "";
            await databaseUpdater()
            return
        }
        target.current.value = Math.floor((targetFather.current.value - 10) / 2)
        await databaseUpdater()
        props.dispatch(targetDispatch(target?.current?.value))
        // console.log(targetDispatch)
    }
    const calcMod = (target, targetFather) => {
        // onChange
        target.current.value = Math.floor((targetFather.current.value - 10) / 2)
    }

    const databaseUpdater = async () => {
        const allAbilitys = {
            strenghtAbility: strenght.current.value, strenghtMod: strenghtMod.current.value,
            dexterityAbility: dexterity.current.value, dexterityMod: dexterityMod.current.value,
            constitutionAbility: constitution.current.value, constitutionMod: constitutionMod.current.value,
            intelligenceAbility: intelligence.current.value, intelligencetMod: intelligenceMod.current.value,
            wisdomAbility: wisdom.current.value, wisdomMod: wisdomMod.current.value,
            charismaAbility: charisma.current.value, charismaMod: charismaMod.current.value,
        }
        // return
        const reuslt = await updateAbilityComps(props?.currentUser?.userName, props?.currentCharacter?._id, props?.currentCharacter?.name, allAbilitys)
    }
    /////////Jsx///////////
    return (
        <div>
            <label>Strength</label>
            <input type="number" name="strenght" onBlur={() => checker(strenghtMod, strenght, props.playerStrenghtMod, addPlayerStrMod)} onChange={() => calcMod(strenghtMod, strenght)} ref={strenght} />
            <input type="number" ref={strenghtMod} disabled />
            <label>Dexterity</label>
            <input type="number" name="dexterity" onBlur={() => { checker(dexterityMod, dexterity, props.playerDextirityMod, addPlayerDexMod) }} onChange={() => calcMod(dexterityMod, dexterity)} ref={dexterity} />
            <input type="number" ref={dexterityMod} disabled />
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
        currentUser: state.currentUser,
        isAdmin: state.isAdmin,
        currentCharacter: state.currentCharacter,
    }
}
export default withRouter(connect(mapStateToProps)(AbilityComp))