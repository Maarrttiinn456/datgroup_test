import React, { useEffect, useState } from 'react';
import useJoke from '../hooks/useJoke';
import { useFavJokes } from '../contexts/FavJokesContext';
import JokeCard from '../components/JokeCard';
import styles from './HomePage.module.css';

export default function HomePage() {
    const { joke, loading, error, fetchJoke } = useJoke();
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if (!isRunning) return;
        fetchJoke();
        const id = setInterval(fetchJoke, 3000);
        return () => clearInterval(id);
    }, [isRunning]);

    const handleFetchJoke = () => {
        fetchJoke();
        setIsRunning(false);
    };

    return (
        <div className={styles.page}>
            <h1>Chuck Norris Jokes</h1>
            <div className={styles.actions}>
                <button
                    className={styles.btnPrimary}
                    onClick={() => handleFetchJoke()}
                    disabled={loading && !isRunning}
                >
                    Získej vtip
                </button>
                <button
                    className={styles.btnSecondary}
                    onClick={() => setIsRunning((running) => !running)}
                >
                    {isRunning ? 'Zastavit' : 'Spustit'} generování vtipů
                </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}
            {joke && <JokeCard joke={joke} />}
        </div>
    );
}
