import { useQuery } from "@tanstack/react-query";
import { ProductsResponseFetch } from "@/types/ProductsResponse";
import axios, { AxiosPromise } from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;
const fetcher = (query: string): AxiosPromise<ProductsResponseFetch> => {
  return axios.post(API_URL, {
    query,
  });
};

const mountQuery = () => {
  return `
      query {
          allProducts {
            name
          }
        }
  `;
};

export function productAmount() {
  const { data } = useQuery({
    queryFn: () => fetcher(mountQuery()),
    queryKey: ["products"],
    staleTime: 1000 * 60 * 10,
  });
  return data?.data?.data?.allProducts.length
}
