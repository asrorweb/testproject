import { useState } from "react";

import siteLogo from "../../img/logo.png";
import { Nav } from "./Nav";

function Header() {
    const [dropdown, setDropdown] = useState(false);
    const [menu, setMenu] = useState(false);
    return (
        <div className="fixed z-50 w-full left-0 right-0 top-0">
            <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                    <a href="#" className="flex items-center">
                        <img src={siteLogo} className="h-8 mr-3" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
                    </a>
                    <button
                        onClick={() => {
                            setMenu(!menu);
                        }}
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden bg-gray-100 outline-none ring-2 fring-gray-200 dark:text-gray-400 dark:bg-gray-700 dark:ring-gray-600"
                    >
                        <svg
                            className="w-6 h-6"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <Nav
                        dropdown={dropdown}
                        setDropdown={setDropdown}
                        media={true}
                    />
                    {menu && (
                        <Nav
                            dropdown={dropdown}
                            setDropdown={setDropdown}
                            media={false}
                        />
                    )}
                </div>

                {dropdown && (
                    <div className="absolute w-full max-md:hidden bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
                        <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                            <ul aria-labelledby="mega-menu-full-dropdown-button">
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Online Stores
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Segmentation
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Marketing CRM
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
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
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Online Stores
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Segmentation
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Marketing CRM
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul className="hidden md:block">
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Audience Management
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Creative Tools
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            Connect with third-party tools that
                                            you're already using.
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                                    >
                                        <div className="font-semibold">
                                            Marketing Automation
                                        </div>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
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
