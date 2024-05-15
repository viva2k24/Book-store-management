import React from 'react'
import BannerCard from '../home/BannerCard'


const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
                <h2 className='text-6xl font-bold leading-snug text-black  '>Buy and sell your books<span className='text-blue-700'> for the best prices</span></h2>
                <p>
                Lorem ipsum is placeholder text commonly used in the 
                graphic, print, and publishing 
                industries for previewing layouts and visual mockups.
                </p>
                <div>
                    <input type="text" name='search' id='search' placeholder='Search books' className='py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            <div>
               <BannerCard />
            </div>
        </div>
    </div>
  )
}

export default Banner