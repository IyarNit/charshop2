import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { Modal,Icons } from "../assests/componentImporter"
import die20 from "../assests/die20.svg"
const SavingThrows = (props) => {
    ////////Hooks////////////
    const strenghtRef = useRef("")
    const strenghtRefCheck = useRef("")
    const dextirityRef = useRef("")
    const dexterityRefCheck = useRef("")
    const constitutionRef = useRef("")
    const constitutionRefCheck = useRef("")
    const intelligenceRef = useRef("")
    const intelligenceRefCheck = useRef("")
    const wisdomRef = useRef("")
    const wisdomRefCheck = useRef("")
    const charismaRef = useRef("")
    const charismaRefCheck = useRef("")

    const [profFlag1, setProfFlag1] = useState(false)
    const [profFlag2, setProfFlag2] = useState(false)
    const [profFlag3, setProfFlag3] = useState(false)
    const [profFlag4, setProfFlag4] = useState(false)
    const [profFlag5, setProfFlag5] = useState(false)
    const [profFlag6, setProfFlag6] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [rollResult1, setRollResult1] = useState("")
    const [rollResult2, setRollResult2] = useState("")

    // useEffect(() => {
    // }, []);

    ////////Functions////////////
    const decider = async (targetFather, targetSon, targetProp, targetFlagFunc) => {
        if (!props?.playerProficiency || !targetProp) {
            alert("Please fill ability points and proficeincy to continue")
            targetFather.target.checked = false
            return
        }
        if (targetFather.target.checked) {
            targetSon.current.value = props.playerProficiency + targetProp
            targetFlagFunc(true)
        }
        if (!targetFather.target.checked) {
            targetSon.current.value = targetProp
            targetFlagFunc(false)
        }
    }
    const hideModal = async () => {
        await setShowModal(false)
        await setRollResult1("")
        await setRollResult2("")
    }

    const calculateRoll = async (abilityRef, e, targetProp) => {
        if (!props?.playerProficiency || !targetProp) {
            alert("Please fill ability points and proficeincy to continue")
            return
        }
        setShowModal(true)
        console.log(e.target.name)
        if (e?.target?.name === "advantage") {
            const result1 = Math.floor(Math.random() * 20 + 1)
            const result2 = Math.floor(Math.random() * 20 + 1)
            await setRollResult1(result1 + Number(abilityRef.current.value))
            await setRollResult2(result2 + Number(abilityRef.current.value))
            return
        }
        const result1 = Math.floor(Math.random() * 20 + 1)
        await setRollResult1(result1 + Number(abilityRef.current.value))
    }

    /////////Jsx///////////
    return (
        <div>
            <div className="row">
                <div className="col-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" ref={strenghtRefCheck} onChange={(e) => { decider(e, strenghtRef, props.playerStrenghtMod, setProfFlag1) }} /><input type="number" ref={strenghtRef} value={profFlag1 ? props.playerStrenghtMod + props.playerProficiency : props.playerStrenghtMod} disabled />
                        <label className="form-check-label">
                            Strength
                    </label>
                    </div>
                </div>
                <div className="col">
                    <Icons src={die20} alt="dieIcon" click={(e) => { calculateRoll(strenghtRef, e, props.playerStrenghtMod) }} height="40" width="30" />
                    <button type="button" name="advantage" className="btn btn-danger" onClick={(e) => { calculateRoll(strenghtRef, e, props.playerStrenghtMod) }} style={{ marginLeft: "20px" }}>X2</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" ref={dexterityRefCheck} onChange={(e) => { decider(e, dextirityRef, props.playerDextirityMod, setProfFlag2) }} /><input type="number" ref={dextirityRef} value={profFlag2 ? props.playerDextirityMod + props.playerProficiency : props.playerDextirityMod} disabled />
                        <label className="form-check-label">
                            Dextirity
                    </label>
                    </div>
                </div>

                <div className="col">
                    <Icons src={die20} alt="dieIcon" click={(e) => { calculateRoll(dextirityRef, e, props.playerDextirityMod) }} height="40" width="30" />
                    <button type="button" name="advantage" className="btn btn-danger" onClick={(e) => { calculateRoll(dextirityRef, e, props.playerDextirityMod) }} style={{ marginLeft: "20px" }}>X2</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" ref={constitutionRefCheck} onChange={(e) => { decider(e, constitutionRef, props.playerConstitutionMod, setProfFlag3) }} /><input type="number" ref={constitutionRef} value={profFlag3 ? props.playerConstitutionMod + props.playerProficiency : props.playerConstitutionMod} disabled />
                        <label className="form-check-label">
                            Constitution
                    </label>
                    </div>
                </div>
                <div className="col">
                    <Icons src={die20} alt="dieIcon" click={(e) => { calculateRoll(constitutionRef, e, props.playerConstitutionMod) }} height="40" width="30" />
                    <button type="button" name="advantage" className="btn btn-danger" onClick={(e) => { calculateRoll(constitutionRef, e, props.playerConstitutionMod) }} style={{ marginLeft: "20px" }}>X2</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" ref={intelligenceRefCheck} onChange={(e) => { decider(e, intelligenceRef, props.playerIntelligenceMod, setProfFlag4) }} /><input type="number" ref={intelligenceRef} value={profFlag4 ? props.playerIntelligenceMod + props.playerProficiency : props.playerIntelligenceMod} disabled />
                        <label className="form-check-label">
                            Intelligence
                    </label>
                    </div>
                </div>
                <div className="col">
                    <Icons src={die20} alt="dieIcon" click={(e) => { calculateRoll(intelligenceRef, e, props.playerIntelligenceMod) }} height="40" width="30" />
                    <button type="button" name="advantage" className="btn btn-danger" onClick={(e) => { calculateRoll(intelligenceRef, e, props.playerIntelligenceMod) }} style={{ marginLeft: "20px" }}>X2</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" ref={wisdomRefCheck} onChange={(e) => { decider(e, wisdomRef, props.playerWisdomMod, setProfFlag5) }} /><input type="number" ref={wisdomRef} value={profFlag5 ? props.playerWisdomMod + props.playerProficiency : props.playerWisdomMod} disabled />
                        <label className="form-check-label">
                            Wisdom
                    </label>
                    </div>
                </div>

                <div className="col">
                    <Icons src={die20} alt="dieIcon" click={(e) => { calculateRoll(wisdomRef, e, props.playerWisdomMod) }} height="40" width="30" />
                    <button type="button" name="advantage" className="btn btn-danger" onClick={(e) => { calculateRoll(wisdomRef, e, props.playerWisdomMod) }} style={{ marginLeft: "20px" }}>X2</button>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" ref={charismaRefCheck} onChange={(e) => { decider(e, charismaRef, props.playerCharismaMod, setProfFlag6) }} /><input type="number" ref={charismaRef} value={profFlag6 ? props.playerCharismaMod + props.playerProficiency : props.playerCharismaMod} disabled />
                        <label className="form-check-label">
                            Charisma
                    </label>
                    </div>
                </div>
                <div className="col">
                    <Icons src={die20} alt="dieIcon" click={(e) => { calculateRoll(charismaRef, e, props.playerCharismaMod) }} height="40" width="30" />
                    <button type="button" name="advantage" className="btn btn-danger" onClick={(e) => { calculateRoll(charismaRef, e, props.playerCharismaMod) }} style={{ marginLeft: "20px" }}>X2</button>
                </div>
                <h5>Saving Throws</h5>
                <hr />
                {
                    !showModal ? null :
                        <Modal show={showModal} hide={hideModal} btn={""} display={"none"}>
                            <p>Save Window</p>
                            {!rollResult1 ? null : <h3>Your roll result is:{rollResult1}</h3>}
                            {!rollResult2 ? null : <h3>Your roll result is:{rollResult2}</h3>}
                            <button type="button" onClick={hideModal}>Cancel</button>
                        </Modal >
                }

            </div >

        </div >
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
export default connect(mapStateToProps)(SavingThrows)