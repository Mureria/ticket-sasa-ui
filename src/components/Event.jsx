import React from 'react'
import { FaArrowRight } from "react-icons/fa6";


const Event = () => {
  return (
    <>
        <div className='flex justify-between items-center border-b-2 py-3'>
            <div>
                <h1 className='font-bold text-md pb-2'>Oct, 20th</h1>
                <p className='font-bold text-gray-400 text-sm'>07:00pm - 10:00pm</p>
            </div>

            <div>
                <h1 className='font-bold text-md pb-2'>International UX <br />Conference 2023</h1>
            </div>

            <div>
                <h1 className='font-bold text-md pb-2'>Shoo Phar Mhan</h1>
                <p className='font-bold text-gray-400 text-sm'>Shoo Phar Mhan</p>
            </div>

            <div>
                <p className='font-bold text-gray-400 text-sm'>Grand Convention</p>
                <p className='font-bold text-gray-400 text-sm'>Mapura Hotel, Taiwan</p>
            </div>

            <div className='flex gap-3 justify-center items-center'>
                <div className='font-bold text-sm pb-2'>MORE DETAIL</div>
                <div><FaArrowRight /></div>
            </div>
        </div>
    </>
  )
}

export default Event