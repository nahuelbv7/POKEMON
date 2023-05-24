import axios from 'axios';
import { GET_POKEMONS, GET_ID, NEXT_PAGE, PREV_PAGE } from "./actions-types";

export const getPokemons = () => {

    return async function(dispatch) {
        const response = await axios.get("http://localhost:3001/pokemons")
        
        try{
            dispatch({type: GET_POKEMONS, payload: response.data})
        }
        catch(error)
        {
            console.log(error.mensaje);
        }
    }}


    export const getPokemonsById = (id) => {
        return async function(dispatch) {
            try {
                const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
                dispatch({ type: GET_ID, payload: response.data });
            } catch(error) {
                console.log(error.message);
            }
        }
    }


    export const nextPage = () => {
        return {
            type: NEXT_PAGE
        }
    }

    export const prevPage = () => {
        return {
            type: PREV_PAGE
        }
    }