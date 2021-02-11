import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux'
import { userAuthenticator } from "../components/TokenAuthiticator"
import { getCharacter, createCharacter, deleteCharacter } from "../axiosCalls/axioscalls"
import { CharacterListChild } from "../assests/componentImporter"
const CharacterList = (props) => {
    ////////Hooks////////////
    const [charactersArr, setCharacters] = useState([])
    const [update, setUpdate] = useState(false)
    const [showInputs, setShowInputs] = useState(false)

    const characterNameRef = useRef({});
    const ClassRef = useRef({});
    const raceRef = useRef({});

    useEffect(async () => {
        const result = await getCharacter(props?.currentUser?.userName)
        console.log(result)
        await setCharacters(result?.data?.character)
    }, []);
    ////////Functions////////////

    const characters = charactersArr?.map((c) => {
        return <CharacterListChild update={update} char={c} deleter=
            {(e) => { characterDeleter(e) }} />
    })
    const characterDeleter = async (charName) => {
        const character = charactersArr.filter((c) => { return c.name === charName })[0]
        // console.log(character)
        const newArr = charactersArr
        const index = newArr.findIndex(e => e.name === charName)
        newArr.splice(index, 1)
        await setCharacters(newArr)
        await setUpdate(true)
        await setUpdate(false)
        const deleteChar = await deleteCharacter(charName)
        console.log(deleteChar)
    }

    const giveLife = async () => {
        if (!characterNameRef.current.value || !ClassRef.current.value || !raceRef.current.value) {
            alert("Fill all inputs")
            return
        }
        const character = { userName: props.currentUser.userName, name: characterNameRef.current.value, profession: ClassRef.current.value, race: raceRef.current.value }
        const result = await createCharacter(character)
        if (result.data.message === "Character Added") {
            setShowInputs(false)
            const result2 = await getCharacter(props?.currentUser?.userName)
            await setCharacters(result2.data.character)
        }
    }
    /////////Jsx///////////
    return (
        <div>
            <h1>Your characters</h1>
            <button type="button" className="btn btn-primary" onClick={() => { setShowInputs(true) }}>Create Character</button>

            {!showInputs ? null :
                <div>
                    <label>Name</label>
                    <input type="text" ref={characterNameRef} />
                    <label>Class</label>
                    <input type="text" ref={ClassRef} />
                    <label>Race</label>
                    <input type="text" ref={raceRef} />
                    <button type="button" className="btn btn-dark" onClick={giveLife}>Give me life</button>
                </div>
            }
            {characters}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        isAdmin: state.isAdmin
    }
}
export default userAuthenticator(connect(mapStateToProps)(CharacterList))