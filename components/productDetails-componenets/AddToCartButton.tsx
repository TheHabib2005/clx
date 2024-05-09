"use client"
import { ProductsTYPE } from '@/constant-type'
import { useGlobalTempState } from '@/zustant-store/globalTempStore'
import { useCartStore } from '@/zustant-store/useCartStore'
import React from 'react'
interface IProps {
    product: ProductsTYPE
}
const AddToCartButton = ({ product }: IProps) => {

    const { cart, ProductaddToCart } = useCartStore()
    const { setIsCartBarOpen } = useGlobalTempState()

    const handleAddToCart = async (product: any) => {
        let payload = {
            id: parseInt(product.id),
            title: product.title,
            productImage: product.thumbnail,
            price: product.price,
            stringPrice: product.stringPrice,
            quantity: product.quantity,
            category: product.category

        };
        ProductaddToCart(payload)
        setIsCartBarOpen(true)
        //save data in database
        updateUserCart(userId, cart)
    }
    let userId = 1847958548;


    const updateUserCart = async (userId: number, cart: any[]) => {
        //save data in user cart database
    }

    return (
        <div className="flex  gap-x-10 items-center relative ">
            {
                <button

                    className="w-[170px] bg-[#2562E7] p-3 rounded-md capitalize"
                    onClick={() => handleAddToCart(product)}
                >
                    add to cart
                </button>
            }
        </div>
    )
}

export default AddToCartButton