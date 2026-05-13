import React, { useState } from "react";

import icon1 from "../assets/elements/icons/footer1.png";
import icon2 from "../assets/elements/icons/footer2.png";
import { MessageSquare, Network, Phone } from "lucide-react";

const Footer = () =>
{
    const [showPrivacy, setShowPrivacy] = useState(false);

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

                    <button
                        onClick={() => setShowPrivacy(true)}
                        className="w-fit text-left text-[#94A3B8] text-xs md:text-base transition duration-300 hover:text-[#F16500] cursor-pointer"
                    >
                        Privacy Policy
                    </button>

                </div>

                {/* Right */}
                <div>

                    <h3 className="text-base md:text-lg font-semibold">
                        Connect With Us
                    </h3>


                    <div className="mt-5 flex items-center gap-4">

                        {/* Call Icon */}
                        <a href="#contact">

                            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:border-[#F16500] hover:bg-[#F16500] cursor-pointer">
                                <Network className="h-5 w-5 text-white" />

                            </button>
                        </a>

                        <a href="#contact">
                            {/* Message Icon */}
                            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:border-[#F16500] hover:bg-[#F16500] cursor-pointer">
                                <MessageSquare className="h-5 w-5 text-white" />
                            </button>
                        </a>

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

            {showPrivacy && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">

                    <div className="w-full max-w-3xl rounded-2xl bg-white p-6 md:p-10 relative">

                        {/* Close Button */}
                        <button
                            onClick={() => setShowPrivacy(false)}
                            className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1B2B39]">
                            Privacy Policy
                        </h2>

                        <div className="mt-6 max-h-[70vh] overflow-y-auto pr-2 text-sm md:text-base text-gray-700 leading-relaxed space-y-8">

                            {/* Intro */}
                            <section>
                                <p className="text-gray-600">
                                    Welcome to <span className="font-semibold text-[#1B2B39]">Arun Seamless</span>.
                                    We value your privacy and are committed to protecting any personal information you share with us through our website.
                                </p>

                                <p className="mt-3 text-gray-600">
                                    This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or contact us through our online forms.
                                </p>
                            </section>

                            {/* Section 1 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    1. Information We Collect
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    We may collect the following information when you interact with our website:
                                </p>

                                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-600">
                                    <li>Name</li>
                                    <li>Email address</li>
                                    <li>Phone number</li>
                                    <li>Company name</li>
                                    <li>Inquiry or message details</li>
                                    <li>Any information submitted through contact forms</li>
                                </ul>

                                <p className="pt-3 text-gray-600">
                                    We may also collect non-personal information such as:

                                    <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-600">
                                        <li>IP address</li>
                                        <li>Browser type</li>
                                        <li>Device information</li>
                                        <li>Website usage data through cookies and analytics tools</li>
                                    </ul>
                                </p>
                            </section>

                            {/* Section 2 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    2. How We Use Your Information
                                </h3>

                                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-600">
                                    <li>Respond to inquiries and customer requests</li>
                                    <li>Provide product and company information</li>
                                    <li>Improve website performance and user experience</li>
                                    <li>Communicate regarding business opportunities or services</li>
                                    <li>Maintain internal records and security</li>
                                </ul>

                                <p className="mt-3 font-medium text-gray-700">
                                    We do not sell, rent, or trade your personal information to third parties.
                                </p>
                            </section>

                            {/* Section 3 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    3. Cookies & Analytics
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Our website may use cookies and third-party analytics tools to understand visitor behavior and improve website functionality.
                                </p>

                                <p className="mt-3 text-gray-600">
                                    You can choose to disable cookies through your browser settings. However, some features of the website may not function properly.
                                </p>
                            </section>

                            {/* Section 4 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    4. Data Protection
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    We implement appropriate security measures to protect your personal information against unauthorized access, misuse, disclosure, or alteration.

                                </p>

                                <p className="mt-3 text-gray-600">
                                    While we strive to protect your data, no method of internet transmission or electronic storage is completely secure.

                                </p>
                            </section>

                            {/* Section 5 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    5. Third-Party Links
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites.
                                    We encourage users to review the privacy policies of any external sites they visit.

                                </p>
                            </section>

                            {/* Section 6 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    6. Information Sharing
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    We may disclose information if required by law, legal process, or government request, or when necessary to protect our rights and website security.

                                </p>
                            </section>

                            {/* Section 7 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    7. Your Rights
                                </h3>
                                <p>You may request to:</p>
                                <ul className="mt-3 list-disc pl-5 space-y-1 text-gray-600">
                                    <li>Access the personal information we hold about you</li>
                                    <li>Correct inaccurate information</li>
                                    <li>Request deletion of your information</li>
                                </ul>
                            </section>

                            {/* Section 8 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    8. Contact Us
                                </h3>
                                <p>If you have any questions regarding this Privacy Policy, you may contact us at:</p>

                                <p className="mt-2 text-gray-600">
                                    Arun Seamless Website
                                    <br />
                                    <a href="https://www.arunseamless.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 italic hover:underline">
                                        www.arunseamless.com
                                    </a>
                                </p>
                            </section>

                            {/* Section 9 */}
                            <section>
                                <h3 className="text-lg font-semibold text-[#1B2B39]">
                                    9. Updates to This Policy
                                </h3>

                                <p className="mt-2 text-gray-600">
                                    We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated effective date.
                                </p>
                            </section>

                        </div>

                    </div>

                </div>
            )}

        </footer>
    );
};

export default Footer;