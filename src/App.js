import React, { useState } from 'react'
import "./index.css"
import Navbar from './Navbar'
import Yoga from './Yoga'
import Search from './Search'
import Detailcontainer from './Detailcontainer'
import Footer from './Footer'
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <><Navbar></Navbar><Home></Home><Footer></Footer></>
//   },
//   {
//     path: '/about',
//     element:<><Navbar></Navbar><About></About><Footer></Footer></> 
//   },
//   {
//     path: '/service',
//     element:<><Navbar></Navbar><Service></Service><Footer></Footer></>
//   },
//   {
//     path: '/contact',
//     element: <><Navbar></Navbar><Contact></Contact><Footer></Footer></>
//   }])
export default function App() {
  const[query1,setQuery1]=useState('')
  const [itemdate,setItemdate]=useState('');
  const [itemtype,setItemtype]=useState('');
  return (
    <>
  <Navbar></Navbar>  
  <Yoga></Yoga>
  <Search query={query1}  setQuery={setQuery1} itemdate={itemdate} setItemdate={setItemdate} itemtype={itemtype} setItemtype={setItemtype}></Search>
  <Detailcontainer query={query1} itemdate={itemdate} itemtype={itemtype}></Detailcontainer>
  <Footer></Footer>  
  </>
  )
}
