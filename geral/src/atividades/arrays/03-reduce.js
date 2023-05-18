const pokemons = [
    {
        name: 'Pikachu',
        type: 'eletric'
    },
    {
        name: 'Elekid',
        type: 'eletric'
    },
    {
        name: 'Bulbassauro',
        type: 'grass'
    },
    {
        name: 'Chikorita',
        type: 'grass'
    },
]


const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo, pokemonAtual) => {
    
    pokemonsPorTipo[pokemonAtual.type] = pokemonsPorTipo[pokemonAtual.type] || []
    pokemonsPorTipo[pokemonAtual.type].push(pokemonAtual)
    return pokemonsPorTipo

}, {})

console.log(pokemonsPorTipo)