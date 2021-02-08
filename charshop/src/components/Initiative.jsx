import React, { useRef,useEffect } from 'react';
import { connect } from 'react-redux'


const Initiative = (props) => {
    ////////Hooks////////////
// console.log("re run")
    const initiativeTotal = useRef({});
    const initiativeRef = useRef({});

    useEffect(() => {
        initiativeCalculator()
    }, []);
    ////////Functions////////////
    const initiativeCalculator = (playerInput) => {
        const dex = Number(props.playerDextirityMod)
        const inp = Number(playerInput?.target?.value)
        const result = inp + dex
        initiativeTotal.current.value = result
    }
    if (props.playerDextirityMod && !initiativeRef.current.value) {
        initiativeTotal.current.value = props.playerDextirityMod
    }
    /////////Jsx///////////
    return (
        <div>
            <label>Initiative</label>
            <input type="number" value={props.playerDextirityMod} disabled />
            <footer>Dexterity Modifier</footer>

            <input type="number" onChange={(e) => { initiativeCalculator(e) }} ref={initiativeRef} />
            <footer>Other Modifiers</footer>

            <input type="number" ref={initiativeTotal} />
            <footer>Total Initiative</footer>

        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        playerDextirityMod: state.playerDextirityMod
    }
}
export default connect(mapStateToProps)(Initiative)
