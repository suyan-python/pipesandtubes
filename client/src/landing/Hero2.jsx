import React from "react";
import pipeImg from "../assets/elements/pipe1.webp";

const Hero2 = () =>
{
    return (
        <section className="w-full bg-white px-6 py-10 md:px-16 lg:px-24">

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



            <div className="max-w-7xl mx-auto">


                {/* Product Segment Intro */}
                <div className="mt-16 md:mt-28 ">

                    <h3 className="text-2xl md:text-3xl font- text-[#F16500] font-medium">
                        Our Product Segments
                    </h3>

                    <p className="mt-6 text-xs md:text-lg leading-relaxed text-gray-500 font-bold tracking-wide">
                        At Arun Seamless Pipes & Tubes, we deliver high-strength
                        seamless tubes engineered for demanding industrial
                        applications.
                    </p>
                </div>

                {/* Product Rows */}
                <div className="mt-20 space-y-12">

                    {/* Row 1 */}
                    <div className="grid items-center gap-10 rounded-2xl border border-gray-200 p-6 md:grid-cols-[30%_70%] md:p-10">

                        {/* Image */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={pipeImg}
                                alt="Industrial Pipe"
                                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="mb-3 text-sm uppercase tracking-[0.3em] text-[#F16500] font-semibold">
                                Oil Country Tubular Goods
                            </h1>

                            <p className="mt-5 text-xs md:text-lg leading-relaxed text-gray-600">
                                Our OCTG solutions are engineered for the oil and gas exploration and production industry, where performance under extreme pressure and corrosive environments is critical.
                                The range includes: <br />
                                <b> • Drill Pipes: </b>  Built to withstand high torque, axial loads, and internal pressure during drilling operations <br />
                                <b> • Casing Pipes: </b>  Designed to maintain borehole stability and resist external and internal pressures <br />
                                <b> • Tubing Pipes: </b>  Used for efficient transportation of oil and gas from the well <br />
                                Manufactured through a seamless process, our OCTG pipes offer superior strength, reliability, and resistance to corrosion, making them ideal for harsh operating conditions.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid items-center gap-10 rounded-2xl border border-gray-200 p-6 md:grid-cols-[30%_70%] md:p-10">

                        {/* Image */}
                        <div className="overflow-hidden rounded-xl">
                            <img
                                src={pipeImg}
                                alt="Industrial Pipe"
                                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                            />
                        </div>

                        {/* Content */}
                        <div>
                            <h1 className="mb-3 text-sm uppercase tracking-[0.3em] text-[#F16500] font-semibold">
                                Boiler Tubes
                            </h1>

                            <p className="mt-5 text-xs md:text-lg leading-relaxed text-gray-600">
                                Our seamless boiler tubes are produced from high-quality alloy steel billets, ensuring exceptional performance in high-temperature and high-pressure environments.
                                These tubes are widely used in: Boilers, Heat Exchangers, Super Heaters, Condensers, and Structural & General Engineering applications.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero2;