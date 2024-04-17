"use client";

import FilterBar from "@/components/FilterMenu/FilterBar";
import styled from "styled-components";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import ProductList from "@/components/ProductList/ProductList";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding: 34px 160px;
  min-height: 100vh;
  background-color: var(--bg-primary);
`;

export default function Home() {
  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <Main>
        <FilterBar />
        <ProductList />
      </Main>
    </QueryClientProvider>
  );
}
