import React from 'react';

export default function AboutComponent() {
    const LogoImg = "images/1.png"; // Ensure the image path is correct

    return (
        <section className="bg-[#FFFFFF] py-10 md:py-20 overflow-hidden relative">
            {/* Background Image Positioned on the Right */}
            <div
                className="absolute inset-y-0 right-0 w-full md:w-[70%] bg-cover bg-right bg-no-repeat opacity-50 md:opacity-100"
                style={{ backgroundImage: `url(${LogoImg})`, backgroundSize: 'cover' }}
            ></div>

            {/* Content Container */}
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
                {/* Left Side Text Content */}
                <div className="w-full md:w-1/2 p-4 md:p-6 bg-transparent rounded-lg">
                    {/* Rotated "About Us" Heading */}
                    <h4 className="text-[18px] sm:text-[20px] text-[#f1f1f1] font-bold uppercase tracking-widest absolute left-[-30px] top-1/2 transform -translate-y-1/2 rotate-[-90deg] origin-right hidden md:block">
                        ABOUT US
                    </h4>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center md:text-left">
                        WE PROMISE, YOU WILL HAVE THE BEST EXPERIENCE
                    </h2>

                    {/* Description */}
                    <div className="text-gray-600 mt-6 text-sm sm:text-base text-justify">
                        <p className="mb-4">
                            In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati. Maleficia! Vel a modern perhsaps morbi. A terrenti contagium. Forsitan illud Apocalypsi, vel malum poenae horrifying fecimus.
                        </p>
                        <p>
                            Ut fames cerebro enim carnis, viscera et organa viventium. Sicut spargit virus ad impetum, qui supersumus. Avium, canum, fugere ferae et infecti horrenda monstra. Videmus deformis horrenda daemonum. Panduntur portae inferi.
                        </p>
                    </div>

                    {/* Book Now Button */}
                    <div className="mt-5 text-center md:text-left">
                        <a
                            href="#"
                            className="font-semibold text-sm sm:text-[14px] bg-white transition-all duration-300 text-orange-500 px-6 py-2 rounded-full mt-4 hover:bg-orange-500 hover:text-white border-2 border-orange-500 inline-block"
                        >
                            BOOK NOW
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}