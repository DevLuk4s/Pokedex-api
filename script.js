const PokemonName = document.querySelector(".pokemon__name")
const PokemonNumber = document.querySelector(".pokemon__number")
const PokemonImage = document.querySelector(".pokemon__image")

const form = document.querySelector(".form")
const input = document.querySelector(".input__search")
const buttonNext = document.querySelector(".btn-next")
const buttonPrev = document.querySelector(".btn-prev")

let pokemon = 1

const fetchPokemon = async (pokemon) => {
    const respose = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await respose.json()
    return data
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)
    console.log(data)

    PokemonName.innerHTML = data.name
    PokemonNumber.innerHTML = data.id
    PokemonNumber.src = data.sprite.front_default
}

renderPokemon(pokemon)