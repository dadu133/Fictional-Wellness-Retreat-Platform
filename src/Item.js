import React from 'react'
const d = new Date()
export default function Item(props) {
  return (
    <>
    <div className='item-container  w-[30vw] m-5 max-md:w-[90vw]'>
      
    
    <div className='item-img'>
     <img className='h-[30vh] w-[30vw] max-md:h-[90vw] max-md:w-[90vw]' src={props.data.image}></img>
    </div>
    <h3>{props.data.title}</h3>
    <p>{props.data.description}</p>
    <p>Date: {d.toUTCString(props.data.date)}</p>
    <p>Location: {props.data.location}</p>
    <p>Price: {props.data.price}</p>
    </div>
    </>
  )
}
