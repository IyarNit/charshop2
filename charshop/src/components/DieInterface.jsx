import React, { useRef } from 'react';
import { connect } from 'react-redux'
import { numbers } from "../assests/equipment"


const DieInterface = (props) => {
    ////////Hooks////////////

    const dieRef4 = useRef({});
    const dieRef6 = useRef({});
    const dieRef8 = useRef({});
    const dieRef10 = useRef({});
    const dieRef12 = useRef({});



    ////////Functions////////////
    const numberSelector = numbers.map((w) => { return <option>{w}</option> })
  
    /////////Jsx///////////
    return (
        <div>
            <div>
                <input value="4" ref={dieRef4} disabled />
                <select onChange={e => { props.func(e, dieRef4) }}>
                    <option>
                    </option>
                    {numberSelector}
                </select>
            </div>
            <div>
                <input value="6" ref={dieRef6} disabled />
                <select onChange={e => { props.func(e, dieRef6) }}>
                    <option>
                    </option>
                    {numberSelector}
                </select>
            </div>
            <div>
                <input value="8" ref={dieRef8} disabled />
                <select onChange={e => { props.func(e, dieRef8) }}>
                    <option>
                    </option>
                    {numberSelector}
                </select>
            </div>
            <div>
                <input value="10" ref={dieRef10} disabled />
                <select onChange={e => { props.func(e, dieRef10) }}>
                    <option>
                    </option>
                    {numberSelector}
                </select>
            </div>
            <div>
                <input value="12" ref={dieRef12} disabled />
                <select onChange={e => { props.func(e, dieRef12) }}>
                    <option>
                    </option>
                    {numberSelector}
                </select>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
    }
}
export default connect(mapStateToProps)(DieInterface)

