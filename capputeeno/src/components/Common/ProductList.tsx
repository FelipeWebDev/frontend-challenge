"use client"

import { useProducts } from "@/hooks/useProducts"

const ProductList = () => {
    const { data } = useProducts();

    return (
        <ul>
            
        </ul>
    )
}

export default ProductList;