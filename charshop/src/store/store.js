import { createStore, applyMiddleware, compose } from 'redux';
import { SET_PLAYER_PROFICIENCY, SET_PLAYER_STRENGHT, SET_PLAYER_DEXTERITY, SET_PLAYER_CONSTITUTION, SET_PLAYER_INTELLIGENCE, SET_PLAYER_WISDOM, SET_PLAYER_CHARISMA, CURRENT_USER, IS_ADMIN,NO_MORE_ADMIN } from './actions/actionsConfig';


const initState = {
    playerProficiency: null,
    playerStrenghtMod: "",
    playerDextirityMod: "",
    playerConstitutionMod: "",
    playerIntelligenceMod: "",
    playerWisdomMod: "",
    playerCharismaMod: "",
    currentUser: {},
    isAdmin: false,

};

function reducer(state = initState, action) {


    // console.log('state', state)


    switch (action.type) {


        case SET_PLAYER_PROFICIENCY: {
            const num = Number(action.payload)
            return {
                ...state, playerProficiency: num
            };
        };

        case SET_PLAYER_STRENGHT: {
            const num = Number(action.payload)
            return {
                ...state, playerStrenghtMod: num
            };
        }
        case SET_PLAYER_DEXTERITY: {
            const num = Number(action.payload)
            return {
                ...state, playerDextirityMod: num
            };
        } case SET_PLAYER_CONSTITUTION: {
            const num = Number(action.payload)
            return {
                ...state, playerConstitutionMod: num
            };
        } case SET_PLAYER_INTELLIGENCE: {
            const num = Number(action.payload)
            return {
                ...state, playerIntelligenceMod: num
            };
        } case SET_PLAYER_WISDOM: {
            const num = Number(action.payload)
            return {
                ...state, playerWisdomMod: num
            };
        } case SET_PLAYER_CHARISMA: {
            const num = Number(action.payload)
            return {
                ...state, playerCharismaMod: num
            };
        }
        case CURRENT_USER: {

            return { ...state, currentUser: action.payload }
        }
        
        case IS_ADMIN: {
            return { ...state, isAdmin: true }
        }

        case NO_MORE_ADMIN: {
            return { ...state, isAdmin: false }
        }
        default: return state;


    };


};
const store = createStore(reducer);


export default store;