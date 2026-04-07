const BASE_URL = 'https://api.chucknorris.io/jokes';

export type Joke = {
    id: string;
    value: string;
    url: string;
    icon_url: string;
    categories: string[];
};

async function apiFetch<T>(path: string): Promise<T> {
    const response = await fetch(`${BASE_URL}${path}`);
    if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
    }
    return response.json();
}

export function getRandomJoke(): Promise<Joke> {
    return apiFetch<Joke>('/random');
}

export function getCategories(): Promise<string[]> {
    return apiFetch<string[]>('/categories');
}
