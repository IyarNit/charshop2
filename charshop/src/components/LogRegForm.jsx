import React, { useRef } from 'react';
import axios from "axios"
import { connect } from "react-redux"
import { Link, withRouter } from "react-router-dom"

import { currentUser } from "../store/actions/actionsConfig"

const LogRegForm = (props) => {
    console.log("LogRegForm", props)

    ////////Hooks////////////
    const userNameInput = useRef({});
    const emailInput = useRef({});
    const passwordInput = useRef({});

    ////////Functions////////////
    const signIn = async () => {
        if (!userNameInput.current?.value || !passwordInput.current?.value) {
            alert("You have not filled all neccesery fields")
            return
        }
        try {
            const url = `http://localhost:9876/Login`
            const result = await axios.post(url, { userName: userNameInput.current.value, password: passwordInput.current.value }, { headers: { "Content-Type": "application/json" } })
            if (result.data.message === "Login Succesful") {
                // console.log(result.data)
                props.dispatch(currentUser(result.data.user))

                localStorage.setItem("token", result.data.token)
                props.history.push("/")
                return
            }
        }
        catch (error) {
            console.error("catch", error);
        }
    }
    const register = async () => {
        if (!emailInput.current?.value && !passwordInput.current?.value && !userNameInput.current?.value) {
            alert("You have not filled all neccesery fields")
            return
        }
        try {
            const url = `http://localhost:9876/Register`
            const result = await axios.post(url, { userName: userNameInput.current.value, email: emailInput.current.value, password: passwordInput.current.value }, { headers: { "Content-Type": "application/json" } })
            if (result.data.message === "Register Success") {
                console.log(result.data)
                alert(result.data.message)
                resetFields()
                props.history.push(({
                    pathname: '/LogReg',
                    state: { val: true }
                }))
                return
            } else {
                alert(result.data.message)
                resetFields()
            }
        }
        catch (error) {
            console.error("catch", error);
        }
    }
    const resetFields = () => {
        emailInput.current.value = ""
        passwordInput.current.value = ""
        userNameInput.current.value = ""
    }
    /////////Jsx///////////
    return (
        <div className="container">
            <div className="col-8" style={{ margin: "auto" }}>
                <h1>{!props?.location?.state?.val ? "Register" : "Login"}</h1>
                <form>
                    {props?.location?.state?.val ? null : < div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="Your Email" ref={emailInput} autoComplete="on" />
                    </div>}
                    <div class="mb-3">
                        <label class="form-label">User Name</label>
                        <input type="text" class="form-control" placeholder="Your User Name" ref={userNameInput} autoComplete="on" />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" placeholder="Your Password" ref={passwordInput} autoComplete="on" />
                    </div>
                    <button type="button" className="btn btn-dark" onClick={!props?.location?.state?.val ? register : signIn}>{!props?.location?.state?.val ? "Register" : "Login"}</button>
                </form>
            </div>
        </div >
    )
}


const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
    }
}
export default withRouter(connect(mapStateToProps)(LogRegForm))