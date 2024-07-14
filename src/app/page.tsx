"use client";

import type {Card} from "@/types/types";
import {useQuery} from "@tanstack/react-query";
import {fetchAllCards} from "@/data/fetcher";
import FlipCard from "@/components/Card";
import Spinner from "@/components/Spinner";
import ErrorModal from "@/components/Error";

export default function Home() {
    const {data, isFetching, error, refetch} = useQuery<Card[]>({
        queryKey: ["cards"],
        queryFn: fetchAllCards,
    });

    if (isFetching) return <Spinner/>;

    return (
        <main>
            <h1 className={"text-center font-bold text-lg mt-5"}>
                Cards Gallery
            </h1>

            <div className={"flex flex-wrap justify-center gap-2 mt-5"}>
                {
                    data && data.map(card => (
                        <FlipCard key={card.id} card={card}/>
                    ))
                }
            </div>

            {
                error && (
                    <ErrorModal message={error?.message || "Failed to fetch cards"}
                                onClose={refetch}/>
                )

            }

        </main>
    );
}
