"use client";
import { staticData } from "@/staticData";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import QuickViewPopup from "./QuickViewPopup";
import { ProductsTYPE } from "@/constant-type";
import { calculateDiscountPrice } from "@/utils";

const FeatureProducts = () => {
    const router = useRouter();
    // fetch api from db popular products
    const [products] = useState(staticData.featureProductList);
    let [product, setProduct] = useState<any>();
    const [isQuickViewPopupOpen, setIsQuickViewPopupOpen] = useState(false);

    return (
        <div className="w-full">
            <header className="flex items-center justify-between p-3">
                <h1 className="md:text-2xl text-xl">Feature Products​</h1>
                <div
                    className="flex items-center justify-between sm:p-3 p-2 rounded-md  text-[#5A75FF] cursor-pointer bg-[#1d1d1d]"
                    onClick={() => {
                        router.push("/products/search");
                    }}
                >
                    <span>More Products</span>{" "}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4 ml-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </div>
            </header>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 place-items-center px-3">
                {products.map((product) => {
                    return (
                        <div
                            className="relative m-1 flex max-w-xs  flex-col   overflow-hidden rounded-lg  bg-[#252525] clx-wrapper "
                            key={product.id}
                        >
                            <Link
                                className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                                href={`/${product.id}`}
                            >
                                <Image
                                    src={product.thumbnail}
                                    width={100000}
                                    className="object-contain"
                                    height={1000000}
                                    alt=""
                                />
                                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                                    {product.discount_parcent}% OFF
                                </span>
                            </Link>
                            <div className="mt-4 px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl tracking-tight text-white">
                                        {product.title.substring(0, 30)}
                                        <span className="ml-5">{"..."}</span>
                                    </h5>
                                </a>
                                <div className="mt-2 mb-5 flex flex-col items-start justify-between">
                                    <p>
                                        <span className="text-2xl font-bold  text-white ">
                                            {calculateDiscountPrice(
                                                product.discount_parcent,
                                                product.price
                                            )}
                                        </span>
                                        <span className="text-sm  text-white  line-through ml-3">
                                            ${product.price}
                                        </span>
                                    </p>
                                    <div className="flex items-center mt-3">
                                        {new Array(Math.round(product.rating))
                                            .fill("")
                                            .map((star, index) => {
                                                return (
                                                    <svg
                                                        key={index}
                                                        aria-hidden="true"
                                                        className="h-5 w-5 text-yellow-300"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                );
                                            })}

                                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-black">
                                            {product.rating}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    href="/cart"
                                    className="flex items-center justify-center rounded-md bg-[#5A75FF] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 gap-x-3"
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
                                </Link>
                                <div className="absolute hidden top-5 right-5 bg-[#2b2a2a] z-1 py-4 px-4 rounded-md  items-center justify-center flex-col gap-y-5 clx">
                                    <div className="group">
                                        <div
                                            className="relative"
                                            onClick={() => {
                                                setIsQuickViewPopupOpen(true)
                                                setProduct(product)
                                                document.documentElement.style.overflow = "hidden";


                                            }}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="w-6 h-6 cursor-pointer text-white hover:text-gray-400"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            <span className="hidden quick-view-tooltip group-hover:flex p-2 bg-[#2B2A2A]  absolute left-[-125px] top-0 rounded-md w-[100px]">
                                                <div></div>
                                                Quick View
                                            </span>
                                        </div>
                                    </div>
                                    <div className="group">
                                        <div className="relative">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className=" w-6 h-6 cursor-pointer text-white hover:text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                                />
                                            </svg>
                                            <span className="hidden wishlist-tooltip group-hover:transition-all group-hover:flex group-hover:duration-100 items-center justify-center p-2 bg-[#2B2A2A]  absolute left-[-175px] text-center top-0 rounded-md w-[150px]">
                                                Add to WishList
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/*  popup model */}

            {isQuickViewPopupOpen && (
                <QuickViewPopup
                    isQuickViewPopupOpen={isQuickViewPopupOpen}
                    setIsQuickViewPopupOpen={setIsQuickViewPopupOpen}
                    product={product}
                />
            )}
        </div>
    );
};

export default FeatureProducts;
