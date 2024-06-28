import React from 'react'

const CollectPage = ({CurrretCollection}) => {
  console.log(CurrretCollection)
  return (
<div className='flex items-center justify-center flex-col gap-2 w-full'>

<div className=' my-6 flex flex-col text-center gap-2 w-1/3'>
    <span className='bg-gradient-to-tr from-[#f0b591] to-[#8b338b] bg-clip-text text-transparent text-4xl font-semibold'>{CurrretCollection.name}</span>
    <span className='text-sm'>{CurrretCollection.results.length} {CurrretCollection.results.length > 1 ? "photos" : "photo"}</span>
</div>

    <div className="boxes  flex items-center justify-center  ">
    <div className="images  p-5 space-x-1 space-y-4  columns-4 w-11/12 ">

    {
      CurrretCollection && CurrretCollection.results.map((item)=>{
        return <img className='rounded-md'  src={item.image_url} alt="" />
      })
    }
  
    </div>
    </div>
</div>
  )
}

export default CollectPage
