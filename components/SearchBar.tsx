
import { ProductsTYPE } from "@/constant-type";
import useDebounce from "@/hooks/useDebounce";
import { delay } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const SearchBar = () => {
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const [inputValue, setInputValue] = useState(params.get("q") || "");
    const debounceValue = useDebounce(inputValue)
    const [searchBoxOpen, setSearchBoxOpen] = useState(false);
    const [recentBoxOpen, setRecentBoxOpen] = useState(false);
    const [itemActiveIndex, setItemActiveIndex] = useState(-1);


    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState<ProductsTYPE[]>([]);
    const containerRef = useRef<any>(null);
    const inputRef = useRef(null);

    let searchPagePath = `/search`
    let router = useRouter();
    const handleInputChange = async (event: any) => {
        setInputValue(event.target.value)
        if (event.target.value.length > 0) {
            setSearchBoxOpen(true)
            setRecentBoxOpen(false)
        } else {
            setRecentBoxOpen(true)
            setSearchBoxOpen(false)
        }
    };


    const handleInputClick = async () => {

        if (inputValue.length > 0) {
            setSearchBoxOpen(true)
            setRecentBoxOpen(false)
        } else {
            setRecentBoxOpen(true)
            setSearchBoxOpen(false)

        }
    };

    const handleInputKeyDown = (event: any) => {
        if (event.key === "ArrowDown") {
            setItemActiveIndex(prev => prev < data.length - 1 ? prev + 1 : prev)
            if (containerRef.current && itemActiveIndex > -1) {
                containerRef.current.scrollTop += 50
            }
        } else if (event.key === "ArrowUp") {
            setItemActiveIndex(prev => prev > 0 ? prev - 1 : prev)
            if (containerRef.current && itemActiveIndex > -1) {
                containerRef.current.scrollTop -= 50
            }
        }
        if (event.key === "Enter") {
            if (itemActiveIndex > -1) {
                let currentActiveItem = data.findIndex((item, index) => index === itemActiveIndex);
                handleItemClick({ value: data[currentActiveItem].title })
                setItemActiveIndex(-1)
            } else {
                handleItemClick({ value: inputValue })
            }
        }
    }


    // fetch api 

    const fetchData = async () => {
        try {
            setIsLoading(true);
            let res = await fetch("/api/allProduct", {
                method: "POST",
                body: JSON.stringify(debounceValue),
                cache: "no-cache"
            });
            let data = await res.json();
            if (data.success) {
                setData(data.data)
            } if (data.error) {
                setIsError(true)
            } else {
                setIsError(false)
            }
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            setIsError(true)
            console.log(error);
        }
    }



    const handleItemClick = (item: { value: string }) => {
        addParams("q", item.value)
        setSearchBoxOpen(false)
        setInputValue(item.value)
    }


    const addParams = (name: string, value: string) => {
        params.set(name, value)
        router.push(`${searchPagePath}?${params}`)

    }

    const deleteParams = (name: string) => {
        params.delete(name)
        router.push(`${searchPagePath}?${params}`)
    }

    useEffect(() => {
        fetchData();
    }, [debounceValue])

    window.addEventListener("click", (event: any) => {
        if (event.target.id !== "search-suggestion-content") {
            setSearchBoxOpen(false)
            setRecentBoxOpen(false)
        }
    })



    return (
        <form
            className="w-1/3 relative md:block hidden "
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input
                type="text"
                placeholder="Search for products..."
                className="text-white p-[8px] px-3 rounded-md bg-transparent border border-neutral-700 focus:border-neutral-500 outline-none min-w-full placeholder:text-neutral-400 placeholder:text-sm"

                onChange={handleInputChange}
                value={inputValue}
                id="search-suggestion-content"
                onClick={handleInputClick}
                autoComplete="off"
                onKeyDown={handleInputKeyDown}
                ref={inputRef}

            />
            {inputValue.length > 0 ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={(e) => {
                        setInputValue("");
                        setSearchBoxOpen(false);
                        deleteParams("q")
                        // inputRef.current && inputRef.current.blur()
                    }}
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

            {searchBoxOpen && (
                <div
                    id="search-suggestion-content"
                    className={`absolute z-50 top-[100%] left-0 w-full p-3 mt-3 bg-[#252424] rounded-md flex flex-col gap-y-3 items-start justify-start h-[400px] overflow-y-auto search-popup`}
                    ref={containerRef} style={{ height: '500px', overflowY: 'auto' }}
                >

                    {isLoading ? "Loading" : data.map((item, index) => {
                        return <div key={item.id}
                            onClick={() => handleItemClick({
                                value: item.title
                            })}
                            id="search-suggestion-content" className={`p-2 ${itemActiveIndex === index ? "bg-[#2563EB]" : "bg-[#1a1a1a]"} w-full  cursor-pointer rounded-md hover:bg-[#2563EB] transition-all duration-150 `}>
                            {item.title}
                        </div>
                    })}

                    {data.length === 0 && !isLoading && <div>no result found</div>}
                </div>
            )}


            {recentBoxOpen && (
                <div
                    id="search-suggestion-content"
                    className={`absolute z-50 top-[100%] left-0 w-full p-3 mt-3 bg-[#252424] rounded-md flex flex-col gap-y-3 items-start justify-start h-[400px] overflow-y-auto`}>
                    {/* 
                    {data.map((item) => {
                        return <div key={item.id}
                            onClick={() => handleItemClick({
                                value: item.title
                            })}
                            id="search-suggestion-content" className="p-2 bg-[#1a1a1a] w-full  cursor-pointer rounded-md hover:bg-[#2563EB] transition-all duration-150">
                            {item.title}
                        </div>
                    })} */}
                    recent items

                </div>
            )}

        </form>
    );
};

export default SearchBar;
