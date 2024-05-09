import React from 'react'

const ProductDescription = () => {
    return (
        <div className=" p-4">
            <div
                data-aos="fade-up"
                className="w-full tab-content-item aos-init aos-animate"
            >
                <h6 className="text-[18px] font-medium text-qblack mb-2">Introduction</h6>
                <p className="text-[15px] text-qgray text-normal mb-10">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the  standard dummy text ever since the
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries but
                    also the on leap into electronic typesetting, remaining essentially
                    unchanged. It wasn’t popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, andei more recently with desktop
                    publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    to make a type specimen book.
                </p>
                <div>
                    <h6 className="text-[18px] text-medium mb-4">Features :</h6>
                    <ul className="list-disc ml-[15px]">
                        <li className="font-normal text-qgray leading-9">
                            slim body with metal cover
                        </li>
                        <li className="font-normal text-qgray leading-9">
                            latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
                        </li>
                        <li className="font-normal text-qgray leading-9">
                            8GB DDR4 RAM and fast 512GB PCIe SSD
                        </li>
                        <li className="font-normal text-qgray leading-9">
                            NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard,
                            touchpad with gesture support
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription