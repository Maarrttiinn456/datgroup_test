import React from 'react';
import { useFavJokes } from '../contexts/FavJokesContext';

export default function FavoritesPage() {
    const { favJokes } = useFavJokes();
    return (
        <div>
            <h1>Favorites</h1>
            <ul>
                {favJokes.map((joke) => (
                    <li key={joke.id}>{joke.value}</li>
                ))}
            </ul>
        </div>
    );
}
