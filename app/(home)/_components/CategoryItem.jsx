import React from 'react'
import { Book } from 'lucide-react'
import Image from 'next/image'

function CategoryItem({course}) {
  return (
    <div>
      <div 
        className=' border border-gray-300 rounded-lg p-2
        cursor-pointer hover:border-gray-400 hover:border-2 '>
            <Image src={course.banner?.url}
            alt={course.name}
            width={1000}
            height={500}
            className='rounded-lg'
            />
            <div className='mt-2 '>
                <h2 className='text-[18px] md:text-[16px] font-medium '>{course.name}</h2>
                <h2 className='text-gray-400 text-[13px]'>{course.author}</h2>

        {course.totalChapters? <div className='flex items-center gap-2 mt-2'>
                   <Book className='h-6 w-6 text-red-600
                   rounded-full bg-red-100 p-1'/> 
                   <h2 className='text-[12px] text-gray-400'> {course.totalChapters} Chapters</h2>
                </div>:null}
                
                <h2  className='mt-2 text-[14px]' >{course.free?'Free':'Paid'}</h2>
            </div>
        </div>
    </div>
  )
}

export default CategoryItem
