import React from 'react'


const Hero = () => {
  return (
    <div className='flex flex-1 gap-52 justify-center items-center absolute left-12 top-52 text-white'>
        <div>
            <h1 className='text-white r text-6xl font-bold tracking-wider	'>Discover <br /> Popular <br /> Events Today</h1>
            <p className='py-6 font-[Poppins] '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button className='bg-indigo-600 text-white  py-2 px-10 rounded-2xl hover:bg-indigo-400 duration-500'>
            Explore Events
            </button>
        </div>
    </div>
  )
}

export default Hero