import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = async () => {

    return (
        <footer className="text-sm text-neutral-500 dark:text-neutral-400">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-6 text-sm md:flex-row md:gap-12 md:px-4 min-[1320px]:px-0 dark:border-neutral-700">
                <div className=''>
                    <Link
                        className="flex items-center gap-2 text-black md:pt-1 dark:text-white"
                        href="/"
                    >
                        <Image
                            className='sm:w-[130px] w-[100px]'
                            width={130}
                            height={200}
                            alt='logo'
                            src={"/logo.png"}
                        />
                    </Link>
                </div>
                <nav className='flex flex-col sm:flex-row md:items-start gap-20 md:gap-y-0 gap-y-5'>
                    <ul className='p-0 m-0'>
                        <h1 className='text-[#cecece] text-xl'>Categories</h1>
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
                        <h1 className='text-[#cecece] text-xl'>Useful Links

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

            </div>
            <div className="border-t border-neutral-200 py-6 text-sm dark:border-neutral-700">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4 min-[1320px]:px-0">
                    <p>© 2023-2024 ACME, Inc. All rights reserved.</p>

                </div>
            </div>
        </footer>


    )
}

export default Footer