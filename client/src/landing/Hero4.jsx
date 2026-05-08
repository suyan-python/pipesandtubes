import React from "react";
import { Globe } from 'lucide-react';


import
{
    ShieldCheck,
    Flame,
    CircleDashed,
    Thermometer,
    Sparkles,
    ScanLine,
    Cog,
    Truck,
} from "lucide-react";


const Hero4 = () =>
{


    const points = [
        {
            icon: ShieldCheck,
            text: "1. Raw Material Selection",
            description:
                "High-quality carbon steel and alloy steel billets are selected to ensure strength and durability.",
        },
        {
            icon: Flame,
            text: "2. Heating & Piercing",
            description:
                "Billets are heated to high temperatures and pierced to form hollow shells (mother tubes).",
        },
        {
            icon: CircleDashed,
            text: "3. Tube Formation & Drawing",
            description:
                "The hollow tubes are processed through single or multiple drawing stages to achieve required size, thickness, and precision.",
        },
        {
            icon: Thermometer,
            text: "4. Heat Treatment",
            description:
                "Tubes are annealed to enhance mechanical properties and ensure structural consistency.",
        },
        {
            icon: Sparkles,
            text: "5. Surface Treatment",
            description:
                "Pickling, phosphating, and lubrication are applied to improve finish and prepare for further processing.",
        },
        {
            icon: ScanLine,
            text: "6. Finishing & Straightening",
            description:
                "Tubes are straightened, cleaned, and cut to exact specifications.",
        },
        {
            icon: Cog,
            text: "7. Advanced Processing Methods",
            description:
                "Manufactured using techniques such as Plug Mill, Mandrel Mill, PQF, and Pilger Mill for superior quality and uniformity.",
        },
        {
            icon: Truck,
            text: "8. Quality Testing & Dispatch",
            description:
                "Each tube undergoes strict quality checks, marking, and protective coating before bundling and dispatch.",
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

                {points.map((point, index) =>
                {
                    const Icon = point.icon;

                    return (
                        <div
                            key={index}
                            className="group flex items-start gap-5  border border-gray-200 bg-white p-6 transition duration-300 hover:-translate-y-1  hover:shadow-lg"
                        >

                            {/* Icon */}
                            <div className="flex h-14 w-14 min-w-[56px] items-center justify-center bg-gray-100  transition duration-300 ">

                                <Icon className="h-6 w-6 text-[#181C1E]" />

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
                    );
                })}

            </div>
        </section>
    );
};

export default Hero4;