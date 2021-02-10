import React from 'react';
import { connect } from "react-redux"
import { currentUser,noLongerAdmin } from "../store/actions/actionsConfig"
import { withRouter } from "react-router-dom"
const Logout = (props) => {
    ////////Hooks////////////


    ////////Functions////////////
    const signOff = () => {
        props.dispatch(noLongerAdmin({
            isAdmin: false
        }))
        props.dispatch(currentUser({}))
        localStorage.removeItem("token")
        props.history.push("/")
    }

    /////////Jsx///////////
    return (
        <>

           <li className="nav-link" style={{ cursor: "pointer", textDecoration: "none", color: "white" }} onClick={signOff}><button type="button" className="btn btn-outline-success">Logout</button></li>

        </>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        isAdmin: state.isAdmin
    }
}

export default withRouter(connect(mapStateToProps)(Logout))