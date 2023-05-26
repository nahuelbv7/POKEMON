import { GET_POKEMONS, GET_ID, NEXT_PAGE, PREV_PAGE, SEARCH_POKEMON, AZORDER, ATTACKORDER, CREATEPOKEMON  } from "./actions-types";

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
        case SEARCH_POKEMON:
            return {
            ...state,
            pokemon: action.payload,   
            };

        case AZORDER:
            const newOrder = state.pokemon.sort((a, b) => {
                if(a.name > b.name) {
                    return "ascendent" === action.payload ? 1 : -1; 
                    }
                if(a.name < b.name) {
                    return "descendent" === action.payload ? 1 : -1; 
                    }
                    return 0;
                })
                return {
                    ...state,
                    order: newOrder,    
                }

        case ATTACKORDER:

            let newP = [];
            
            if( action.payload ==="ascendent" )
            {
                newP = state.pokemon.sort((a, b) => {

                    if(a.attack < b.attack) {
                        return 1;                       
                    }
                    if(a.attack > b.attack) {
                        return -1;
                    }
                        return 0;
                 });
                } else {
                newP = state.pokemon.sort((a, b) => {
                    if(a.attack < b.attack) { 
                    return -1;
                    }
                    if(a.attack > b.attack) {
                    return  1;
                    }
                    return 0;
            
                    });
                }
                return {
                ...state,
                attack: [...newP],
                };
               
        default:
            return state;
    }
};



export default reducer;


