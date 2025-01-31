import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"
import { FaCaretDown } from "react-icons/fa"
import ResponsiveMenu from "./ResponsiveMenu"
// import { link } from 'fs';

const dropdownLink = [
  {
    name: "Cars List",
    link: "/#cars_list"
  },
  {
    name: "Cars grid",
    link: "/#cars_list"
  },
  {
    name: "Booking",
    link: "/#booking"
  },
  {
    name: "Confirmation",
    link: "/#confirmation"
  },
]

export default function Navbar() {
  const LogoImg = "images/logo.png"; // Single image as a string

  return (
    <>
      <div className="fixed top-0 right-0 w-full h-[10x0px] bg-white text-black shadow-md">
        <div className="bg-gradient-to-r from-primary to-secondary text-white ">
          <div className="container py-[2px] sm:block hidden ">
            <div className=' flex justify-between w-full '>
              <p>20% off on next booking</p>
              <p>Mobile No: +91 9604064897</p>
            </div>
          </div>
        </div>

        <div className="container py-3 sm:py-0 x">
          <div className='flex justify-between items-center  '>
            {/* logo section */}
            <div>
              <Link to="/" onClick={() => window.screenTop(0, 0)} >
                <img src={LogoImg} alt="Logo" className="h-16 " />
              </Link>
            </div>
            {/* navlink */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-6' >
                <li className='py-4'>
                  <NavLink to="/"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    Home
                  </NavLink>
                </li>

                <li className='py-4'>
                  <NavLink to="/about"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    About
                  </NavLink>
                </li>

                <li className='py-4'>
                  <NavLink to="/contact"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Contact
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink to="/blogs"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    Blogs
                  </NavLink>
                </li>
                <li className='py-4'>
                  <NavLink to="/services"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    Service
                  </NavLink>
                </li>

                <li className='py-4'>
                  <NavLink to="/Booking"
                    activeClassName="active"
                    onClick={() => window.scrollTo(0, 0)}>
                    Booking
                  </NavLink>
                </li>
                {/* drop Drown */}
                <li className='py-4 relative group *:cursor-pointer'>
                  <div className='dropdown flex items-center'>
                    <span>OUR CARS</span>
                    <span>
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </span>
                  </div>
                  <div className=' absolute -left-9 z-[9999] hidden
                group-hover:block shadow-md text-black *:w-[150px] bg-white p-2'>
                    <ul>
                      {
                        dropdownLink.map((data) => {
                          return (
                            <li key={data.name}>
                              <a
                                className='inline-block w-full rounded-ms p-2
                           hover:bg-primary/20'
                                href={data.link}
                                >
                                {data.name}
                              </a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>

              </ul>

            </div>

            <div className='hidden md:block'>
            </div>
            {/* booking buutton */}

            <div className='flex items-center gap-4'>
              <button className='bg-gradient-to-r from-primary
         to-secondary hover:bg-bg-gardient-to-r
         hover:from-secondary hover:bg-primary
         transition-all duration-600 text-white px-3
         py-1 rounded-full '>
                Book Now</button>
            </div>
            {/* <div className='md:hidden block'>
              {showMenu ? (
                <HiMenuAlt1
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />

              ) : (
                <HiMenuAlt3
                  onClick={toggleMenu}
                  className="cursor-pointer transition-all"
                  size={30}
                />
              )}
            </div> */}

          </div>
        </div>

        <ResponsiveMenu />

      </div>
    </>
  );
}
