"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const ResetFilter = () => {
    const path = usePathname();
    const router = useRouter();

    return (
        <button className='rounded-md border border-[#414040] px-4 py-1 text-lg' onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_APP_URL}/${path}`)
            setTimeout(() => {
                window.location.reload()
            }, 200)
        }}>Reset</button>
    )
}

export default ResetFilter