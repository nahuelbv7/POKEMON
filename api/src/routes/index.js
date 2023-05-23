const { Router } = require('express');

const Pokemon = require("./PokeRoutes")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/", Pokemon)

module.exports = router;
