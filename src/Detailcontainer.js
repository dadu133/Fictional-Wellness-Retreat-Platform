import React, { useEffect, useState } from 'react'
import data from './data.json'
import Item from './Item'
export default function Detailcontainer(props) {
  
  let [showdata,setshowdata]=useState(data.filter((item)=>item.location.toLowerCase().includes(props.query.toLowerCase())))
  useEffect(()=>{
    setshowdata(data.filter((item)=>item.location.toLowerCase().includes(props.query.toLowerCase())))
  },[props.query])
  useEffect(()=>{
    
    setshowdata(data.filter((item)=>item.type.toLowerCase().includes(props.itemtype.toLowerCase())))
  },[props.itemtype])
  return (
    <>
      <div className='container-detail flex bg-[#E0D9CF] w-[100vw] flex-wrap max-md:flex-col'>
        {showdata.map((item) => {
          return <Item key={item.id} data={item}></Item>
        })}
      </div>
      <div className='btn-container flex justify-center self-center my-5'>
        <button className='text-white bg-[#1B3252] mx-1 p-2 border-5 rounded-xl' >Previous</button>
        <button className='text-white bg-[#1B3252] mx-1 px-5 py-2 border-5 rounded-xl' >Next</button>
      </div>
    </>
  )
}
