import React from "react";

import icon1 from "../assets/elements/icons/footer1.png";
import icon2 from "../assets/elements/icons/footer2.png";

const Footer = () =>
{
    return (
        <footer className="w-full bg-[#1B2B39] px-6 py-14 text-white md:px-16 lg:px-24">

            {/* Top Section */}
            <div className="flex flex-col gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start lg:justify-between">

                {/* Left */}
                <div className="max-w-xl">

                    <h2 className="header text-lg md:text-3xl font-medium">
                        Arun Seamless Pipe and Tubes Manufacturing
                    </h2>

                    <p className="mt-5 text-xs md:text-base leading-relaxed text-[#94A3B8]">
                        Advanced seamless pipe manufacturing for high-
                        stakes engineering projects worldwide.
                    </p>

                </div>

                {/* Center */}
                <div className="flex flex-col gap-4">

                    <h3 className="text-base md:text-lg font-semibold">
                        Quick Links
                    </h3>

                    <button className="w-fit text-left text-[#94A3B8] text-xs md:text-base transition duration-300 hover:text-[#F16500]">
                        Privacy Policy
                    </button>

                </div>

                {/* Right */}
                <div>

                    <h3 className="text-base md:text-lg font-semibold">
                        Connect With Us
                    </h3>

                    <div className="mt-5 flex items-center gap-4">

                        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:border-[#F16500] hover:bg-[#F16500]">
                            <img
                                src={icon1}
                                alt="Social Icon"
                                className="h-3 md:h-5 w-5 md:w-5 object-contain"
                            />
                        </button>

                        <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:border-[#F16500] hover:bg-[#F16500]">
                            <img
                                src={icon2}
                                alt="Social Icon"
                                className="h-3 md:h-5 w-5 md:w-5 object-contain"
                            />
                        </button>

                    </div>

                </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-8 flex flex-col gap-4 text-xs md:text-sm text-[#94A3B8] md:flex-row md:items-center md:justify-between">

                <p>
                    © 2026 Arun Seamless Pipe and Tubes. All rights reserved.
                </p>

                <p>
                    Engineered for Strength. Built for Industry.
                </p>

            </div>

        </footer>
    );
};

export default Footer;