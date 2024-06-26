"use client"
import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Layout,  Mail, Search, Shield } from 'lucide-react';
import { usePathname } from 'next/navigation';

function SidebarNav() {
    const pathName=usePathname();
    console.log(pathName)
    const menuList=[
        {
        id:1,
        name:'Browse',
        icon : Search,
        path:'/browse'
    },
    {
        id:2,
        name:'Dashboard',
        icon :Layout,
        path:'/dashboard'
    },
    {
        id:3,
        name:'upgrade',
        icon :Shield,
        path:'/upgrade'
    },
    {
        id:4,
        name:'NewsLetter',
        icon :Mail,
        path:'/newsletter'
    }
]
    const [activeIndex,setActiveIndex]=useState(0);
  return (
    <div className='h-full bg-white border-r flex flex-col overflow-y-auto shadow-md'>
        <div className='p-5 border-b z-50'>
        <Image src='/srms_logo.png'
       alt = 'logo'
       width = {170} 
       height={100}
       />
        </div>
        <div className='flex flex-col'>
            {menuList.map((item,index)=>(
                <Link href={item.path} key={index} className={`flex gap-2 items-center p-4 
                px-6 text-gray-500 hover:bg-gray-100 cursor-pointer 
                
                ${pathName==item.path?'bg-red-50 text-red-600':null}`}
                onClick={()=>setActiveIndex(index)}>
                    <item.icon/>
                    <h2>{item.name}</h2>
                </Link>
            ))}
        </div>
    
    </div>
  )
}

export default SidebarNav
