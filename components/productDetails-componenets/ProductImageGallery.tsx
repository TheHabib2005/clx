"use client"
import { ProductsTYPE } from '@/constant-type';
import React, { useState } from 'react'
import BreadGrum from '../BreadGrum';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
interface IProps {
    product: ProductsTYPE
}
const ProductImageGallery = ({ product }: IProps) => {
    const [currentDisplayimage, setCurrentDisplayImage] = useState(
        product.thumbnail
    );
    const [currentDisplayimageActive, setCurrentDisplayImageActive] = useState(0);
    const router = useRouter()
    return (
        <div className="lg:w-[40%] p-2">
            <div className=" md:hidden block mb-5  ">
                <BreadGrum />
            </div>

            <div className="w-full ">
                <button onClick={() => router.back()}>back</button>
                <Image
                    className="rounded-sm "
                    src={currentDisplayimage}
                    width={5000000}
                    height={5000000}
                    alt=""
                />
            </div>
            <div className="flex items-center mt-3 gap-x-3 w-full ">
                {product?.images?.map((image: string, index: number) => {
                    return (
                        <Image
                            key={index}
                            className={`rounded-sm cursor-pointer ${currentDisplayimageActive === index
                                ? "border-2 border-blue-700"
                                : ""
                                }`}
                            src={image}
                            width={80}
                            height={80}
                            alt=""
                            onClick={() => {
                                setCurrentDisplayImageActive(index)
                                setCurrentDisplayImage(image)
                            }}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default ProductImageGallery