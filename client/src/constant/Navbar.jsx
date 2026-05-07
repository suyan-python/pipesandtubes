import React from "react";

const Navbar = () =>
{
    return (
        <header className="top-0 left-0 z-50 w-full">
            <nav className="flex items-center justify-between px-6 py-5 md:px-16 lg:px-24">

                {/* Company Name */}
                <h1 className="text-base md:text-2xl font-semibold tracking-wide ">
                    Arun Seamless Pipe and Tubes
                </h1>

                {/* CTA Button */}
                <button className="bg-[#F16500] px-2 md:px-6 py-2 text-[10px] md:text-base font-medium text-white transition duration-300 hover:opacity-90 uppercase cursor-pointer">
                    Get a Quote
                </button>

            </nav>
        </header>
    );
};

export default Navbar;