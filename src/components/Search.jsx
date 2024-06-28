import React from 'react'
import SearchBox from './SearchBox'

const Search = () => {
  return (
    <div className=' w-full h-[90vh] flex items-center'>
        <img src="hero-left.png"  className='md:w-fit h-4/5 w-1/12 object-cover object-right ' alt="" />
        <div className="search flex flex-col items-center justify-center md:w-2/4 w-full h-full gap-4">
            <span className='flex gap-1 flex-col items-center justify-center'> <span className='font-bold text-3xl'>Search</span>
            <span className='text-[#6c727f] text-sm'>Search high-resolution images from Unsplash</span>
            </span>
            <SearchBox />
        </div>

        <img src="hero-right.png" className='md:w-fit h-4/5  w-1/12 object-cover object-right ' alt="" />

    </div>
  )
}

export default Search
