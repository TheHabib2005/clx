import ProductDescription from '@/components/productDetails-componenets/ProductDescription'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const route = () => {
    return (
        <section className='px-4 w-full relative '>
            <div className='flex items-start 2xl:gap-6 gap-4 lg:flex-row flex-col'>
                <div className='sm:py-10 py-5 flex flex-col-reverse lg:flex-row items-start gap-x-6'>

                    <div className='flex lg:flex-col flex-row lg:p-0 pt-5 gap-3  flex-wrap'>
                        <div className='relative overflow-hidden sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] border rounded-md border-neutral-700  flex items-center justify-center cursor-pointer'>
                            <img src="https://uminex-digital.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3-1.jpg&w=1920&q=75" alt="" />
                        </div> <div className='relative overflow-hidden sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] border rounded-md border-neutral-700  flex items-center justify-center cursor-pointer'>
                            <img src="https://uminex-digital.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3-3.jpg&w=1920&q=75" alt="" />
                        </div>
                        <div className='relative overflow-hidden sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] border rounded-md border-neutral-700  flex items-center justify-center cursor-pointer'>
                            <img src="https://uminex-digital.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3-2.jpg&w=1920&q=75" alt="" />
                        </div>
                        <div className='relative overflow-hidden sm:w-[100px] sm:h-[100px] w-[70px] h-[70px] border rounded-md border-neutral-700  flex items-center justify-center cursor-pointer'>
                            <img src="https://uminex-digital.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3-1.jpg&w=1920&q=75" alt="" />
                        </div>
                    </div>
                    <div className='w-auto h-full bg-[#111111] rounded-md flex items-center justify-center'>
                        <img src="https://uminex-digital.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproducts%2Fp-3-1.jpg&w=1920&q=75" alt="" className='xl:w-[500px] md:w-[400px] w-full' />
                    </div>
                </div>
                <div className='sm:py-10 py-2 sm:px-4 p-0'>
                    <div className='flex flex-col gap-3'>
                        <Link href={"#"} className='xl:text-2xl 2xl:text-3xl text-xl'>[Sample] Chemex Coffeemaker 3 Cup consetetur sadipscing elitr</Link>
                        <div className='flex items-center gap-3 '>
                            <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg> <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg> <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg> <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg> <svg
                                aria-hidden="true"
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg> <span className='text-white bg-[#000000] w-8 h-8 rounded-md flex items-center justify-center'>5</span>

                        </div>
                        <div className='flex items-center gap-x-3'>
                            <span>Price : </span>
                            <span className='text-3xl text-blue-500'>$2500</span>
                            <span>-</span>
                            <span className='text-2xl text-gray-300 line-through'>$4000</span>
                        </div>
                        <div className='flex items-center gap-x-3'>
                            <span>Brand : </span>
                            <span className=''>Apple</span>

                        </div>
                        <div className='flex items-center gap-x-3'>
                            <span>Category : </span>
                            <span className=''>SmartPhone</span>

                        </div>



                    </div>
                    <Quantity />
                    <div className='pt-5'>
                        <button

                            className="flex items-center justify-center rounded-md bg-[#5A75FF] px-5  lg:w-full w-[200px]  py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 gap-x-3"
                        >
                            Add to cart{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className=" text-white  w-5 h-5 cursor-pointer"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </button>
                        <div className='mt-3 flex items-center gap-3  min-w-full'>
                            <button className='flex items-center gap-3 lg:w-full sm:w-[200px] rounded-sm bg-neutral-800 hover:bg-blue-600 transition-all duration-100 py-2 px-4 justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                                WishList</button>
                            <button className='flex items-center gap-3 lg:w-full sm:w-[200px] rounded-sm bg-neutral-800 hover:bg-blue-600 transition-all duration-100 py-2 px-4 justify-center'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                                Share</button>

                        </div>
                    </div>
                    <div className='flex items-center gap-5 pt-5  '>
                        <span className='flex items-center gap-3'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                        </svg>
                            <span>Tags : </span></span>

                        <div className='flex items-center gap-3 flex-wrap' >
                            <span className='py-1 px-2 border border-neutral-700 cursor-pointer capitalize rounded-md'>phone</span>
                            <span className='py-1 px-2 border border-neutral-700 cursor-pointer capitalize rounded-md'>iphone</span>
                            <span className='py-1 px-2 border border-neutral-700 cursor-pointer capitalize rounded-md'>ios</span>
                            <span className='py-1 px-2 border border-neutral-700 cursor-pointer capitalize rounded-md'>smartPhone</span>
                            <span className='py-1 px-2 border border-neutral-700 cursor-pointer capitalize rounded-md'>apple</span>


                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-neutral-800 p-3 my-10'>
                <div className='flex items-center gap-4'>
                    <button className='py-3 px-4 cursor-pointer  text-white rounded-sm bg-neutral-900'>Decsptrions</button>
                    <button>Product Review</button>
                    <button>contact Seller</button>
                </div>
                <ProductDescription />
            </div>



        </section>


    )
}

export default route

const Quantity = () => {
    return (
        <div className='w-full flex items-center gap-6 pt-5'>
            <button className='w-10 h-10  rounded-md bg-[#2e2d2d] flex items-center justify-center'><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-white"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                />
            </svg></button>
            <span className='text-xl'>4</span>
            <button className='w-10 h-10  rounded-md bg-[#2e2d2d] flex items-center justify-center'>                                                                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-white"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                />
            </svg></button>
        </div>
    )
}