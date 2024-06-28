import React from 'react'

const Box = () => {
    return (
        <div className="box flex flex-col gap -2 items-start">
            <img src="https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=263af33585f9d32af39d165b000845eb" alt="" />
            <span className='text-sm font-semibold'>Home</span>
            <span className='text-[#6C727F] text-sm'>23 photos</span>
        </div>
    )
}

export default Box
