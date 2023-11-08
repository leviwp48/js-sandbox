type Pokemon = {
    name: string,
    color: string,
    id: number,
    moves: string[]
};

const printPokemon = (pokemon: Pokemon) => {
    console.log(pokemon.name, pokemon.color, pokemon.id, pokemon.moves)
}

let pokemon = {
    name: "pikachu",
    color: "yellow",
    id: 1,
    moves: ["thunderbolt", "tailwhip", "headbutt", "thundershock"]
}
const main = document.getElementById("main");
const p = document.createElement("p");
p.textContent = pokemon.name;
main?.appendChild(p);

printPokemon(pokemon)

console.log(pokemon) 

