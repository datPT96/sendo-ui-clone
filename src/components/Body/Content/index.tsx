import React from 'react'
import SortProduct from './SortProduct'
import ProductCard from './ProductCard'
import { data } from '@/data/products'
import { Link } from 'react-router-dom'

const Contents = () => {
    return (
        <div className="flex flex-col min-h-[90vh] w-full overflow-hidden">
            <SortProduct />
            <div className="mt-[1.6rem] grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 w-full">
                {/* <ProductCard /> */}
                {data.map((product, index) => {
                    if (product.type === 'SKU') {
                        return (
                            <div key={index} className="p-[8px] w-full">
                                <Link to="/">
                                    <div className="">
                                        <ProductCard product={product} />
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    return null
                })}
            </div>
            <div className="flex justify-center pt-[8px] pb-[24px]">
                <button className="px-[10px] py-[16px] basis-2/6 bg-white">
                    <span className="text-base font-bold">Xem them</span>
                </button>
            </div>
        </div>
    )
}

export default Contents
