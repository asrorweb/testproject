import React from "react";

export const Nav = ({ setDropdown, dropdown, media }) => {
    return (
        <div
            className={
                media
                    ? "max-md:hidden items-center justify-between w-full md:flex md:w-auto md:order-1"
                    : "md:hidden items-center justify-between w-full  md:w-auto md:order-1"
            }
        >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 border-b hover:text-green-600 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:lue-700 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-green-600 md:dark:hover:bg-transparent dark:border-gray-700"
                        aria-current="page"
                    >
                        Home
                    </a>
                </li>
                <li onClick={() => setDropdown(!dropdown)}>
                    <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-green-600 md:dark:hover:bg-transparent dark:border-gray-700">
                        Company
                        <svg
                            className="w-5 h-5 ml-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>

                    <ul
                        className={
                            dropdown
                                ? "pl-5 py-3 md:hidden max-h-[9999px] visible opacity-100 dark:text-white"
                                : "max-h-0 md:hidden invisible opacity-0"
                        }
                    >
                        <li className="border-b-[1px] py-2">Online stores</li>
                        <li className="border-b-[1px] py-2">
                            Audience Management
                        </li>
                        <li className="border-b-[1px] py-2">Segmentation</li>
                        <li className="border-b-[1px] py-2">Marketing CRM</li>
                    </ul>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 text-gray-900 border-b hover:text-green-600 border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-green-600 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Marketplace
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 hover:text-green-600 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-green-600 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Resources
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        className="block py-2 pl-3 pr-4 hover:text-green-600 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white md:dark:hover:text-green-600 dark:hover:bg-gray-700 dark:hover:text-green-600 md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};
