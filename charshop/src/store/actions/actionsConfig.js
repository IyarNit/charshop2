export const SET_PLAYER_PROFICIENCY = "SET_PLAYER_PROFICIENCY"
export const SET_PLAYER_STRENGHT = "SET_PLAYER_STRENGHT"
export const SET_PLAYER_DEXTERITY = "SET_PLAYER_DEXTERITY"
export const SET_PLAYER_CONSTITUTION = "SET_PLAYER_CONSTITUTION"
export const SET_PLAYER_INTELLIGENCE = "SET_PLAYER_INTELLIGENCE"
export const SET_PLAYER_WISDOM = "SET_PLAYER_WISDOM"
export const SET_PLAYER_CHARISMA = "SET_PLAYER_CHARISMA"
export const CURRENT_USER = "CURRENT_USER"
export const IS_ADMIN = "IS_ADMIN"
export const NO_MORE_ADMIN = "NO_MORE_ADMIN"
export const SET_CHARACTER = "SET_CHARACTER"
export const CLEAR_CHARACTER = "CLEAR_CHARACTER"



export const setPlayerProf = (payload) => {
    return {
        type: SET_PLAYER_PROFICIENCY,
        payload: payload
    }
}


export const addPlayerStrMod = (payload) => {
    return {
        type: SET_PLAYER_STRENGHT,
        payload: payload
    }
}
export const addPlayerDexMod = (payload) => {
    return {
        type: SET_PLAYER_DEXTERITY,
        payload: payload
    }
}
export const addPlayerConMod = (payload) => {
    return {
        type: SET_PLAYER_CONSTITUTION,
        payload: payload
    }
}
export const addPlayerIntMod = (payload) => {
    return {
        type: SET_PLAYER_INTELLIGENCE,
        payload: payload
    }
}
export const addPlayerWisMod = (payload) => {
    return {
        type: SET_PLAYER_WISDOM,
        payload: payload
    }
}
export const addPlayerChaMod = (payload) => {
    return {
        type: SET_PLAYER_CHARISMA,
        payload: payload
    }
}


export const currentUser = (payload) => {
    return {
        type: CURRENT_USER,
        payload: payload
    }
}

export const isAdmin = (payload) => {
    return {
        type: IS_ADMIN,
        payload: payload
    }
}

export const noLongerAdmin = (payload) => {
    return {
        type: NO_MORE_ADMIN,
        payload: payload
    }
}

export const setCharacter = (payload) => {
    return {
        type: SET_CHARACTER,
        payload: payload
    }
}

export const clearCharacter = (payload) => {
    return {
        type: CLEAR_CHARACTER,
        payload: payload
    }
}