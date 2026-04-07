import React from 'react';
import { Joke } from '../api/chuckNorris';
import { useFavJokes } from '../contexts/FavJokesContext';
import styles from './JokeCard.module.css';

export default function JokeCard({ joke }: { joke: Joke }) {
    const { favJokes, addJoke, removeJoke } = useFavJokes();
    const isFav = favJokes.some((j) => j.id === joke.id);

    const handleToggle = () => {
        isFav ? removeJoke(joke.id) : addJoke(joke);
    };

    return (
        <div className={styles.card}>
            <div className={styles.categories}>
                {joke.categories.length > 0
                    ? joke.categories.map((cat) => (
                        <span key={cat} className={styles.category}>{cat}</span>
                    ))
                    : <span className={styles.categoryEmpty}>nezařazeno</span>
                }
            </div>
            <p className={styles.text}>{joke.value}</p>
            <button
                className={styles.heartBtn}
                onClick={handleToggle}
                aria-label={isFav ? 'Odebrat z oblíbených' : 'Přidat do oblíbených'}
            >
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill={isFav ? 'var(--color-primary)' : 'none'}
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
            </button>
        </div>
    );
}
