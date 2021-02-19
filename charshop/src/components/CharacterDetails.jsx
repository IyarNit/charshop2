import React, { useRef, useEffect, useState } from 'react';
import { updateCharacterDetails, getCharacterDetails, getCharacter } from "../axiosCalls/axioscalls"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
const CharacterDetails = (props) => {
    ////////Hooks////////////
    console.log("CharacterDetails", props)
    const characterName = useRef("")
    const playerClass = useRef("")
    const race = useRef("")
    const playerLevel = useRef("")
    const background = useRef("")
    const alignment = useRef("")
    const experiencePoints = useRef("")

    const [character, setCharacter] = useState([])

    useEffect(async () => {
        await init()
    }, []);
    // init bug if value changes and u nove a page an error occures
    ////////Functions////////////
    const init = async () => {
        const result = await getCharacter(props?.currentUser?.userName, props?.currentCharacter?.name)
        // console.log(result?.data?.character[0])
        character.splice(0, character.length)
        character.push(result?.data?.character[0])
        // console.log(character[0])
        const char = character[0]
        // console.log(char)
        characterName.current.value = char.name || ""
        playerClass.current.value = char.profession || ""
        playerLevel.current.value = char.level || ""
        race.current.value = char.race || ""
        background.current.value = char.background || ""
        alignment.current.value = char.alignment || ""
        experiencePoints.current.value = char.xp || ""
    }
    const updater = async (userNameFromProp, characterName, newValue, e) => {
        // console.log(userNameFromProp, characterName, newValue, e)
        const result = await updateCharacterDetails(userNameFromProp, characterName, newValue, e)
        if (result?.data?.message === "update succesful") {
            // setTimeout(function () { init(); }, 1500);
            init()
        }
    }
    /////////Jsx///////////
    return (
        <div className="w-75 mx-auto mb-5">
            <div className='row centerText'>
                <div className='col'>
                    <label for='charNameBox' className='form-label'>Character Name</label>
                    <input type="text" ref={characterName} id='charNameBox' className='form-control' name="name" onBlur={(e) => { updater(props.currentUser.userName, character[0].name, characterName.current.value, e?.target?.name) }} />
                </div>
                <div className='col'>
                    <label for='classBox' className='form-label'>Class</label>
                    <input type="text" ref={playerClass} id='classBox' className='form-control' name="class" onBlur={(e) => { updater(props.currentUser.userName, character[0].name, playerClass.current.value, e?.target?.name) }} />
                </div>
                <div className='col'>
                    <label for='levelBox' className='form-label'>Level</label>
                    <input type="text" ref={playerLevel} id='levelBox' className='form-control' name="level" onBlur={(e) => { updater(props.currentUser.userName, character[0].name, playerLevel.current.value, e?.target?.name) }} />
                </div>
                <div className='col'>
                    <label for='raceBox' className='form-label'>Race</label>
                    <input type="text" ref={race} id='raceBox' className='form-control' name="race" onBlur={(e) => { updater(props.currentUser.userName, character[0].name, race.current.value, e?.target?.name) }} />
                </div>
            </div >
            <div className="row centertext">
                <div className='col'>
                    <label for='backgroundBox' className='form-label'>Background</label>
                    <input type="text" ref={background} id='backgroundBox' className='form-control' name="background" onBlur={(e) => { updater(props.currentUser.userName, character[0].name, background.current.value, e?.target?.name) }} />
                </div>
                <div className='col'>
                    <label for='AlignmentBox' className='form-label'>Alignment</label>
                    <input type="text" ref={alignment} id='AlignmentBox' className='form-control' name="alignment" onBlur={(e) => { updater(props.currentUser.userName, character[0].name, alignment.current.value, e?.target?.name) }} />
                </div>
                <div className='col-2'>
                    <label for='xpBox' className='form-label'>Experience Points</label>
                    <input type="text" ref={experiencePoints} id='xpBox' className='form-control' name="xp" onBlur={(e) => { updater(props.currentUser.userName, character[0].name, experiencePoints.current.value, e?.target?.name) }} />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        isAdmin: state.isAdmin,
        currentCharacter: state.currentCharacter,
    }
}
export default withRouter(connect(mapStateToProps)(CharacterDetails))