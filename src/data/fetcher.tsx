import {Card, ServerError} from "@/types/types";

interface CardResponse {
    cards: Card[]
}

const BASE_URL = "http://localhost:3001";
async function fetcher<T>(endpoint: string) : Promise<T> {
    const res = await fetch(`${BASE_URL}/${endpoint}`);
    if (!res.ok) {
        const errorDetails : ServerError = await res.json();
        throw new Error(errorDetails.error || "An error occurred");
    }
    return await res.json() as Promise<T>;
}

async function fetchAllCards() : Promise<Card[]>{
    const cards = await fetcher<CardResponse>("cards");
    return cards.cards.map(card => ({
        ...card,
        image: `${BASE_URL}${card.image}`
    }))
}

export default fetcher;
export {BASE_URL, fetchAllCards};