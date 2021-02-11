
import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom"
import axios from "axios"


export const userAuthenticator = (WrappedComponent) => {
    return function (props) {
        const [status, setStatus] = useState("loading");

        useEffect(() => {
            const token = localStorage.getItem("token")
            const verify = async () => {
                const result = await axios.get("http://localhost:9876/tokenVerify", { headers: { "Content-Type": "application/json", "authorization": token } })
                const { status } = result.data;
                setStatus(status)
            }
            verify();
        }, [])
        if (!status) {

            localStorage.removeItem("token")
            return <Redirect to={{ pathname: '/LogReg', state: { val: true } }} />
        }
        return <WrappedComponent {...props} />
    }
}