const axios = require ("axios");
const { Op } = require("sequelize");
const { Pokemon, Type } = require("../db.js");

const getPokemons = async () => {
    
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon")

    const map = response.data.map((e) => {
        
        const pokemon = {
            id:
            name:
            image:
            life:
            attack:
            defense:
            speed:
            weigth:
            height:
        };
        return pokemon;
    })
    return map;
}




module.exports = {getPokemons};
