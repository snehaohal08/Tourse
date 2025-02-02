import React from 'react';
import {
    TbPigMoney,
    TbCar,
    TbDeviceDesktopCancel,
    TbRoad,
    TbStar,
    TbClock24,
    TbMapPin,
} from 'react-icons/tb';
// import Link from 'next/link';
// import { Link } from 'react-router-dom';


const carOptions = [
  {
    name: "Mini",
    image: "images/1.png",
    seats: "4 + 1 Seater",
    price: 2500,
    hasAC: true,
  },
  {
    name: "Prime Sedan",
    image: "images/1.png",
    seats: "4 + 1 Seater",
    price: 2500,
    hasAC: true,
  },
  {
    name: "Prime SUV",
    image: "images/1.png",
    seats: "6 + 1 Seater",
    price: 3500,
    hasAC: true,
  },
  {
    name: "Prime SUV+",
    image: "images/1.png",
    seats: "6 + 1 Seater",
    price: 4500,
    hasAC: true,
  },
];

export function CarRental() {
  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Back to home
        </Link>
        <p className="text-sm font-medium text-gray-700">Showing {carOptions.length} results</p>
      </div>

      <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-lg font-medium">Pickup from</p>
            <div className="flex items-center space-x-2 text-gray-600">
              <TbMapPin className="h-5 w-5 text-green-600" />
              <span>Mumbai</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-lg font-medium">Drop to</p>
            <div className="flex items-center space-x-2 text-gray-600">
              <TbMapPin className="h-5 w-5 text-red-600" />
              <span>Pune</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {carOptions.map((car, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-lg bg-white p-6 shadow-md md:flex-row md:items-center"
          >
            <div className="flex items-center space-x-6">
              <div className="relative h-24 w-40 flex-shrink-0">
                <Image src={car.image} alt={car.name} fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{car.name}</h3>
                <p className="text-gray-600">
                  {car.seats} | {car.hasAC ? "AC" : "Non-AC"}
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between space-x-6 md:mt-0">
              <p className="text-xl font-bold">₹{car.price.toLocaleString()}.00</p>
              <button className="rounded-md bg-[#75B743] px-6 py-2 text-white hover:bg-[#68A33C] focus:outline-none focus:ring-2 focus:ring-[#75B743] focus:ring-offset-2">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServiceComponent() {
  const services = [
    {
      id: 1,
      icon: <TbPigMoney className="text-4xl text-gray-600" />,
      number: '01',
      title: 'Fixed Rates',
      description: 'Affordable pricing with no hidden charges.',
    },
    {
      id: 2,
      icon: <TbCar className="text-4xl text-gray-600" />,
      number: '02',
      title: 'Reliable Transfers',
      description: 'Safe and dependable transport services.',
    },
    {
      id: 3,
      icon: <TbDeviceDesktopCancel className="text-4xl text-gray-600" />,
      number: '03',
      title: 'Free Cancellation',
      description: 'Cancel your ride without extra charges.',
    },
    {
      id: 4,
      icon: <TbRoad className="text-4xl text-gray-600" />,
      number: '04',
      title: 'Award Winning Service',
      description: 'Highly rated transport service with excellent customer feedback.',
    },
    {
      id: 5,
      icon: <TbStar className="text-4xl text-gray-600" />,
      number: '05',
      title: 'Quality Vehicles',
      description: 'Well-maintained and comfortable vehicles.',
    },
    {
      id: 6,
      icon: <TbClock24 className="text-4xl text-gray-600" />,
      number: '06',
      title: '24H Customer Service',
      description: 'Support available 24/7 for all queries and issues.',
    },
  ];

  return (
    <section className="py-10 md:py-20 relative z-10 bg-[#FAFAFA]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 relative">
          <h4 className="hidden md:block text-[18px] sm:text-[20px] text-gray-300 font-bold uppercase tracking-widest absolute left-[-100px] top-1/2 -translate-y-1/2 rotate-90 origin-left">
            SERVICES
          </h4>
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-sans font-bold text-gray-800 mb-6 text-justify md:text-left">
            PROVIDING AMAZING SERVICES <br className="hidden md:block" /> TO OUR CLIENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="p-8 rounded-lg relative">
              <div className="w-28 h-28 mx-auto mb-6 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full">
                {service.icon}
              </div>

              <div className="absolute top-4 right-4 bg-orange-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                {service.number}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                <a href="/services" className="hover:text-orange-500 transition-colors duration-300 font-sans">
                  {service.title}
                </a>
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed font-sans text-[16px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
