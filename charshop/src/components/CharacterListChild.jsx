import React, { Children } from 'react';
import { connect } from 'react-redux'
import { setCharacter, clearCharacter } from "../store/actions/actionsConfig"
import { withRouter } from "react-router-dom"
const CharacterListChild = (props) => {
    console.log("characterlist Children", props)

    ////////Hooks////////////

    ////////Functions////////////
    const loadChar = async () => {
        props.dispatch(setCharacter(props?.char))
        props.history.push("/")
    }
    const del = (e) => {
        props.dispatch(clearCharacter(null))
        props.deleter(e?.target?.name) 
    }

    /////////Jsx///////////
    return (
        <div>
            <span>Name:{props.char.name}, Class:{props.char.profession}, Race:{props.char.race},Level:{props.char.level}</span>
            <button type="button" className="btn btn-primary" onClick={loadChar}>Load Character</button>
            <button type="button" className="btn btn-danger" name={props.char.name} onClick={(e) => { del(e) }}> Give me death </button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        isAdmin: state.isAdmin,
        currentCharacter: state.currentCharacter
    }
}
export default withRouter(connect(mapStateToProps)(CharacterListChild))