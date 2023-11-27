import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"; 
import { IoClose } from "react-icons/io5";   
import Hero from './Hero';


const Navbar = () => {
    
    let [open,setOpen]=useState(false);

    let Links =[
      {name:"Home",link:"/"},
      {name:"Events",link:"/events"},
      {name:"Contact",link:"/contact"},
      {name:"Blogs",link:"/blogs"},
      {name:"Calendar",link:"/calendar"},
    ];
  return (
    <div className='bg-hero-image h-screen relative'>
        <div className='shadow-md w-full fixed top-0 left-0 bg-white/10'>
      <div className='md:flex  items-center justify-between py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#00df9a]'>
        <span className='text-3xl mr-1 pt-2 '>
        </span>
        Ticket-Sasa
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-white text-3xl absolute right-8 top-5 cursor-pointer md:hidden'>
      {open ? <IoClose size={30} />:  <GiHamburgerMenu size={28}/>}
      </div>

      <ul className={`md:flex  md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>
          Login
        </button>
      </ul>
      </div>
      </div>
      <Hero/>
    </div>
    
  )
}

export default Navbar