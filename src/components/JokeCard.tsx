import React from 'react';
import { Joke } from '../api/chuckNorris';

export default function JokeCard({ joke }: { joke: Joke }) {
    return (
        <div>
            <p>{joke.id}</p>
            <p>{joke.value}</p>
        </div>
    );
}
