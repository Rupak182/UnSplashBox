import React from 'react'
import SearchBox from './components/SearchBox'
import { data } from './helper.js'
import { useImage } from './Context/ImageContext.jsx'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const SearchImage = () => {
    console.log(import.meta.env.VITE_API_KEY);
    const {imageData,setImageData,search,imageResults,setImageResults}= useImage();
    const [gotoInfo,setGoToInfo]= useState(false);
    const [input,setInput ]= useState("");
    const page = Math.floor((Math.random()*10));

    const handleImage = async()=>{
        //console.log("click")
        let res =await axios.get(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&page=${page}&query=${input}&per_page=8`)
        setImageResults(res.data);
    }

    const handleClick = (item)=>{
        console.log(item)
        setImageData(item);
        setGoToInfo(true);
        localStorage.setItem("image",JSON.stringify(item));

    }

    if(gotoInfo===true)
    {
      return  <Navigate to ={"/info"}/>
    }

    if(search =="")
    {
        return <Navigate to ={"/"}/>
    }




    return (
        <div>
            <img className='w-full ' src="gradiend-bg.svg" alt="" />
            <div className='relative bottom-6 flex items-center w-full  justify-center'>
                <input type="text" value={input} onChange={(e=>setInput(e.target.value))} className='p-3 px-4  border-2 border-[#E5E7EBCC] shadow-sm rounded-lg w-1/3 placeholder:text-xs' placeholder='Enter your keywords...' />
                <button onClick={handleImage} className='relative right-6'><img src="Search.svg" alt="" /></button>
            </div>
            <div className="boxes  flex items-center justify-center  ">
                <div className="images  p-5 space-x-1 space-y-4  columns-4 w-11/12 ">
                    {imageResults!=null && imageResults.results.map((item) => {
                        return <button key={item.id} onClick={()=>handleClick(item)} ><img className='rounded-md' src={item.urls.regular} alt="" />
                        </button>
                    })}

                </div>
            </div>

        </div>
    )
}

export default SearchImage
