import React from "react";
import { motion } from "framer-motion";
import bg from "../assets/elements/background2.jpg";

const Hero = () =>
{
    return (
        <section
            className="relative h-screen w-full overflow-hidden bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/50" />

            {/* Animated glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl"
            />

            {/* Industrial lines */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute left-10 top-0 h-full w-px bg-white"></div>
                <div className="absolute left-24 top-0 h-full w-px bg-white"></div>
                <div className="absolute right-20 top-0 h-full w-px bg-white"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full px-6 md:px-16 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="max-w-4xl space-y-6"
                >

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="header text-3xl md:text-5xl  lg:text-7xl font-bold leading-[1.05] text-white"
                    >
                        Precision
                        <br />
                        Seamless Pipes & Tubes
                        <br />
                        for Industrial
                        <br />
                        Excellence
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="max-w-2xl text-xs md:text-base lg:text-lg leading-relaxed text-gray-300"
                    >
                        High-quality, durable, and engineered for performance.
                        We provide mission-critical piping solutions for global
                        infrastructure, energy systems, and heavy industries.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="mt-6"
                    >
                        <a href="#contact">

                            <button className="group relative overflow-hidden border border-white md:px-8 px-5  py-3 uppercase tracking-widest text-[8px] md:text-[12px] lg:text-sm text-white transition-all duration-500 hover:text-black cursor-pointer">
                                <span className="relative z-10">Contact Us</span>

                                <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-500 group-hover:translate-x-0"></span>
                            </button>
                        </a>

                    </motion.div>
                </motion.div>
            </div>

        </section>
    );
};

export default Hero;