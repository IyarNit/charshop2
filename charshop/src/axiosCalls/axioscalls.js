import axios from "axios"

const getCharacter = async (userName) => {
    console.log("get character ", userName)
    if (!userName) {
        return
    }
    try {
        const url = `http://localhost:9876/characters`
        // console.log(character)
        const result = await axios.get(url, { headers: { "Content-Type": "application/json", "username": userName } })
        if (result.data.message === "Character Located") {
            // need to decide what to do upon failure or success
            return result
        } else {
            // alert(result.data.message)
            return
        }
    }
    catch (error) {
        console.error("catch", error);
    }
}


const createCharacter = async (character) => {
    if (!character) {
        return
    }
    try {
        const url = `http://localhost:9876/characters`
        // console.log(character)
        const result = await axios.post(url, { character }, { headers: { "Content-Type": "application/json" } })

        // need to decide what to do upon failure or success
        return result

    }
    catch (error) {
        console.error("catch", error);
    }
}

const deleteCharacter = async (character) => {
    if (!character) {
        return
    }
    try {
        const url = `http://localhost:9876/charactersDelete`
        // console.log(character)
        const result = await axios.delete(url, { character: character }, { headers: { "Content-Type": "application/json" } })

        // need to decide what to do upon failure or success
        return result

    }
    catch (error) {
        console.error("catch", error);
    }
}
const updateCharacterDetails = async (userName, charName, detail, detailtype) => {

    try {
        const url = `http://localhost:9876/characterDetails`
        // console.log(detail)
        const result = await axios.post(url, { userName: userName, charName: charName, detail: detail, detailtype: detailtype }, { headers: { "Content-Type": "application/json" } })
        if (result.data.message === "update succesful") {
            // need to decide what to do upon failure or success
            return
        }
    }
    catch (error) {
        console.error("catch", error);
    }
}


const getCharacterDetails = async (character) => {
    // try {
    //     const url = `http://localhost:9876/updateRoom`
    //     // console.log(character)
    //     const result = await axios.get(url, { email: character.email, location: character.location }, { headers: { "Content-Type": "application/json" } })
    //     if (result.data.message === "update succesful") {
    //         // need to decide what to do upon failure or success
    //         return
    //     }
    // }
    // catch (error) {
    //     console.error("catch", error);
    // }
}


export { getCharacter, createCharacter, deleteCharacter, updateCharacterDetails, getCharacterDetails, }