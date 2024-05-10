import React from 'react'

const MobileSearchBar = () => {
    return (
        <form
            className="w-full relative block mt-5"
            onSubmit={(e) => {
                e.preventDefault();

            }}
        >
            <input
                type="text"
                placeholder="Search for products..."
                className="text-white p-[8px] px-3 rounded-md bg-transparent border border-neutral-700 focus:border-neutral-500 outline-none min-w-full placeholder:text-neutral-400 placeholder:text-sm"

            />
            {0 > 0 ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"

                    className="w-4 h-4 absolute right-3 top-[30%]  cursor-pointer text-white"
                >
                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4 absolute right-3 top-[30%] text-white"
                >
                    <path
                        fillRule="evenodd"
                        d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                        clipRule="evenodd"
                    />
                </svg>
            )}



            {/* {recentBoxOpen && recentSearch.length > 0 && (
                <div className="absolute z-50 top-[100%] left-0 w-full p-3 mt-3 bg-[#252424] rounded-md flex flex-col gap-y-3 items-start justify-start">
                    {
                        recentSearch.map((item: any, index: number) => {
                            return <div key={item.value}
                                onClick={(e) => {

                                    handleSearchItemClick({ name: item.value, index })
                                    setRecentBoxOpen(false)
                                }}
                                className="p-3 bg-[#313030] text-white rounded-md cursor-pointer w-full flex items-center justify-between "><span>{item.value}</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        removeSerchHistry(index)
                                    }}
                                >
                                    <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
                                </svg>
                            </div>
                        })
                    }


                </div>
            )} */}
        </form>
    )
}

export default MobileSearchBar