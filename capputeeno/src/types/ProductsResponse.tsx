import { Product } from "./Product";

export interface ProductsResponseFetch {
    data: {
        allProducts: Product[]
    }
}