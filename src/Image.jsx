import React, { useEffect, useState } from 'react'
import Dialog from './components/Dialog'
import Collections from './components/Collections'
import { useImage } from './Context/ImageContext'
import { useRef } from 'react'
import Dialog2 from './components/Dialog2'
import axios from 'axios'
import Default from './components/Default'
import { Navigate } from 'react-router-dom'

const Image = () => {

    const { imageData, setImageData, collections, setCollections } = useImage();
    const modalRef = useRef();
    const modalRef2 = useRef();


    const handleDelete = async(id)=>{
        console.log(id);

        let res =await axios.post(`${import.meta.env.VITE_BASE_URL}/Collection/`,{
            id:id
        });
        console.log(res);
        let d =await axios.get(`${import.meta.env.VITE_BASE_URL}/Collection/`);
        setCollections(d.data); 

    }

    useEffect(() => {
        setImageData(JSON.parse(localStorage.getItem("image")))
    }, [])

    console.log(imageData)
    if (imageData === null && localStorage.getItem("image") == null) {
        return <div className='text-3xl text-center my-7'>
            Something Went Wrong
        </div>
    }


    const checkExists = (res, id) => {
        console.log(imageData)
        res.forEach(item => {
            // console.log(item.image_id)
            // console.log(imageData)
            if (item.image_id == id)
                return true;
        });

        return false;
    }


    const handlemodal = () => {
        modalRef.current.showModal();
    }

    const handleDownload = async()=>{
        const url= imageData.urls.raw.split("?")[0];

        const name = url.split("/").pop();
        console.log("name:",name);
        console.log("url:",url);

        const data = await fetch(url);
        console.log("data:",data);

        const imgBlob=await  data.blob();

        const imgURL = URL.createObjectURL(imgBlob);
        const link = document.createElement("a");
        link.href= imgURL;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        

    }


    useEffect(() => {
        console.log(imageData);
    }, [])
    return (
        <div className='w-11/12  my-6 flex m-auto gap-10'>
            <div className='w-1/2 h-[85vh]  '>
                <img className='object-cover  h-full' src={imageData?.urls?.regular} alt="" />
            </div>

            <div className='author flex flex-col gap-4 w-1/2 '>
                <div className="user flex gap-2 items-center text-sm">
                    <div className="pic  rounded-full overflow-hidden ">
                        <img className='object-contain rounded-full' src={imageData?.user?.profile_image.small} alt="" />
                    </div>
                    <span>{imageData?.user?.name}</span>

                </div>
                <span className='text-xs text-[#6C727F]'>Published On {imageData?.created_at?.split("T")[0]}</span>
                <div className="btn flex gap-2 text-xs">
                    <button onClick={handlemodal} className='flex gap-2 p-2 px-3 items-center  rounded-sm bg-[#e5e7eb]'><img src="Plus.svg" alt="" /><span>Add to Collection</span></button>
                    <button onClick={handleDownload} className='flex gap-2 p-2 px-3 items-center  rounded-sm bg-[#e5e7eb]'><img src="downArrow.svg" alt="" /><span>Download</span></button>
                </div>

                <div className="collections flex flex-col gap-3 mt-4 w-full ">
                    <span className='font-bold text-xl'>Collections</span>
                    {
                        collections!=undefined && collections.map((collection) => {
                            return <div  key={collection._id} className='group flex hover:bg-[#e5e7eb] rounded-md p-1 justify-between pr-2  items-center gap-2 w-full'>
                                <div className='flex gap-2 '>
                                    <img className='rounded-md object-cover object-top w-[70px] h-[60px] ' src={collection.cover} alt="" />
                                    <div className='flex flex-col text-sm items-start'><span>{collection.name}</span>
                                        <span className='text-[#6C727F] text-sm'>{collection.results.length} {collection.results.length > 1 ? "photos" : "photo"}</span></div>
                                </div>
                                <button  onClick={()=>handleDelete(collection._id)} >
                                    <span className='group-hover:flex hidden  gap-2 text-xs '><img src="Remove.svg" alt="" /><span>Remove </span></span>
                                </button>
                            </div>
                        })
                    }

                </div>

            </div>
            <Dialog2 modalRef2={modalRef2} modalRef={modalRef} />
            <Dialog modalRef={modalRef} modalRef2={modalRef2} />

        </div>
    )
}

export default Image
