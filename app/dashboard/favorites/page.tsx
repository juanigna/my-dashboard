import dynamic from "next/dynamic";

export const metadata = {
    title: 'Favoritos',
    description: 'Favoritos page',
};

const FavoritePokemons = dynamic(() => import('@/app/components/pokemons/components/FavoritePokemons'), {
    ssr: false
})

export default async function PokemonPage() {

    return (
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokémons favoritos <small className="text-blue-600">global state</small></span>

            <FavoritePokemons />
        </div>
    );
}