import React, { useRef, useEffect } from 'react';
import { updateCharacterDetails, getCharacterDetails } from "../axiosCalls/axioscalls"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
const CharacterDetails = (props) => {
    ////////Hooks////////////
    console.log(props)
    const characterName = useRef("")
    const playerClass = useRef("")
    const race = useRef("")
    const playerLevel = useRef("")
    const background = useRef("")
    const alignment = useRef("")
    const experiencePoints = useRef("")

    useEffect(async () => {
        if (props?.currentCharacter) {
            characterName.current.value = props?.currentCharacter?.name
            playerClass.current.value = props?.currentCharacter?.profession
            race.current.value = props?.currentCharacter?.race
            playerLevel.current.value = props?.currentCharacter?.level



            console.log("some axios will og here")
        } else {
            // on refresh props will not have the character so it either redirect to character list and then they choose or we need to improve our refresh function in app.jsx
            props.history.push("/characters")
        }
    }, []);

    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div className="w-75 mx-auto mb-5">
            <div className='row centerText'>
                <div className='col'>
                    <label for='charNameBox' className='form-label'>Character Name</label>
                    <input type="text" ref={characterName} id='charNameBox' className='form-control' name="charName" onBlur={(e) => { updateCharacterDetails(props.currentUser.userName, props.currentCharacter.name, characterName.current.value, e?.target?.name) }} />
                </div>
                <div className='col'>
                    <label for='classBox' className='form-label'>Class</label>
                    <input type="text" ref={playerClass} id='classBox' className='form-control' />
                </div>
                <div className='col'>
                    <label for='levelBox' className='form-label'>Level</label>
                    <input type="text" ref={playerLevel} id='levelBox' className='form-control' />
                </div>
                <div className='col'>
                    <label for='raceBox' className='form-label'>Race</label>
                    <input type="text" ref={race} id='raceBox' className='form-control' />
                </div>
            </div >
            <div className="row centertext">
                <div className='col'>
                    <label for='backgroundBox' className='form-label'>Background</label>
                    <input type="text" ref={background} id='backgroundBox' className='form-control' name="background" onBlur={(e) => { updateCharacterDetails(props.currentUser.userName, props.currentCharacter.name, background.current.value, e?.target?.name) }} />
                </div>
                <div className='col'>
                    <label for='AlignmentBox' className='form-label'>Alignment</label>
                    <input type="text" ref={alignment} id='AlignmentBox' className='form-control' />
                </div>
                <div className='col-2'>
                    <label for='xpBox' className='form-label'>Experience Points</label>
                    <input type="text" ref={experiencePoints} id='xpBox' className='form-control' />
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