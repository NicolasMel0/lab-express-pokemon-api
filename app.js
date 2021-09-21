const { query } = require('express');
const express = require('express');

const PORT = 4000;

// Importing all the pokemon for our data file
const allPokemon = require('./data');

const app = express();

app.use(express.json());

app.get('/pokemon', (req, res) => {
    return res.status(200).json(allPokemon);
});

app.get('/pokemon/:pokemonId', (req, res) => {
    const fonundPokemon = allPokemon.find(thisPokemon => {
        return String(thisPokemon.id) == req.params.pokemonId;
    });

    if (fonundPokemon) {
        return res.status(200).json(fonundPokemon);
    } else {
        return 'Pokemon não encontrado';
    }
});

// busca

app.get('/search', (req, res) => {
    if ((req, query.search)) {
        const result = allPokemon.filter(thisPokemon => {
            for (let key in pokem) {
                const value = String(pokem[key])
                    .toLowerCase()
                    .includes(req.query.search.toLocaleLowerCase());

                if (value) {
                    return value;
                }
            }
        });
    }
});

// -- Define your route listeners here! --

app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));
