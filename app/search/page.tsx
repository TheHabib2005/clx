import BrandLists from '@/components/BrandLists'
import BreadGrum from '@/components/BreadGrum'
import CardWrapper from '@/components/CardWrapper'
import CategoriesList from '@/components/CategoriesList'
import LayoutShiftIcon from '@/components/LayoutShiftIcon'
import Pagination from '@/components/Pagination'
import PriceRange from '@/components/PriceRange'
import ProductCard from '@/components/ProductCard'
import RatingStar from '@/components/RatingStar'
import ResetFilter from '@/components/ResetFilter'
import SortDropDownBox from '@/components/SortDropDownBox'
import { staticData } from '@/staticData'
import React from 'react'

const page = () => {
    return (
        <div className='flex items-start gap-4  mb-10  px-4 overflow-x-hidden' >

            <div className=' 2xl:w-[25%] md:w-[30%] lg:block hidden  bg-[#1d1d1d] rounded-md pt-4'>
                <header className='flex items-center justify-between px-4 '>
                    <h1>Filters</h1>
                    <ResetFilter />
                </header>
                <CategoriesList />
                <BrandLists />
                <RatingStar />
                <PriceRange />
            </div>
            <div className=' 2xl:w-[75%]  w-full bg-[#1d1d1d]  rounded-md pb-5 px-4'>
                <header className="flex items-center justify-between  mt-3">
                    <BreadGrum />
                    <div className='flex items-center justify-between '>
                        <LayoutShiftIcon />
                        <SortDropDownBox />
                    </div>
                </header>

                <div className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-3  pb-5  ">
                    {
                        staticData.featureProductList.map(prod => {
                            return <ProductCard key={prod.id} product={prod} />
                        })
                    }
                </div>
                <Pagination paginationItems={6} />
            </div>

        </div>
    )
}

export default page

