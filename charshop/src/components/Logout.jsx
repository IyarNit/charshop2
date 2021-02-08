import React from 'react';
import { connect } from "react-redux"
import { currentUser } from "../store/actions/actionsConfig"
import { withRouter } from "react-router-dom"
const Logout = (props) => {
    ////////Hooks////////////


    ////////Functions////////////
    const signOff = () => {
        props.dispatch(currentUser({}))
        localStorage.removeItem("token")
    }

    /////////Jsx///////////
    return (
    <>

       {!props.currentUser ? null: <li className="nav-link" style={{ cursor: "pointer", textDecoration: "none", color: "white" }} onClick={signOff}><button type="button" className="btn btn-outline-success">Logout</button></li>}

    </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        character: state.character
    }
}

export default withRouter(connect(mapStateToProps)(Logout))