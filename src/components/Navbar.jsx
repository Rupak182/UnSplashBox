import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-11/12 m-auto'>
      <ul className='flex justify-between items-center m-auto'>
        <li><Link to={"/"}><img src="Logo.svg" alt="" /></Link></li>
        <li>
            <ul className='flex gap-5 text-[#6c727f] text-sm items-center'>
                <Link to={"/"}><li className='p-2 px-3 hover:bg-[#e5e7eb] rounded-md hover:text-black'>Home</li></Link>
                <Link to ={"/Collections"}><li className='p-2 px-3 hover:bg-[#e5e7eb] rounded-md hover:text-black'>Collections</li></Link>
            </ul>
        </li>
      </ul>

    </div>
  )
}

export default Navbar
