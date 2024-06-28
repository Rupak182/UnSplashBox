import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useImage } from '../Context/ImageContext';
import axios from 'axios'
const SearchBox = () => {

  const page = Math.floor((Math.random()*10));

  const {search,setSearch,setImageResults} =useImage();
  const [input,setInput]= useState("")
  const [gotoImages,setGoToImages] = useState(false);
  const handleClick=async()=>{
    setSearch(input);
    let res =await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${input}&per_page=8&client_id=${import.meta.env.VITE_API_KEY}`)
    setImageResults(res.data);
    setGoToImages(true);
  }

  if(gotoImages === true)
    {
      return <Navigate to={"/Images"}  />

    }


  return (
    <div className='flex items-center w-full justify-center  '>
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='p-3 px-4  border-4 border-[#fefefe] shadow-sm rounded-lg w-7/12 placeholder:text-xs' placeholder='Enter your keywords...' />
    <button onClick={handleClick} className='relative right-8'><img src="Search.svg" alt="" /></button>
    </div>
  )
}

export default SearchBox
