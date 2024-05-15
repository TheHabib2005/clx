import { ProductsTYPE } from '@/constant-type'
import { calculateDiscountPrice } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
interface Props {
    isQuickViewPopupOpen: boolean
    setIsQuickViewPopupOpen: React.Dispatch<React.SetStateAction<boolean>>
    product: ProductsTYPE
}
const QuickViewPopup = ({ isQuickViewPopupOpen, setIsQuickViewPopupOpen, product }: Props) => {

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth < 768) {
                setIsQuickViewPopupOpen(false)
            }
            else if (isQuickViewPopupOpen) {
                setIsQuickViewPopupOpen(true)
            }
        }
        )
    }, [])
    // useEffect(() => {
    //     // const handleDisableScroll = (event: any) => {
    //     //     if (isQuickViewPopupOpen) {
    //     //         event.preventDefault()
    //     //     }
    //     // }
    //     // if (isQuickViewPopupOpen) {
    //     //     document.documentElement.style.overflow = "hidden";
    //     //     window.addEventListener("scroll", handleDisableScroll, { passive: false })
    //     // } else {
    //     //     document.documentElement.style.overflow = "auto";
    //     //     window.removeEventListener("scroll", handleDisableScroll)
    //     // }

    //     // return () => {
    //     //     window.removeEventListener("scroll", handleDisableScroll)
    //     // }
    //     if (isQuickViewPopupOpen) {
    //         document.documentElement.classList.add("quickview-popup")
    //     } else {
    //         document.documentElement.classList.remove("quickview-popup")
    //     }
    // }, [isQuickViewPopupOpen, setIsQuickViewPopupOpen])


    return (
        <div className='fixed top-0 left-0  z-[1] w-full h-screen flex items-center justify-center'
        >
            <div className='fixed top-0 left-0 bg-black/40 z-[1] w-full h-screen flex items-center justify-center' onClick={() => {
                setIsQuickViewPopupOpen(false)
                document.documentElement.style.overflow = "auto";
            }} >

            </div>

            <div className='2xl:w-[900px] w-[80%] z-[1000] p-5 rounded-md bg-[#181818] relative'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"

                    className="w-6 h-6 absolute right-3 top-3  cursor-pointer text-white"
                    onClick={() => {
                        setIsQuickViewPopupOpen(false)
                        document.documentElement.style.overflow = "auto";

                    }}
                >
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
                <div className='flex gap-5 items-start z-[1]'>
                    <div className='w-[40%] group relative '>
                        <img src={product.thumbnail} alt="product-image" className='2xl:w-[400px] w-[300px] rounded-md' />
                        <button className='w-full p-3 bg-[#2563EB] text-white cursor-pointer rounded-md   mt-3 mx-auto   z-[1] group-hover:inline-block'>View Details</button>
                    </div>
                    <div className='w-[70%] flex flex-col gap-y-3'>
                        <Link href={"#"} className='text-2xl capitalize hover:text-blue-600'>
                            {product.title}
                        </Link>
                        <div className='flex items-center gap-2'>
                            {[...Array(5)].map((_, i) => (
                                <span key={i} >
                                    {Math.round(product.rating) > i ? (
                                        <AiFillStar className='text-[#FEF08A] text-lg' />
                                    ) : (
                                        <AiOutlineStar className='text-[#FEF08A] text-lg' />
                                    )}
                                </span>
                            ))}
                        </div>
                        <p>

                            <span className='text-blue-600 text-2xl'> {calculateDiscountPrice(
                                product.discount_parcent,
                                product.price
                            )}</span> -  <span className='line-through text-gray-600 text-2xl'>{product.price}</span>

                        </p>
                        <div>
                            <p>
                                Our exclusive collection of  JavaScript Developer T-shirts is specially designed for software developers! These tees are crafted with utmost care using 90% cotton & 10% other materials, ensuring maximum quality and comfort.
                            </p>
                        </div>
                        <Quantity />
                        <div className='flex items-center gap-4'>
                            <button className='px-4 py-3 cursor-pointer rounded-md text-white bg-[#2563EB] capitalize'>add to cart</button>
                            <button className='px-4 py-3 cursor-pointer rounded-md text-white bg-[#db2828] capitalize'>buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuickViewPopup




const Quantity = () => {
    return (
        <div className='w-full flex items-center gap-6'>
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