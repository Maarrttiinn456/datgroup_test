import { useState } from 'react';
import { getRandomJoke, type Joke } from '../api/chuckNorris';

export default function useJoke() {
    const [joke, setJoke] = useState<Joke | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchJoke = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await getRandomJoke();
            setJoke(res);
        } catch (e) {
            setError('Nepodařilo se načíst vtip.');
        } finally {
            setLoading(false);
        }
    };

    return { joke, loading, error, fetchJoke };
}
