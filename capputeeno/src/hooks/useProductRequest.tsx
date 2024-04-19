import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { ProductFetchResponse } from "@/types/Product";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId: string): AxiosPromise<ProductFetchResponse> => {
  return axios.post(API_URL, {
    query: `
    query {
        Product (id: "${productId}") {
          name
          price_in_cents
          image_url
          category
          description
        }
      }
    `,
  });
};

export function useProductRequest (id: string) {
    const {data} = useQuery ({
        queryFn: () => fetcher(id),
        queryKey: ["product", id],
        enabled: !!id,
        staleTime: 1000 * 60
    })

    return {
        data: data?.data?.data?.Product
    }
}