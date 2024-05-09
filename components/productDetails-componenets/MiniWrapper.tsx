"use client";
import React, { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductReview from "./ProductReview";

const ComponentsWrapper = () => {
    const [componentsData, setComponentsData] = useState([
        {
            id: 1,
            name: "description",
            component: <ProductDescription />,
        },
        {
            id: 2,
            name: "reviews",
            component: <ProductReview />,
        },
    ]);

    let [defaultComponentDisplay, setDefaultComponentDisplay] = useState("description");

    let renderComponent = () => {
        if (defaultComponentDisplay === "description") {
            return <ProductDescription />
        }
        if (defaultComponentDisplay === "reviews") {
            return <ProductReview />
        }
    }


    return (
        <div className="mt-8  bg-[#252525]">
            <div className="flex items-center gap-4   w-full border-b border-gray-500">
                {
                    componentsData.map(component => {
                        return <button key={component.id} className={`cursor-pointer p-3 capitalize ${component.name === defaultComponentDisplay &&
                            "bg-blue-600 text-white"
                            }`}
                            onClick={() => {
                                setDefaultComponentDisplay(component.name)
                            }}
                        >{component.name}</button>
                    })
                }
            </div>

            {
                renderComponent()
            }

        </div>
    );
};

export default ComponentsWrapper;
