"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { FilterContextProvider } from "@/contexts/FilterContext"
import { ThemeProvider } from "styled-components";
import { ReactNode } from "react";

interface DefaultProvidersProps {
    children: ReactNode
}

const theme = {
    desktopBreakpoint: "768px"
}

const DefaultProviders = ({children}: DefaultProvidersProps) => {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <FilterContextProvider>
                <ThemeProvider theme={theme}>
                    {children}
                </ThemeProvider>
            </FilterContextProvider>
        </QueryClientProvider>
    )
}

export default DefaultProviders;