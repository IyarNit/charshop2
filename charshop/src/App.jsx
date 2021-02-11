import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import LogRegForm from "./components/LogRegForm"
import { Main, Navbar, CharacterList } from "../src/assests/componentImporter"
import { useEffect, useState } from "react"
import axios from "axios"
import { connect } from "react-redux"
import { currentUser } from "../src/store/actions/actionsConfig"
const App = (props) => {

  const [ready, setReady] = useState(false);
  useEffect(() => {
    const onInit = async () => {
      const token = localStorage.getItem("token") || null
      if (!token) {
        console.log("unauthorized")
        setReady(true)
        // props.history.push("/LogReg")
        return
      }
      try {
        const url = "http://localhost:9876/userIdentifier"
        const result = await axios.get(url, { headers: { "Content-Type": "application/json", "authorization": token } })
        if (result.data.message === "jwt expired") {
          console.log("exp")
          localStorage.removeItem("token")
          // props.history.push("/")
          return setReady(true)
        }
        // console.log(result.data)
        props.dispatch(currentUser(result.data.user))


        setReady(true)
      }
      catch (error) {
        console.log("server error")
        if (error.message === "Network Error") {
          localStorage.removeItem("token")
          setReady(true)
        }
      }
    }

    onInit()
  }, [])

  if (!ready) return (
    <div className="App">
      <div className="loader">
      </div>
    </div>
  )
  return (
    <div className="App" style={{ margin: "auto", width: "100%" }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/LogReg" component={LogRegForm} />
          <Route exact path="/characters" component={CharacterList} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps)(App)
