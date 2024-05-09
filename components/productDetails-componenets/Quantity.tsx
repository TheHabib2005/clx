"use client"
import React, { useState } from 'react'

const Quantity = () => {
    const [quantity, setQuantity] = useState(1);
    return (

        <div className="flex items-center gap-x-8">
            <span>Quantity</span>
            <div className="flex items-center gap-x-8">
                <button
                    className="w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] disabled:cursor-default  disabled:bg-gray-700"
                    disabled={quantity > 1 ? false : true}
                >
                    -
                </button>
                <span>{quantity}</span>
                <button className="w-[40px] h-[40px] flex items-center justify-center text-lg font-semibold rounded-sm cursor-pointer bg-[#1D1D1D] ">
                    +
                </button>
            </div>
        </div>
    )
}

export default Quantity