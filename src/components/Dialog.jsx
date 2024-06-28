import React, { useEffect } from 'react'
import { useRef } from 'react';
import SearchBox from './SearchBox';
import Collections from './Collections';
import { useImage } from '../Context/ImageContext';
import axios from 'axios'
import Search from './Search';
import { useState } from 'react';

const Dialog = ({ modalRef,modalRef2 }) => {


    // useEffect(() => {
    //     modalRef.current.showModal();

    // }, [])

    const [query,setQuery] =useState("");
    const [input,setInput]=useState("");

    const {collections,imageData,setCollections}= useImage();

    const handleAdd=()=>{
        modalRef.current.close();
        modalRef2.current.showModal();
    }

    const handleUpdate = async(c)=>{
        await axios.put(`${import.meta.env.VITE_BASE_URL}/Collection/`,{
            image_id:imageData.id,
            url:imageData.urls.regular,
            id:c._id
        });

        let res =await axios.get(`${import.meta.env.VITE_BASE_URL}/Collection/`);
        setCollections(res.data); 
        modalRef.current.close();

    }

    const filterData = (collection)=>{


        if(query.length>0 && collection.name != query)
            return false;

        for (const element of collection.results) {
            if(element.image_id==imageData.id)
                {
                    return false;
                }
        }

        return true;
    }

    const handleQuery= (e)=>{
            setQuery(input)
  
    }

    let  filteredCollection =collections.filter(filterData)


    return (
        <dialog ref={modalRef} className='w-[40vw] min-h-[70vh] p-3 outline-none rounded-md '>
            <div className='flex items-start justify-start flex-col w-full gap-3'>
                <span className='font-bold text-lg flex justify-between items-center w-full'>
                    <span>Add to Collections</span>
                    <button onClick={()=>modalRef.current.close()}><img src="close.svg" alt="" /></button>
                </span>
                <div className="search w-full">
                    <div className='flex items-center w-full  '>
                        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='p-3 px-4  border-3 border-[#fefefe] shadow-sm rounded-lg w-full placeholder:text-xs' placeholder='Enter your keywords...' />
                        <button onClick={handleQuery} className='relative right-6'><img src="Search.svg" alt="" /></button>
                    </div>
                </div>

                <span className='text-xs'>{filteredCollection.length} matches</span>

                {
                    filteredCollection.map((collection)=>{
                        return   <button onClick={()=>handleUpdate(collection)} key={collection._id} className='group flex hover:bg-[#e5e7eb] rounded-md p-1 justify-between pr-2  items-center gap-2 w-full'>
                        <div className='flex gap-2 '>
                            <img className='rounded-md object-cover object-top w-[70px] h-[60px]' src={collection.cover} alt="" />
                            <div className='flex flex-col text-sm items-start'><span>{collection.name}</span>
                                <span className='text-[#6C727F] text-sm'>{collection.results.length} {collection.results.length > 1 ? "photos" : "photo"}</span></div>
                        </div>
                        <div className=' ' >
                            <span  className='group-hover:flex hidden gap-2 text-xs   '><img src="Plus.svg" alt="" /><span>Add to collection</span></span>
                        </div>
                    </button>
                    })
                }


                <button onClick={handleAdd} className='flex gap-2 p-2 px-3 items-center  rounded-sm bg-[#e5e7eb] self-center'><img src="Plus.svg" alt=""  /><span>Create Collection</span></button>
            </div>

        </dialog>
    )
}

export default Dialog
