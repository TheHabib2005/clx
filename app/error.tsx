"use client"

import React from 'react'

const Error = ({ error, reset }: { error: any, reset: () => void }) => {

    return (
        <div className='flex items-center justify-center  text-white flex-col gap-5  py-10'>
            <h1 className='text-2xl mt-10'>Something want Wrong! </h1>
            <button className='p-2 bg-blue-600 rounded-md outline-none text-white' onClick={() => reset()}>Try Again</button>
        </div>
    )
}

export default Error