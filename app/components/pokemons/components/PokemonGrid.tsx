import { SimplePokemon } from "@/app/lib/pokemons"
import dynamic from "next/dynamic"

const PokemonCard = dynamic(() => import('@/app/components/pokemons/components/PokemonCard'), {
    ssr: false,
    loading: () =>
        <div className="flex flex-wrap gap-10 items-center justify-center">
            <div className="mx-auto right-0 mt-2 w-60 bg-slate-500 animate-pulse transition-all">
                <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
                    <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">


                        <p className="pt-2 text-lg font-semibold text-gray-50"></p>
                        <div className="mt-5">

                        </div>
                    </div>
                    <div className="border-b">
                        <div className="px-4 py-2 hover:bg-gray-100 flex items-center cursor-pointer">
                            <div className="text-red-600">

                            </div>
                            <div className="pl-3">
                                <p className="text-sm font-medium text-gray-800 leading-none">

                                </p>
                                <p className="text-xs text-gray-500">View your campaigns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
})


interface Props {
    pokemons: SimplePokemon[]
}

const PokemonGrid = ({ pokemons }: Props) => {
    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            {
                pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}

export default PokemonGrid