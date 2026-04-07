import React from 'react';
import { useFavJokes } from '../contexts/FavJokesContext';
import styles from './FavoritesPage.module.css';
import JokeCard from '../components/JokeCard';

export default function FavoritesPage() {
    const { favJokes, clearJokes } = useFavJokes();

    const handleClear = () => {
        if (
            window.confirm('Opravdu chcete vyčistit seznam oblíbených vtipů?')
        ) {
            clearJokes();
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <h1>Favorites</h1>
                <div>
                    <button
                        className={styles.clearBtn}
                        onClick={() => handleClear()}
                    >
                        Vyčistit seznam
                    </button>
                </div>
            </div>
            {favJokes.length === 0 ? (
                <p className={styles.empty}>Zatím žádné oblíbené vtipy.</p>
            ) : (
                <div className={styles.jokeList}>
                    {favJokes.map((joke) => (
                        <JokeCard key={joke.id} joke={joke} />
                    ))}
                </div>
            )}
        </div>
    );
}
