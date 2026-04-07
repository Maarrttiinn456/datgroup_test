import React, { useEffect, useState } from 'react';
import useJoke from '../hooks/useJoke';
import { useFavJokes } from '../contexts/FavJokesContext';

export default function HomePage() {
    const { joke, loading, error, fetchJoke } = useJoke();
    const { addJoke } = useFavJokes();
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
        <>
            <h1>Home</h1>
            <button
                onClick={() => handleFetchJoke()}
                disabled={loading && !isRunning}
            >
                Získej vtip
            </button>
            <button onClick={() => setIsRunning((running) => !running)}>
                {isRunning ? 'Zastavit' : 'Spustit'} generování vtipů
            </button>

            {error && <p>{error}</p>}
            {joke && (
                <div>
                    <p>{joke.value}</p>
                    <button onClick={() => addJoke(joke)}>
                        Uložit jako oblíbený
                    </button>
                </div>
            )}
        </>
    );
}
