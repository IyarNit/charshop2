import React, { useState, useRef } from 'react';
import { connect } from "react-redux"
import { Modal } from "../assests/componentImporter"
import { DieInterface, Die20Icon, SwordIcon } from "../assests/componentImporter"

const AttacksHolderComp = (props) => {
    ////////Hooks////////////
    // console.log("AttacksHolderComp", props)
    const [showModal, setShowModal] = useState(false)
    const [modalText, setModalText] = useState("")
    const [showHandsBtns, setShowHandsBtns] = useState(false)
    const [rollResult1, setRollResult1] = useState("")
    const [rollResult2, setRollResult2] = useState("")
    const [hitBtns, setHitBtns] = useState(false)
    const [showAdvDis, setShowAdvDis] = useState(true)
    const [showAtkBtn, setShowAtkBtn] = useState(true)
    const [addMoreDmg, setAddMoreDmg] = useState(false)
    const [showDieInterface, setShowDieInterface] = useState(false)
    const [noSelect, setNoSelect] = useState(false)

    const abilityMod = useRef({});

    ////////Functions////////////
    const weaponDeleter = (e) => {
        props.delete(e?.target?.name)
        // activates the delete function on the father component
    }
    const hideModal = async () => {
        await setShowModal(false)
        await setRollResult1("")
        await setRollResult2("")
        await setHitBtns(false)
        await setShowAdvDis(true)
        await setShowAtkBtn(true)
        await setAddMoreDmg(false)
        await setShowDieInterface(false)
        await setShowHandsBtns(false)
    }

    const attack = async (e) => {
        await setRollResult1("")
        await setRollResult2("")
        await setShowAdvDis(false)
        await setHitBtns(false)
        await setShowAtkBtn(false)
        let { rolls, dmgMax1, dmgMax2, min, versatile } = props.weapon
        // only works on battle axe
        console.log(rolls, dmgMax1, dmgMax2, min, versatile)
        if (versatile) {
            setShowHandsBtns(true)
            return
        }
        calculateRoll(dmgMax1, min, rolls)
        alert("in non versatile")
        await setAddMoreDmg(true)
    }

    const thrown = () => {
        if (props.weapon.name === "Net") {
            calculateRoll(1, 1, 1)
            return
        } else if (props.weapon.thrown) {
            let { rolls, dmgMax1, min } = props.weapon
            calculateRoll(dmgMax1, min, rolls)
        } else {
            calculateRoll(4, 1, 1)
        }
        // should we add dmage from ability modifier?
    }

    const calculateRoll = async (max, min, rolls) => {
        if (rolls === 1) {
            const result = Math.floor(Math.random() * max + min) + Number(abilityMod.current.value)
            await setShowHandsBtns(false)
            await setRollResult1(result)
            await setAddMoreDmg(true)
        } else {
            const result1 = Math.floor(Math.random() * max + min) + Number(abilityMod.current.value)
            const result2 = Math.floor(Math.random() * max + min) + Number(abilityMod.current.value)
            await setShowHandsBtns(false)
            await setRollResult1(result1)
            await setRollResult2(result2)
            await setAddMoreDmg(true)
        }

    }

    const calcAtkRoll = async (e) => {
        if (e.target.name === "Advantage/Disadvantage") {
            const dieResult1 = Math.floor(Math.random() * 20 + 1)
            const dieResult2 = Math.floor(Math.random() * 20 + 1)
            const modifiersAdditions = Number(props?.playerProficiency) + Number(abilityMod.current.value)
            await setHitBtns(true)
            await setShowAdvDis(false)
            await setRollResult1(dieResult1 + modifiersAdditions)
            await setRollResult2(dieResult2 + modifiersAdditions)
            return
        }
        await setRollResult2("")
        const dieResult = Math.floor(Math.random() * 20 + 1)
        const modifiersAdditions = Number(props?.playerProficiency) + Number(abilityMod.current.value)
        if (dieResult === 20) {
            // if crtitical myabe dmg roll auto? what if 2 hands?
            // redundant we can add cubes in the interface
        }
        await setHitBtns(true)
        await setRollResult1(dieResult + modifiersAdditions)
    }

    const dieInterface = async () => {
        await setRollResult1("")
        await setRollResult2("")
        await setHitBtns(false)
        await setShowAdvDis(false)
        await setShowAtkBtn(false)
        await setAddMoreDmg(false)
        await setShowDieInterface(true)
    }

    const somef = async (e, dieRef) => {
        let inputVal = dieRef.current.value
        let optionVal = e.target.value
        if (!optionVal) {
            return
        }
        let resultsArr = []
        for (let index = 0; index < optionVal; index++) {
            const result = await Math.floor(Math.random() * inputVal + 1)
            await resultsArr.push(result)

        }
        const final = resultsArr.reduce((a, b) => a + b)
        setRollResult1(final)
        setNoSelect(true)
    }

    /////////Jsx///////////
    return (
        // <label className="form-label">Name</label>
        //         <label className="form-label">Profeciency Bonus</label>
        //         <label className="form-label">dmg</label>
        //         <label className="form-label">Ability Modifier Bonus</label>
        //         <label className="form-label">Other Modifiers</label>
        //         <label className="form-label">dmgType</label>
        //         <label className="form-label">range</label>
        <div>
            <div className="row">
                <div className="col-3">
                    <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: "red" }}>Name:</span>
                        <input className="form-control" type="text" class="form-control" value={props?.weapon.name} disabled />
                    </div>
                </div>
                <div className="col-3">
                    <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: "red" }}>Profeciency Bonus</span>
                        <input className="form-control" type="text" class="form-control" value={props?.playerProficiency || null} disabled />
                    </div>
                </div>
                <div className="col-2">
                    <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: "red" }}>Dmg</span>
                        <input className="form-control" type="text" value={props.weapon.dmgDie} disabled />
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: "red" }}>Ability Modifier Bonus</span>
                        <input className="form-control" type="text" ref={abilityMod} />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: "red" }}>Other Modifiers</span>
                        <input className="form-control" type="text" />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: "red" }}>Dmg Type</span>
                        <input className="form-control" type="text" value={props.weapon.dmgType} disabled />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group">
                        <span className="input-group-text" style={{ backgroundColor: "red" }}>Range</span>
                        <input className="form-control" type="text" value={props.weapon.range} disabled />
                    </div>
                </div>

                {/* <input type="text" value={props.weapon.name} disabled />
            <input type="text" value={props?.playerProficiency || null} disabled /> */}
                {/* empty inputs is for empty fields the user will add or we will add later like profeicency bonus ability modifiers and stuff */}

                {/* <button type="button" onClick={() => { setShowModal(true) }} >Attack</button> */}
            </div>
            <SwordIcon click={() => { setShowModal(true) }} height="40" width="30" />
            <button type="button" name={props.weapon.name} className="btn btn-danger" onClick={(e) => { weaponDeleter(e) }}> Discard </button>
            {
                !showModal ? null :
                    <Modal show={showModal} hide={hideModal} btn={""} display={"none"}>
                        <p>Attack Window</p>
                        {!showAtkBtn ? null : <button type="button" onClick={calcAtkRoll}>Attack Roll</button>}
                        {!hitBtns ? null : <button type="button" onClick={attack}>Roll Damage</button>}
                        {!addMoreDmg ? null : <button type="button" onClick={dieInterface}>Roll Additional Dmg Die</button>}
                        {!showDieInterface ? null : <DieInterface func={somef} sel={noSelect} />}
                        {!showAdvDis ? null : <button type="button" name="Advantage/Disadvantage" onClick={(e) => calcAtkRoll(e)}>Advantage/Disadvantage</button>}
                        {!showHandsBtns ? null : <>
                            <button type="button" onClick={() => { calculateRoll(props.weapon.dmgMax1, props.weapon.min, props.weapon.rolls) }}>1 hand</button>
                            <button type="button" onClick={() => { calculateRoll(props.weapon.dmgMax2, props.weapon.min, props.weapon.rolls) }}>2 hand</button>
                        </>}
                        {!rollResult1 ? null : <h3>Your roll result is:{rollResult1}</h3>}
                        {!rollResult2 ? null : <h3>Your roll result is:{rollResult2}</h3>}
                        {!hitBtns ? null : <button type="button" onClick={thrown}>Throw Weapon Damage Roll</button>}
                        <button type="button" onClick={hideModal}>Cancel</button>
                    </Modal >

            }
        </div >

    )
}

const mapStateToProps = (state) => {
    return {
        playerProficiency: state.playerProficiency
    }
}
export default connect(mapStateToProps)(AttacksHolderComp)