import React, { Children } from 'react';
import { connect } from 'react-redux'


const CharacterListChild = (props) => {
    ////////Hooks////////////

    // console.log("characterlist Children", props)
    ////////Functions////////////

    /////////Jsx///////////
    return (
        <div>
            <span>Name:{props.char.name}, Class:{props.char.profession}, Race:{props.char.race}</span>
            <button type="button" className="btn btn-danger" name={props.char.name} onClick={(e) => { props.deleter(e?.target?.name) }}> Give me death </button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}
export default connect(mapStateToProps)(CharacterListChild)