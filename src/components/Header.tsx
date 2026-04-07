import React from 'react';
import { Link } from 'react-router-dom';
import { useFavJokes } from '../contexts/FavJokesContext';

export default function Header() {
    const { favJokes } = useFavJokes();

    const favCount = favJokes.length;
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites ({favCount})</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
