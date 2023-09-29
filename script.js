const PokemonName = document.querySelector(".pokemon__name")
const PokemonNumber = document.querySelector(".pokemon__number")
const PokemonImage = document.querySelector(".pokemon__image")

const form = document.querySelector(".form")
const input = document.querySelector(".input__search")
const buttonNext = document.querySelector(".btn-next")
const buttonPrev = document.querySelector(".btn-prev")

let Searchpokemon = 1

const fetchPokemon = async (pokemon) => {
    const respose = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await respose.json()
    return data
}

const renderPokemon = async (pokemon) => {
    const data = await fetchPokemon(pokemon)

    if(data) {
        PokemonImage.style.display = 'block';
        PokemonName.innerHTML = 'Loanding...';
        PokemonNumber.innerHTML = '';
        PokemonName.innerHTML = data.name
        PokemonNumber.innerHTML = data.id
        PokemonImage.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        input.value = '';
        Searchpokemon = data.id;
    } else {
        PokemonImage.style.display = 'none';
        PokemonName.innerHTML = 'Not found :c';
        PokemonNumber.innerHTML = '';
    }
}

form.addEventListener("submit",(evt) => {
    evt.preventDefault()
    renderPokemon(input.value.toLocaleLowerCase())
})

buttonNext.addEventListener("click",() => {
    Searchpokemon += 1
    renderPokemon(Searchpokemon)
})

buttonPrev.addEventListener("click",() => {
    if(Searchpokemon > 1) {
        Searchpokemon -= 1
        renderPokemon(Searchpokemon)
    }
})

renderPokemon(Searchpokemon)