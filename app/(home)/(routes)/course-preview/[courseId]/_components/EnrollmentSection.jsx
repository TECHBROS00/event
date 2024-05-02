import { EnrollCourse, PublishCourse } from '../../../../../_services'
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'

function EnrollmentSection({courseDetail,userCourse}) {
  
  const {user}=useUser();
  const router = useRouter();
  const enrollCourse = async() =>{
    if(user)
      {
    await EnrollCourse(courseDetail.id , user.primaryEmailAddress.emailAddress)
    .then(async(resp)=>{
      console.log("EnrollCourseResp=> ",resp);
      if(resp)
        {
          await PublishCourse(resp?.createUserEnrollCourse?.id)
          .then(result=>{
            console.log(result);

            if(result){
              router.push('/view-course/'+courseDetail.id)
            }
          })
      }
    })
  }
  else{
    router.push('/sign-in');
  }
}
  return (
    <div>
      {userCourse?.courseId?
      <div className='mt-5 border rounded-lg p-4 text-center'>
      <h2 className='text-gray-900'>

        Continue to Build Project, Access Source Code and Track your Progress for free!

        </h2>
      <button className='p-2 w-full bg-gray-500 text-white 
      rounded-lg text-[14px] mt-2 hover:bg-gray-700' 

      onClick={()=> router.push('/view-course/'+courseDetail.id) }>

        Continue</button>
   </div>
   
   :null}

 {courseDetail.free&&!userCourse?.courseId?

     <div className='mt-5 border rounded-lg p-2 text-center'>

        <h2 className='text-gray-900'>
        Learn and Build Project, Access Source Code and Track your Progress for free!
        </h2>

        <button className='p-2 w-full bg-gray-500 text-white 
        rounded-lg text-[14px] mt-2 hover:bg-gray-700'
        onClick={()=>enrollCourse()}>
        Enroll Now
        </button>

     </div>

      :!userCourse?.courseId?

     <div className='mt-5 border rounded-lg p-2 text-center'>

        <h2 className='text-gray-900'>
          Buy this course,source code and track your progress</h2>

        <button className='p-2 w-full bg-gray-500 text-white 
      rounded-lg text-[14px] mt-2 hover:bg-gray-700'>
        Buy course for $1.99</button>

     </div>

     :null}

  <div className='mt-5 border rounded-lg p-2 text-center'>
        <h2 className='text-gray-900'>Buy Monthly Membership and get access to all this course,source code and track your progress</h2>
        <button className='p-2 w-full bg-gray-500 text-white 
        rounded-lg text-[14px] mt-2 hover:bg-gray-700'>Buy Membership for $4.99/month</button>
  </div>

    </div>
  )
}

export default EnrollmentSection
