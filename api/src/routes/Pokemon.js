const { Router } = require('express');
const { getPokemons, createPokemon, getPokemonById } = require('../controllers/pokemonController');

const router = Router();

router.get('/', getPokemons);//query {name} ?name=pikachu
router.get('/:id', getPokemonById);//params
router.post(`/`, createPokemon);//query {name}

module.exports = router;