import axios from 'axios';
import { GET_POKEMONS, GET_ID, NEXT_PAGE, PREV_PAGE, SEARCH_POKEMON, AZORDER, ATTACKORDER, CREATEPOKEMON } from "./actions-types";

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

    export const getPokemonsByName = (name) => {
        return async function(dispatch) {
            try{
                const response = await axios.get(`http://localhost:3001/pokemons/?name=${name}`)
                console.log(response.data)
                dispatch({type: SEARCH_POKEMON, payload: response.data})
            }catch(error){
                console.log(error)
            }
        }
    }

    export const orderAz = (orderaz) => {
        return {
          type: AZORDER,
          payload: orderaz
        }
    }

    export const filterAttack = (attack) => {
        return {
          type: ATTACKORDER,
          payload: attack
        }
      }
      
      export const createPokemon = () => {
        return async function(dispatch) {
            try {
                let response = await axios.post("http://localhost:3001/pokemons")
            }catch{
                alert("Pokemon no creado")
            }
        }
      }