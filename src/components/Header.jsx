import React, { useState } from "react";
import { PiBooksLight } from "react-icons/pi";
import { TiThMenuOutline } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const navList = [
        { name: "მწერლები" },
        { name: "პოეტები" },
    ];
    const [click, setClick] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(true);

    return (
        <header className="container flex justify-between items-center px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white shadow-lg overflow-hidden">
            {/*//! Logo */}
            <div className="flex items-center gap-3">
                <PiBooksLight size={40} className="text-yellow-400" />
                <h2 className="text-xl font-bold tracking-wide">Learn With Us</h2>
            </div>
            {/* //! Menu Toggle Button */}
            <TiThMenuOutline
                onClick={handleClick}
                className="sm:hidden text-white cursor-pointer"
                size={30}
            />
            {/*//! მენიუ */}
            <div
                className={`sm:hidden fixed top-0 right-0 w-1/2 h-screen z-50 bg-gray-800 text-white transition-transform duration-300 ease-in-out ${
                    click ? "translate-x-full" : "translate-x-0"
                }`}
            >
                {/*//! remove */}
                <button
                    onClick={handleClick}
                    className="absolute top-4 right-4 text-white text-2xl"
                >
                    <AiOutlineClose />
                </button>
                {/* //! Navigation Links */}
                <ul className="flex flex-col items-start gap-4 pt-20 pl-6">
                    {navList.map((item) => (
                        <li key={item.name}>
                            <a
                                onClick={closeMenu}
                                href="#"
                                className="block px-3 py-2 text-lg font-medium rounded hover:bg-gray-700 hover:text-yellow-400 transition-colors duration-200"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
