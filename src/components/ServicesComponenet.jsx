import React from 'react';
import {
    TbPigMoney,
    TbCar,
    TbDeviceDesktopCancel,
    TbRoad,
    TbStar,
    TbClock24,
} from 'react-icons/tb';

export default function ServiceComponent() {
    // Array of service objects
    const services = [
        {
            id: 1,
            icon: <TbPigMoney className="text-4xl text-gray-600" />,
            number: '01',
            title: 'Fixed Rates',
            description: 'In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.',
        },
        {
            id: 2,
            icon: <TbCar className="text-4xl text-gray-600" />,
            number: '02',
            title: 'Reliable Transfers',
            description: 'In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.',
        },
        {
            id: 3,
            icon: <TbDeviceDesktopCancel className="text-4xl text-gray-600" />,
            number: '03',
            title: 'Free Cancellation',
            description: 'In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.',
        },
        {
            id: 4,
            icon: <TbRoad className="text-4xl text-gray-600" />,
            number: '04',
            title: 'Award Winning Service',
            description: 'In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.',
        },
        {
            id: 5,
            icon: <TbStar className="text-4xl text-gray-600" />,
            number: '05',
            title: 'Quality Vehicles',
            description: 'In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.',
        },
        {
            id: 6,
            icon: <TbClock24 className="text-4xl text-gray-600" />,
            number: '06',
            title: '24H Customer Service',
            description: 'In omni memoria patriae religionis sunt diri undead historiarum. Golums, zombies et fascinati.',
        },
    ];

    return (
        <section className="relative z-10 py-20 bg-[#FAFAFA]">
            <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                        PROVIDING AMAZING SERVICES <br /> TO OUR CLIENTS
                    </h2>
                    <h4 className="text-[18px] sm:text-[20px] text-[#f1f1f1] font-bold uppercase tracking-widest mt-4">
                        SERVICES
                    </h4>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="p-8 rounded-lg text-center relative">
                            {/* Icon Box */}
                            <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full">
                                {service.icon}
                            </div>

                            {/* Number */}
                            <div className="absolute top-4 right-4 bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                                {service.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                <a href="/services" className="hover:text-orange-500 transition-colors duration-300">
                                    {service.title}
                                </a>
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}