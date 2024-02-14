import { PokemonGrid } from "@/app/components/pokemons";
import { Pokemon, SimplePokemon } from "@/app/lib/pokemons";


export const metadata = {
    title: 'Pokemons Page',
    description: 'Pokemons Page with a grid style',
};

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const data: Pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        .then(data => data.json())

    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name
    }))

    return pokemons
}

export default async function PokemonPage() {

    const pokemons = await getPokemons(50)
    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de pokémons <small>estático</small></span>

            <PokemonGrid pokemons={pokemons} />
        </div>
    );
}