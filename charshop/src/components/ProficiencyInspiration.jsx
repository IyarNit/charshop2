import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { setPlayerProf } from "../store/actions/actionsConfig"

const ProficiencyInspiration = (props) => {
    ////////Hooks////////////

    const profInput = useRef({});
    const insp = useRef("")

    ////////Functions////////////

    const setProf = () => {
        // console.log(profInput.current.value)
        props.dispatch(setPlayerProf(profInput.current.value))
    }
    /////////Jsx///////////
    return (
        <div className="w-50% m-3">
            <form className="form-floating col">
                <input type="number" className="form-control centerText" id="Inspiration" ref={insp}/>
                <label for="Inspiration" className="mx-auto">Inspiration</label>
            </form>
            <form className="form-floating col">
                <input type="number" className="form-control centerText" id="Proficiency" ref={profInput}/>
                <label for="Proficiency" className="mx-auto">Proficiency</label>
            </form>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        playerProficiency: state.playerProficiency
    }
}
export default connect(mapStateToProps)(ProficiencyInspiration)