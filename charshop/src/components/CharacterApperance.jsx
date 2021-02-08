import React, { useRef } from 'react';


const CharacterApperance = () => {
    ////////Hooks////////////

    const characterName = useRef("")
    const age = useRef("")
    const height = useRef("")
    const weight = useRef("")
    const eyes = useRef("")
    const skin = useRef("")
    const hair = useRef("")
    ////////Functions////////////


    /////////Jsx///////////
    return (
        <div className='row'>
            <div className='mb-2 col'>
                <label htmlFor="" className='form-label'>Character Name</label>
                <input type="text" ref={characterName} className='form-control' />
            </div>
            <div className='mb-2 col'>
                <label htmlFor="" className='form-label'>Age</label>
                <input type="text" ref={age} className='form-control' />
            </div>
            <div className='mb-2 col'>
                <label htmlFor="" className='form-label'>Height</label>
                <input type="text" ref={height} className='form-control' />
            </div>
            <div className='mb-2 col'>
                <label htmlFor="" className='form-label'>Weight</label>
                <input type="text" ref={weight} className='form-control' />
            </div>
            <div className='mb-2 col'>
                <label htmlFor="" className='form-label'>Eyes</label>
                <input type="text" ref={eyes} className='form-control' />
            </div>
            <div className='mb-2 col'>
                <label htmlFor="" className='form-label'>Skin</label>
                <input type="text" ref={skin} className='form-control' />
            </div>
            <div className='mb-2 col'>
                <label htmlFor="" className='form-label'>Hair</label>
                <input type="text" ref={hair} className='form-control' />
            </div>
            <hr />
        </div >
    )
}
export default CharacterApperance 