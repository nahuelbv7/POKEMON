import { GET_POKEMONS, GET_ID, NEXT_PAGE, PREV_PAGE  } from "./actions-types";

const initialState = {
    pokemon: [],
    detail: [],
    numPage: 1,
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
        case NEXT_PAGE:
            return {
                ...state,
                numPage: state.numPage + 1   // Se aumenta el número de página
            }
    
        case PREV_PAGE:
            return {
                ...state,
                numPage: state.numPage - 1 // Se disminuye el número de página
            }

        default:
            return state;
    }
};



export default reducer;


