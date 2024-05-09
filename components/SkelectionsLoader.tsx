import React from 'react'
import Skelection from './Skelection'
import { HashLoader } from 'react-spinners'

const SkelectionsLoader = () => {
    return (
        <div className='px-5 py-5 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
            {
                new Array(20).fill("").map((item) => {
                    return <div className='bg-[#252525] rounded-sm p-5 h-[400px]' key={item}> <Skelection /></div>
                })
            }
            {/* <div className='w-full h-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-black/30 '>
                <HashLoader color="#000AFF" />

            </div> */}
        </div>
    )
}

export default SkelectionsLoader