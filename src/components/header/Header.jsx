import { useState } from "react";

import siteLogo from "../../img/logo.png";

function Header() {
    const [dropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState(false);
    return (
        <div>
            <nav class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="https://flowbite.com" class="flex items-center">
                        <img src={siteLogo} class="h-8 mr-3" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <button
                        onClick={() => {
                            setMenu(!menu);
                        }}
                        type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 outline-none ring-2 fring-gray-200 dark:text-gray-400 dark:bg-gray-700 dark:ring-gray-600"
                    >
                        <svg
                            class="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    {!menu && (
                        <div class="items-center justify-between w-full md:flex md:w-auto md:order-1">
                            <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                                <li>
                                    <a
                                        href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                        aria-current="page"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li onClick={() => setDropdown(!dropdown)}>
                                    <button class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                        Company
                                        <svg
                                            class="w-5 h-5 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
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
                                        <li className="border-b-[1px] py-2">
                                            Online stores
                                        </li>
                                        <li className="border-b-[1px] py-2">
                                            Audience Management
                                        </li>
                                        <li className="border-b-[1px] py-2">
                                            Segmentation
                                        </li>
                                        <li className="border-b-[1px] py-2">
                                            Marketing CRM
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Marketplace
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Resources
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
                {dropdown && (
                    <div class="mt-1 max-md:hidden bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
                        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                            <ul aria-labelledby="mega-menu-full-dropdown-button">
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Online Stores
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Segmentation
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Marketing CRM
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Online Stores
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Segmentation
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Marketing CRM
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul class="hidden md:block">
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Audience Management
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Creative Tools
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div class="font-semibold">
                                            Marketing Automation
                                        </div>
                                        <span class="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Header;
