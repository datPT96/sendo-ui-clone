import React, { ReactNode, createContext, useReducer } from 'react'

import { ProductState, filterReducer } from '@/reducers/ProductReducer'
import { data as productsData } from '@/data/products'
import { FilterActionType } from '@/reducers/type'

interface ProductContextProps {
    children: ReactNode
}

interface ProductContextDefault {
    products: ProductState
    filterProduct: () => void
}

const { GET_FILTER_PRODUCT } = FilterActionType

const productsDefault: ProductState = []

export const ProductContext = createContext<ProductContextDefault>({
    products: productsDefault,
    filterProduct: () => {},
})

const ProductContextProvider = ({ children }: ProductContextProps) => {
    const [products, dispatch] = useReducer(filterReducer, productsDefault)

    const filterProduct = () => {
        let productList = productsData
        dispatch({
            type: GET_FILTER_PRODUCT,
            payload: [...productList],
        })
    }

    const productsContextData = {
        products,
        filterProduct,
    }

    return (
        <ProductContext.Provider value={productsContextData}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider
