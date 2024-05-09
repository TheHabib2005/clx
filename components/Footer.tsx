import Link from 'next/link'
import React from 'react'

const Footer = async () => {

    return (
        <footer className="text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
                <div>
                    <a
                        className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
                        href="/"
                    >
                        <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-[30px] w-[30px] rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                aria-label="Acme Store logo"
                                viewBox="0 0 32 28"
                                className="h-4 w-4 fill-black dark:fill-white h-[10px] w-[10px]"
                            >
                                <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                                <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
                            </svg>
                        </div>
                        <span className="uppercase text-3xl">H&H STORE</span>
                    </a>
                </div>
                <nav className='flex flex-col sm:flex-row md:items-center gap-20 md:gap-y-0 gap-y-5'>
                    <ul className='p-0 m-0'>
                        <h1 className='text-white text-xl'>Categories</h1>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/products/t-shirt"
                            >
                                T-shirt
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/products/smartphone"
                            >
                                SmartPhone
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/products/laptop"
                            >
                                Laptops
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/products/watch"
                            >
                                Watch for Man
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/products/skincare"
                            >
                                SkinCare & Beauty
                            </Link>
                        </li>

                    </ul>
                    <ul>
                        <h1 className='text-white text-xl'>Useful Links

                        </h1>
                        <li>
                            <a
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/about"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/terms-conditions"
                            >
                                Terms &amp; Conditions
                            </a>
                        </li>
                        <li>
                            <a
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/shipping-return-policy"
                            >
                                Shipping &amp; Return Policy
                            </a>
                        </li>
                        <li>
                            <a
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/privacy-policy"
                            >
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a
                                className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300"
                                href="/frequently-asked-questions"
                            >
                                FAQ
                            </a>
                        </li>
                    </ul>

                </nav>
                <div className="md:ml-auto">
                    <a
                        className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white"
                        aria-label="Deploy on Vercel"
                        href="https://vercel.com/templates/next.js/nextjs-commerce"
                    >
                        <span className="px-3">▲</span>
                        <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
                        <span className="px-3">Deploy</span>
                    </a>
                </div>
            </div>
            <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                    <p>© 2023-2024 ACME, Inc. All rights reserved.</p>
                    <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
                    <p>Designed in California</p>
                    <p className="md:ml-auto">
                        <a href="https://vercel.com" className="text-black dark:text-white">
                            Crafted by ▲ Vercel
                        </a>
                    </p>
                </div>
            </div>
        </footer>


    )
}

export default Footer