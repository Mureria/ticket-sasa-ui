import React from 'react'

const Tag = () => {
  return (
        <div aria-labelledby="qualities" className="relative">

    <div className="container my-10 py-10 mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between">
      <div className=" grid gap-4 justify-items-center text-center md:flex-1 ">
        
        <div  class=" rounded-full border-8  border-[#00df9a] p-4 ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold">Safe</h3>
        <p>Our products are secure and private out-of-the-box</p>
      </div>
      
      <div
      className="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
        ">
        <div 
          className="
          rounded-full
          border-8
          border-[#00df9a]
            p-4
          ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold">Efficient</h3>
        <p>
          Feel good about your wallet and the environment
        </p>
      </div>
      <div 
        className="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
        ">
        <div 
          className="
          rounded-full
          border-8
          border-[#00df9a]
            p-4
          ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"
            stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold">Proven</h3>
        <p className=''>
          Leading the Events industry world for 10 years
        </p>
      </div>
    </div>
  </div>
  )
}

export default Tag