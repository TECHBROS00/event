"use client"
import React, { useState } from 'react'

function CategoryFilter({selectedCategory}) {
  const [activeIndex,setActiveIndex]=useState(0)
  const filterOption=[
    {
      id:1,
      name:'All',
      value:'all'
    },
    {
      id:2,
      name:'React JS',
      value:'reactjs'
    },
    {
      id:3,
      name:'Next Js',
      value:'nextjs'
    },
    {
      id:4,
      name:'Tailwind CSS',
      value:'tailwindcss'
    },
    {
      id:5,
      name:'AI',
      value:'ai'
    }
  ]
  return (
    <div className='flex gap-5'>
     {filterOption.map((item,index)=>(
      
        <button key={index} 
        onClick={()=>
         { setActiveIndex(index);
          selectedCategory(item.value)
         }}
        className={`border p-2 px-4 text-sm rounded-md
        hover:border-red-600 font-semibold 
        hover:bg-red-50
        ${activeIndex==index?'border-red-600  bg-red-50 text-red-600':null}`}>
          <h2>{item.name}</h2>
        </button>

     ))}
    </div>
  )
}

export default CategoryFilter
