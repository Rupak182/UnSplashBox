import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import SearchImage from './SearchImage'
import Image from './Image'
import Collect from './Collect'
import CollectPage from './CollectPage'
import { Routes,Route } from 'react-router-dom'
import useImage from './Context/ImageContext.jsx'
import { useEffect } from 'react'
import Home from './Home'
import Default from './components/Default.jsx'
const App = () => {


  return (
    <div>
      <Navbar />
      <hr  className=' bg-[#e5e7eb] mt-4'/>


      <Routes>
        <Route path='/'  element ={<Home/>}></Route>
        <Route path='/collections' element={<Collect/>}></Route>
        <Route path ='/images' element={<SearchImage/>}></Route>
        <Route path ='/info' element={<Image/>}></Route>
        <Route path= '*' element={<Default/>}></Route>
      </Routes>
    </div>
  )
}

export default App
