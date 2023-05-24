import { GET_POKEMONS, GET_ID } from "./actions-types";

const initialState = {
    pokemon: [],
    detail: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemon: action.payload
            };
        case GET_ID:
            return{
                ...state,
                detail: action.payload
            }    

        default:
            return state;
    }
};



export default reducer;


