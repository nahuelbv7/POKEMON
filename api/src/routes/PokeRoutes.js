const { Router } = require('express');

const router = Router();

//Ruta para traer todos los pokemons
router.get("/pokemons")


//Ruta para traer pokemons por id
router.get("/pokemons/:idPokemon")


//Ruta para traer pokemons por nombre
router.get("/pokemons/")


//Ruta para traer los pokemons creados
router.post("/pokemons")


//Ruta para traer todos los tipos de pokemones
router.get("/types")