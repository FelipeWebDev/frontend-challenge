"use client";

import FilterBar from "@/components/FilterMenu/FilterBar";
import styled from "styled-components";
import ProductList from "@/components/ProductList/ProductList";
import { DefaultPageLayout } from "@/components/Commons/DefaultPageLayout";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
