"use client"

import { ReactNode, createContext, useState } from "react";
import { FilterType } from "@/types/FilterTypes"
import { PriorityType } from "@/types/PriorityTypes";

export const FilterContext = createContext({
    search: '',
    page: 0,
    type: FilterType.ALL,
    priority: PriorityType.NEWEST,
    setPriority: (value: PriorityType) => {},
    setSearch: (value: string) => {},
    setPage: (value: number) => {},
    setType: (value: FilterType) => {}
});

interface ProviderProps {
    children: ReactNode
}

export function FilterContextProvider ({children}: ProviderProps) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [type, setType] = useState(FilterType.ALL);
    const [priority, setPriority] = useState(PriorityType.POPULARITY);

    return (
        <FilterContext.Provider value={{search, page, type, priority, setPriority, setSearch, setPage, setType}}>
            {children}
        </FilterContext.Provider>
    )
}