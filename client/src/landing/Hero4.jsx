import React from "react";


import { Globe } from 'lucide-react';


import icon1 from "../assets/elements/icons2/icon.png";
import icon2 from "../assets/elements/icons2/icon2.png";


const Hero4 = () =>
{
    const points = [
        {
            icon: icon1,
            text: "1. Raw Material Selection",
            description: "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
        {
            icon: icon2,
            text: "2. Heating & Piercing",
            description: "Billets are heated to high temperatures and pierced to form hollow shells (mother tubes).",
        },
        {
            icon: icon1,
            text: "Precision manufacturing with strict dimensional tolerance standards",
            description: "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
        {
            icon: icon2,
            text: "Reliable solutions for Oil & Gas, Boilers, and Heat Exchangers",
            description: "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
        {
            icon: icon1,
            text: "Advanced seamless production process without welded joints",
            description: "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
        {
            icon: icon2,
            text: "Consistent quality assurance through rigorous testing procedures",
            description: "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
        {
            icon: icon1,
            text: "Custom-engineered tube solutions for demanding environments",
            description: "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
        {
            icon: icon2,
            text: "Trusted performance across infrastructure and heavy industries",
            description: "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
    ];

    return (
        <section className="w-full bg-white px-6 py-12 md:py-20 md:px-16 lg:px-24">

            {/* Top Content */}
            <div className=" ">

                <h1 className="text-lg md:text-2xl  uppercase tracking-[0.3em] text-[#F16500]">
                    Manufacturing Process
                </h1>

                <p className="header text-xs md:text-base  uppercase tracking-widest text-[#1B2B39] pt-2">
                    Built for Strength, Designed for Precision
                </p>

                <p className="text-xs md:text-base leading-relaxed text-gray-500 font-light pt-4">
                    At Arun Seamless Pipes & Tubes, our seamless tubes are engineered for superior strength, corrosion resistance, and long service life making them ideal for critical applications across industries.
                </p>

            </div>

            {/* Bullet Grid */}
            <div className="mt-16 grid gap-6 md:grid-cols-2">

                {points.map((point, index) => (
                    <div
                        key={index}
                        className="group flex items-start gap-5  border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1  hover:shadow-lg"
                    >

                        {/* Icon */}
                        <div className="flex h-14 w-14 min-w-[56px] items-center justify-center bg-gray-100  transition duration-300 ">

                            <Globe />

                        </div>

                        <div>
                            {/* Text */}
                            <p className="header text-sm md:text-base leading-relaxed text-[#181C1E]  ">
                                {point.text}
                            </p>
                            <p className="text-sm md:text-base leading-relaxed text-[#5F5E5E] font-light">
                                {point.description}
                            </p>
                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default Hero4;