import React, { useEffect } from 'react'
import { useRef } from 'react';
import SearchBox from './SearchBox';
import Collections from './Collections';
import { useState } from 'react';
import { useImage } from '../Context/ImageContext';
import axios from "axios"

const Dialog2 = ({ modalRef2 }) => {

const {imageData,setCollections} = useImage();
const [name,setName] = useState("");
    // useEffect(() => {
    //     modalRef2.current.showModal();

    // }, [])

    const handleClick=async()=>{
       const res =await axios.post(`${import.meta.env.VITE_BASE_URL}/Collection/`,{
            image_id:imageData.id,
            url:imageData.urls.regular,
            name:name
        });

        
        let d =await axios.get(`${import.meta.env.VITE_BASE_URL}/Collection/`);
        setCollections(d.data); 
        modalRef2.current.close();

    }

    return (
        <dialog ref={modalRef2} className='w-[40vw] min-h-[70vh] p-5 outline-none rounded-md relative'>
            <div className='flex items-start justify-start flex-col w-full gap-4'>
                <span className='font-bold text-lg flex justify-between items-center w-full mt-4'>
                    <span>Create Collections</span>
                    <button onClick={()=>modalRef2.current.close()}><img src="close.svg" alt="" /></button>
                </span>

                <div className="name flex flex-col gap-2 w-full">
                    <label htmlFor="name">Name</label>
                    <input className='p-2 px-3 border rounded-md w-full' value={name} onChange={(e)=>setName(e.target.value)}  type="text" />
                </div>

                <div className="buttons flex items-center absolute bottom-5 right-6  left-6   justify-between">
                    <button onClick={()=>modalRef2.current.close()} className='p-3 px-2 hover:bg-[#e5e7eb]  rounded-md'>Cancel</button>
                    <button onClick={handleClick} className='p-3 px-2 hover:bg-gray-800 text-white rounded-md bg-black'>Create Collection</button>
                </div>






            </div>

        </dialog>
    )
}

export default Dialog2
