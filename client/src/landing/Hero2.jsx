import React from "react";
import { motion } from "framer-motion";

import pipeImg from "../assets/elements/pipe1.webp";

const Hero2 = () =>
{
    return (
        <section className="w-full  px-6 py-10 md:px-16 lg:px-24">

            {/* Top Content */}
            <div className=" items-start ">

                {/* Left */}
                <div>
                    <h2 className="header text-xl md:text-2xl tracking-wider text-[#1B2B39]">
                        Seamless Pipe Applications
                    </h2>

                    <div className="mt-3 font-light">
                        <p className="text-xs md:text-lg leading-relaxed text-[#5F5E5E]">
                            Seamless tubes are high-strength steel pipes designed
                            for extreme conditions such as oil and gas transport.
                            Manufactured by extruding solid billets without welding,
                            they offer superior durability, uniform structure, and
                            high-pressure resistance.
                        </p>

                        <p className="mt-6 text-xs md:text-lg leading-relaxed text-[#5F5E5E]">
                            Available in sizes from 1/8" to 26" OD, they meet
                            stringent tolerance standards and are widely used across
                            industries including Oil & Gas, automotive,
                            hydraulics, boilers, heat exchangers, railways, and
                            structural engineering.
                        </p>
                    </div>
                </div>

            </div>


            <div className="relative max-w-xl md:max-w-7xl mx-auto overflow-hidden">

                {/* Product Segment Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative mt-8 md:mt-16"
                >

                    <motion.h3
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.7 }}
                        className="text-2xl md:text-3xl text-[#F16500] font-medium"
                    >
                        Our Product Segments
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-6 text-xs md:text-lg leading-relaxed text-gray-500 font-bold tracking-wide "
                    >
                        At Arun Seamless Pipes & Tubes, we deliver high-strength
                        seamless tubes engineered for demanding industrial
                        applications.
                    </motion.p>

                    {/* Animated Line */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "120px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="mt-8 h-[3px] bg-[#F16500] rounded-full"
                    />
                </motion.div>

                {/* Product Rows */}
                <div className="mt-20 space-y-12">

                    {/* Row 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -6 }}
                        className="group relative grid items-center gap-10 rounded-2xl border border-gray-200 bg-white/70 p-6  transition duration-500 md:grid-cols-[30%_70%] md:p-10"
                    >

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F16500]/0 via-[#F16500]/5 to-transparent opacity-0 transition duration-700 group-hover:opacity-100"></div>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-xl">
                            <motion.img
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.7 }}
                                src={pipeImg}
                                alt="Industrial Pipe"
                                className="h-full w-full object-cover"
                            />

                            {/* Floating shine */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-1000 group-hover:translate-x-full"></div>
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <h1 className="mb-3 text-sm uppercase tracking-[0.3em] text-[#F16500] font-semibold">
                                Oil Country Tubular Goods
                            </h1>

                            <p className="mt-5 text-xs md:text-lg leading-relaxed text-gray-600">
                                Our OCTG solutions are engineered for the oil and gas exploration and production industry, where performance under extreme pressure and corrosive environments is critical.
                                The range includes: <br />
                                <b> • Drill Pipes: </b> Built to withstand high torque, axial loads, and internal pressure during drilling operations <br />
                                <b> • Casing Pipes: </b> Designed to maintain borehole stability and resist external and internal pressures <br />
                                <b> • Tubing Pipes: </b> Used for efficient transportation of oil and gas from the well <br />
                                Manufactured through a seamless process, our OCTG pipes offer superior strength, reliability, and resistance to corrosion, making them ideal for harsh operating conditions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Row 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{ y: -6 }}
                        className="group relative grid items-center gap-10 rounded-2xl border border-gray-200 bg-white/70 p-6  transition duration-500 md:grid-cols-[30%_70%] md:p-10"
                    >

                        {/* Hover Gradient */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#1B2B39]/0 via-[#1B2B39]/5 to-transparent opacity-0 transition duration-700 group-hover:opacity-100"></div>

                        {/* Image */}
                        <div className="relative overflow-hidden rounded-xl">
                            <motion.img
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.7 }}
                                src={pipeImg}
                                alt="Industrial Pipe"
                                className="h-full w-full object-cover"
                            />

                            {/* Shine */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-1000 group-hover:translate-x-full"></div>
                        </div>

                        {/* Content */}
                        <div className="relative">
                            <h1 className="mb-3 text-sm uppercase tracking-[0.3em] text-[#F16500] font-semibold">
                                Boiler Tubes
                            </h1>

                            <p className="mt-5 text-xs md:text-lg leading-relaxed text-gray-600">
                                Our seamless boiler tubes are produced from high-quality alloy steel billets, ensuring exceptional performance in high-temperature and high-pressure environments.
                                These tubes are widely used in: Boilers, Heat Exchangers, Super Heaters, Condensers, and Structural & General Engineering applications.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>

        </section>
    );
};

export default Hero2;