"use client";

import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import React, {useState} from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const ReactQueryProvider = ({children}: { children: React.ReactNode }) => {
    const [queryClient] = useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* Use the devtools to check loading and error states*/}
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    );
}

export default ReactQueryProvider;