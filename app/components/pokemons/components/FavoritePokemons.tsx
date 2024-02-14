"use client"

import React from 'react'
import { PokemonGrid } from '..'
import { useAppSelector } from '@/app/store'


export const metadata = {
    title: 'Favorite Pokemons',
    description: 'Favorite Pokemons',
};

const FavoritePokemons = () => {

    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))


    return (
        <PokemonGrid pokemons={favoritePokemons} />
    )
}

export default FavoritePokemons
