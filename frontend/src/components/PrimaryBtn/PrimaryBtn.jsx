import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const PrimaryBtn = () => {
    return (

        <div className='flex items-center group '>
            <button className='bg-primary text-white py-2 px-3 h-[40px]'>
                Choose your Dining Hall
            </button>
            <FaArrowRight className='inline-block   group-hover:!translate-x-2 duration-500 h-[40px] w-[40px]  p-2 text-base bg-primaryDark text-white' />

        </div>
    )
}

export default PrimaryBtn