"use client"
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const ResetFilter = () => {
    const path = usePathname();
    const router = useRouter();

    return (
        <button className='text-sm text-neutral-300 hover:text-neutral-200 ' onClick={() => {
            router.push(`${process.env.NEXT_PUBLIC_APP_URL}/${path}`)
            setTimeout(() => {
                window.location.reload()
            }, 200)
        }}>CLEAR ALL</button>
    )
}

export default ResetFilter