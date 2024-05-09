"use client"
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { ProductsApi } from '@/ProductApi'
import SkelectionsLoader from './SkelectionsLoader'
import { useLayoutSwitcherState } from '@/zustant-store/globalTempStore'
import useFetchProduct from '@/hooks/useFetchProduct'
import { useSearchParams } from 'next/navigation'
import Pagination from './Pagination'

const CardWrapper = ({ category }: { category?: string }) => {
    let searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);

    let categoryQuery = category ? [category] : params.get("category")?.split(" ")
    const { isFetchingProduct, products, isFetchingError } = useFetchProduct(categoryQuery)
    const { isGrid, flexClass, girdClass } = useLayoutSwitcherState()
    console.log(products);
    let per_page = 10
    let [paginationItems] = useState(Math.round(products.length / per_page));
    console.log(paginationItems);

    // const [products, setProducts] = useState(ProductsApi)
    if (isFetchingProduct) {
        return <SkelectionsLoader />
    }
    return (
        <>
            {
                products && products.length > 0 ? <div className={`${isGrid ? girdClass : flexClass}`}>
                    {
                        products.map((product) => {
                            return <ProductCard product={product} key={product.id} />
                        })
                    }
                </div> : isFetchingError.error === true ? <div className=' py-6  text-white text-3xl flex items-center justify-center flex-col '>
                    <h1 className='text-center'>SomeThing Want Wrong 😒</h1>
                    <button className='mt-5 p-2 rounded-md cursor-pointer text-lg bg-[#000AFF]' onClick={() => {
                        window.location.reload()
                    }}>Try Again</button>
                </div> : <div className=' py-6  text-white text-3xl'>
                    <h1 className='text-center'>No Product Found 😒</h1>
                </div>
            }


            {products && products.length > 0 && <Pagination paginationItems={paginationItems} />}

        </>
    )
}

export default CardWrapper