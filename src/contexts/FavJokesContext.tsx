import React, {
    createContext,
    useState,
    useContext,
    ReactNode,
    useEffect,
} from 'react';
import { Joke } from '../api/chuckNorris';

type FavJokesContextType = {
    favJokes: Joke[];
    addJoke: (joke: Joke) => void;
    removeJoke: (id: string) => void;
    clearJokes: () => void;
};

const FavJokesContext = createContext<FavJokesContextType | null>(null);

export function FavJokesProvider({ children }: { children: ReactNode }) {
    const [favJokes, setFavJokes] = useState<Joke[]>(() => {
        const stored = localStorage.getItem('favJokes');
        return stored ? JSON.parse(stored) : [];
    });

    const addJoke = (joke: Joke) => {
        setFavJokes((prev) => {
            if (prev.find((j) => j.id === joke.id)) return prev;

            const updated = [...prev, joke];

            if (updated.length > 10) {
                return updated.slice(1);
            }

            console.log(updated);
            localStorage.setItem('favJokes', JSON.stringify(updated));
            return updated;
        });
    };

    const removeJoke = (id: string) => {
        setFavJokes((prev) => {
            const updated = prev.filter((j) => j.id !== id);
            localStorage.setItem('favJokes', JSON.stringify(updated));
            return updated;
        });
    };

    const clearJokes = () => {
        setFavJokes(() => {
            localStorage.removeItem('favJokes');
            return [];
        });
    };

    return (
        <FavJokesContext.Provider
            value={{ addJoke, removeJoke, clearJokes, favJokes }}
        >
            {children}
        </FavJokesContext.Provider>
    );
}

export function useFavJokes() {
    const context = useContext(FavJokesContext);
    if (!context) {
        throw new Error('useFavJokes must be used within a FavJokesProvider');
    }
    return context;
}
