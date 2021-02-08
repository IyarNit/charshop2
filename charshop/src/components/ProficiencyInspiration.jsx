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
        <div style={{ width: "50%",marginTop:"2%" }}>
            <div className="input-group mb-3">
                <input className="form-control" type="number" ref={insp} />
                <span class="input-group-text">Inspiration</span>
                <input className="form-control" type="number" onChange={setProf} ref={profInput} />
                <span class="input-group-text">Proficiency</span>
            </div>
            <hr />
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        playerProficiency: state.playerProficiency
    }
}
export default connect(mapStateToProps)(ProficiencyInspiration)