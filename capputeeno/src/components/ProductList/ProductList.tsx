"use client";

import { useProducts } from "@/hooks/useProducts";
import ProductCard from "./ProductCard";
import styled from "styled-components";

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 256px);
  grid-gap: 32px;
  max-width: 100%;
  margin-top: 82px;

  &:hover > div {
    opacity: 0.5;
  }

  &:hover > div:hover {
    opacity: 1;
  }
`;

const ProductList = () => {
  const { data } = useProducts();

  return (
    <ProductGrid>
      {data?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          price={product.price_in_cents}
          image={product.image_url}
          id={product.id}
        />
      ))}
    </ProductGrid>
  );
};

export default ProductList;
