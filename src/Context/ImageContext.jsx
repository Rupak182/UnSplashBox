import React, { useContext, useEffect } from 'react'
import { createContext,useState } from 'react'
import axios from 'axios'
export const ImageContext = createContext();


export default function ImageProvider ({children})  {

const [imageData,setImageData] = useState(null);
const [search,setSearch]= useState("");
const [imageResults,setImageResults]=useState(null);

// const fetchData =  () => {
//   axios.get("http://localhost:4001/collection").
//   then((res)=>(res.data))
  
// }

const [collections, setCollections] = useState([]);


useEffect(()=>{
  const getData = async()=>{
    let res =await axios.get(`${import.meta.env.VITE_BASE_URL}/Collection/`);
    setCollections(res.data);
  }

  getData();
},[])


  return (
        <ImageContext.Provider value= {{imageData,setImageData,collections,setCollections,search,setSearch,imageResults,setImageResults}}>
                {children}
        </ImageContext.Provider>
  )
}

export const useImage = ()=>useContext(ImageContext);

