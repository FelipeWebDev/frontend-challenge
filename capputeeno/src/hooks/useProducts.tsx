import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductsResponseFetch } from "@/types/ProductsResponse";
import { mountQuery } from "@/utils/GraphQLFilters";
import { useFilter } from "./useFilter";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (query: string): AxiosPromise<ProductsResponseFetch> => {
  return axios.post(API_URL, {
    query,
  });
};

export function useProducts() {
  const { type, priority, search, page } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const query = mountQuery(type, priority, page);
  const { data } = useQuery({
    queryFn: () => fetcher(query),
    queryKey: ["products", type, priority, page],
    staleTime: 1000 * 60 * 5
  });

  const products = data?.data?.data?.allProducts;
  const filteredProducts = products?.filter(product => product.name.toLocaleLowerCase().includes(searchDeferred.toLocaleLowerCase()));

  return {
    data: filteredProducts
  };
}
