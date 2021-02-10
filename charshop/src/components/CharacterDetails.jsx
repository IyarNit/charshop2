import React, { useRef } from 'react';


const CharacterDetails = () => {
    ////////Hooks////////////
    const playerName = useRef("")
    const playerClass = useRef("")
    const playerLevel = useRef("")
    const race = useRef("")
    const background = useRef("")
    const characterName = useRef("")
    const alignment = useRef("")
    const experiencePoints = useRef("")

    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div className="w-75 mx-auto mb-5">
            <div className='row centerText'>
                <div className='col'>
                    <label for='charNameBox' className='form-label'>Character Name</label>
                    <input type="text" ref={characterName} id='charNameBox' className='form-control' />
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
                        <input type="text" ref={background} id='backgroundBox' className='form-control' />
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
export default CharacterDetails 