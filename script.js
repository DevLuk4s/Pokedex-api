const pokemonName = document.querySelector('.pokemon__name')
const pokemonImg = document.querySelector('.pokemon__image')
const pokemonId = document.querySelector('.pokemon__number')

const fechPokemon = async (pokemon) => {
    const respose = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await respose.json()
    return data
}

const renderPokemon = async (pokemon) => {

    const data = await fechPokemon(pokemon)
    
    pokemonName.innerHTML = data.name
    pokemonId.innerHTML = data.id
    pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderPokemon(25)