import React from 'react'

export default function Search(props) {
  return (
    <>
    <div className='search-box text-[#fff]'>
      <select value={props.itemdate} onChange={(e)=>{props.setItemdate(e.target.value)}} className='bg-[#1B3252] p-2 m-3 border-2 rounded max-md:block max-md:w-[98vw] max-md:bg-gray-200 max-md:text-black' name='filterdate'>
        <option className='text-black bg-white hover:bg-blue-400 p-2'>Filter by Date</option>
        <option className='text-black bg-white  hover:bg-blue-400 p-2'>2023-2024</option>
        <option className='text-black bg-white  hover:bg-blue-400 p-2'>2024-2025</option>
      </select>
      
      <select value={props.itemtype} onChange={(e)=>{props.setItemtype(e.target.value)}}  className='bg-[#1B3252] p-2 m-3 border-2 rounded  max-md:block max-md:w-[98vw] max-md:bg-gray-200 max-md:text-black' name='filterdate'>
        <option className='text-black bg-white hover:bg-blue-400 p-2'>Filter by Type</option>
        <option className='text-black bg-white  hover:bg-blue-400 p-2'>Yoga</option>
        <option className='text-black bg-white  hover:bg-blue-400 p-2'>Meditation</option>
        <option className='text-black bg-white  hover:bg-blue-400 p-2'>Detox</option>
        <option className='text-black bg-white  hover:bg-blue-400 p-2'>Standalone</option>
        <option className='text-black bg-white  hover:bg-blue-400 p-2'>Signature</option>
      </select>
  
      
      <input type='search' name='search-field' className='bg-[#1B3252] font-bold text-white p-2 float-right m-4 border-2 border-black max-md:w-[98vw] max-md:float-none max-md:bg-white max-md:text-black' placeholder='Search retreats by location' value={props.query} onChange={(e)=>{props.setQuery(e.target.value)}}></input>
  
    </div>
    

    
   </>  
    )

}
