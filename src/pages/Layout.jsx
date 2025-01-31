import React from 'react'
import { Outlet } from 'react-router-dom'
// import About from './About'
import Navbar from '@/components/ui/Navbar/Navbar'
// import Booking from './Booking'
//import Services from './Services'
// import Contact from './Contact'


export default function Layout() {
    return (
       <>
        <Navbar/>
        <Outlet/>
        
       </>
    )
}
