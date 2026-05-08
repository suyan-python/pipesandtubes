import React from "react";

import { Factory, ShieldCheck, Ruler, Headset } from "lucide-react";

import advance from "../assets/elements/icons/advance.png";
import rigorous from "../assets/elements/icons/rigorous.png";
import precision from "../assets/elements/icons/precision.png";

const Hero3 = () =>
{

    const standards = [
        {
            icon: Factory,
            title: "Advanced Manufacturing",
            description:
                "State-of-the-art seamless pipe production engineered for strength, durability, and industrial reliability.",
        },
        {
            icon: ShieldCheck,
            title: "Rigorous Quality Control",
            description:
                "Every pipe undergoes strict inspection and testing processes to ensure precision and global compliance standards.",
        },
        {
            icon: Ruler,
            title: "Precision Engineering",
            description:
                "Manufactured with exceptional dimensional accuracy and superior tolerance for critical industrial applications.",
        },
        {
            icon: Headset,
            title: "Dedicated Support",
            description:
                "Our customer service team recognizes its commitment to your satisfaction and provides personalized support and expert advice.",
        },
    ];

    return (
        <section className="w-full bg-[#E0E3E5] px-6 py-12 md:py-24 md:px-16 lg:px-24">

            {/* Heading */}
            <div className="mx-auto max-w-4xl text-center">

                <h2 className="header mt-5 text-2xl md:text-3xl  leading-tight text-[#1B2B39]">
                    The Arun Seamless Pipe and Tubes Standard
                </h2>

                {/* Orange Line */}
                <div className="mx-auto mt-8 h-1 w-56 rounded-full bg-[#F16500]"></div>

            </div>

            {/* Cards */}
            <div className="mt-12 md:mt-20 grid gap-8 md:grid-cols-2">

                {standards.map((item, index) =>
                {

                    const Icon = item.icon;


                    return (

                        <div
                            key={index}
                            className="group  bg-white p-10 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="flex h-16 md:h-24 w-16 md:w-24 rotate-45 items-center justify-center  bg-[#1B2B39] transition duration-500 group-hover:scale-105">

                                    <Icon className="h-8 w-8 md:h-10 md:w-10 text-white -rotate-45" />

                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center space-y-4">

                                <h3 className="text-lg md:text-2xl  text-[#1B2B39]">
                                    {item.title}
                                </h3>

                                <p className="mt-5 text-xs md:text-lg leading-relaxed text-gray-500">
                                    {item.description}
                                </p>

                            </div>
                        </div>
                    );
                })}


            </div>
        </section>
    );
};

export default Hero3;