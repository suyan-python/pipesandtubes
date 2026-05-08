import React from "react";

const Contact = () =>
{
    return (
        <section className="w-full bg-[#F1F4F6] px-6 py-12 md:py-24 md:px-16 lg:px-24" id="contact">

            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="flex flex-col items-center text-center font-light">

                    <p className="text-xl md:text-3xl uppercase tracking-wider text-[#F16500]">
                        Get In Touch
                    </p>

                    <h2 className="header mt-3 md:mt-5 text text-base md:text-xl  leading-tight text-[#1B2B39]">
                        Contact Our Technical Team
                    </h2>

                    {/* Orange Line */}
                    <div className="mt-5 md:mt-8 h-1 w-28  bg-[#F16500]"></div>

                </div>

                {/* Main Content */}
                <div className="mt-11 md:mt-14 grid gap-12  bg-white p-6 shadow-sm md:grid-cols-[60%_40%] md:p-12">

                    {/* Left Side - Form */}
                    <div>
                        <h3 className="header text-lg md:text-2xl uppercase text-[#1B2B39]">
                            Request a Quote
                        </h3>

                        <p className="mt-3 text-gray-600 text-xs md:text-base">
                            Fill out the form below and our team will get back
                            to you shortly.
                        </p>

                        <form className="mt-10 space-y-6 text-xs md:text-base">

                            <div className="flex justify-between gap-3 md:gap-12 ">


                                {/* Name */}
                                <div className="w-full">
                                    <label className="mb-2 block text-xs md:text-sm font-medium text-gray-700 uppercase">
                                        Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="w-full  border border-gray-300 px-5 py-4 outline-none transition duration-300 focus:border-[#F16500]"
                                    />
                                </div>

                                {/* Email */}
                                <div className="w-full">
                                    <label className="mb-2 block text-xs md:text-sm font-medium text-gray-700 uppercase">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="email@company.com"
                                        className="w-full  border border-gray-300 px-5 py-4 outline-none transition duration-300 focus:border-[#F16500]"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-2 block text-xs md:text-sm font-medium text-gray-700 uppercase">
                                    Phone Number
                                </label>

                                <input
                                    type="text"
                                    placeholder="+1 (000) 000-0000"
                                    className="w-full  border border-gray-300 px-5 py-4 outline-none transition duration-300 focus:border-[#F16500]"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="mb-2 block text-xs md:text-sm font-medium text-gray-700 uppercase">
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder="Describe your project requirements..."
                                    className="w-full  border border-gray-300 px-5 py-4 outline-none transition duration-300 focus:border-[#F16500]"
                                ></textarea>
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="w-full  bg-[#F16500] px-6 py-4 text-xs md:text-sm font-light uppercase tracking-[0.2em] text-white transition duration-300 hover:opacity-90 cursor-pointer"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                    {/* Right Side - Details */}
                    <div className=" bg-[#1B2B39] p-8 text-white md:p-10">

                        <h3 className="text-base md:text-2xl ">
                            Contact Information
                        </h3>

                        <p className="mt-4 leading-relaxed text-gray-300 font-light text-xs md:text-base">
                            Reach out to us for product specifications,
                            technical support, and industrial inquiries.
                        </p>

                        {/* Details */}
                        <div className="mt-10 space-y-8">

                            <div>
                                <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-[#F16500]">
                                    Corporate Headquarters
                                </p>

                                <p className="mt-2 text-gray-200 font-light text-xs md:text-base">
                                    -8-3-191/229/113-B, Sanjeev Reddy Nagar, Ameerpet, Hyderabad 500038
                                </p>
                            </div>

                            <div>
                                <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-[#F16500]">
                                    Direct Line
                                </p>

                                <p className="mt-2 text-gray-200 font-light text-xs md:text-base">
                                    +91 8121989906
                                </p>
                            </div>

                            <div>
                                <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-[#F16500]">
                                    Email Inquiries
                                </p>

                                <p className="mt-2 text-gray-200 font-light text-xs md:text-base">
                                    arunseamless@gmail.com
                                </p>
                            </div>

                            <div>
                                <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-[#F16500]">
                                    Business Hours
                                </p>

                                <p className="mt-2 text-gray-200 font-light text-xs md:text-base">
                                    Mon - Fri: 8:00 AM - 6:00 PM IST
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;