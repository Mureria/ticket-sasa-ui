import React from 'react'
import Event from './Event'

const PopularEvents = (props) => {
  return (
        <div className='w-full h-full px-[48px] py-4 my-10'>
            <div className='flex mb-20 '>
            <div className='flex-1 font-sans text-xl font-bold '>Popular Events</div>
            <div className='flex flex-1 font-sans text-3xl text-center text-bookmark-blue justify-around '>
                <div>Date</div>
                <div>Total Seats</div>
                <div>Available Seats</div>
                <div>Status</div>
            </div>
            </div>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
            <Event/>
        </div> 
  )
}

export default PopularEvents