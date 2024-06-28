import React from 'react'
import { useImage } from './Context/ImageContext.jsx'
import CollectPage from './CollectPage.jsx';
import { useState } from 'react'



const Collect = () => {
    const { collections } = useImage();

    const [CurrretCollection, setCurrentCollection] = useState(null);


    const handleClick = (collection) => {
        setCurrentCollection(collection);
    }

    if (CurrretCollection) {
        return  <CollectPage CurrretCollection={CurrretCollection} />
    }

    return (

        <div className='flex items-center justify-center flex-col gap-2'>

            <div className=' my-6 flex flex-col text-center gap-2 w-1/3'>
                <span className='bg-gradient-to-tr from-[#f0b591] to-[#8b338b] bg-clip-text text-transparent text-4xl font-semibold'>Collections</span>
                <span className='text-sm'>Explore the world through collections of beautiful photos free to use under the Unsplash License.</span>
            </div>

            <div className="boxes grid grid-cols-3 w-[80%]  grid-auto-rows: 10rem  gap-4 ">
                {
                    collections && collections.map((collection) => {

                        return <button onClick={() => handleClick(collection)} className="box flex flex-col gap-2 items-start w-full h-full ">
                            <img className='rounded-md object-cover w-full h-full  ' src={collection.cover} alt="" />
                            <span className='text-sm font-semibold'>{collection.name}</span>
                            <span className='text-[#6C727F] text-sm'>{collection.results.length} {collection.results.length > 1 ? "photos" : "photo"}</span>
                        </button>


                    })
                }


                {/*  


                <Box />
                <Box />

                <Box />
                <Box />  */}


            </div>
        </div>
    )
}

export default Collect
