const pokemonName = document.querySelector('.pokemon__name')

const fechPokemon = async (pokemon) => {
    const respose = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await respose.json()
    return data
}

const renderPokemon = async (pokemon) => {

    const data = await fechPokemon(pokemon)
    
    pokemonName.innerHTML = data.name
}

renderPokemon('25')