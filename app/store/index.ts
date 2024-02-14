import { combineReducers, configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter/counterSlice';
import PokemonReducer from './pokemons/index'
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const counterPersister = {
    key: "counter",
    storage: storage,
    whitelist: ["count"],
};

const pokemonPersister = {
    key: 'pokemons',
    storage,
    whitelist: ["favorites"]
}

const rootReducer = combineReducers({
    counter: persistReducer(counterPersister, counterReducer),
    pokemons: persistReducer(pokemonPersister, PokemonReducer)
});


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;