import React from 'react'

function JobSkills() {
  return (
    <div className='max-w-3xl mx-auto p-12'>
    <div className='text-center font-semibold text-gray-800 text-3xl pb-8'>Find Internships/Jobs for different skills</div>
    <div className='text-2xl text-red-300 hover:text-[#ff0000] cursor-pointer'>Tech
        <span className='border text-xs ml-48 rounded-lg px-1 py-0.5 border-red-300'>Software</span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Web Dev</span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Machine Learning</span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Mobile App</span>
        <span className='border text-xs ml-4 px-1 py-0.5 rounded-lg border-red-300'>DS & Algo</span>
    </div>
    <div className='text-2xl text-red-300 hover:text-[#ff0000]'>Management
        <span className='border text-xs ml-24 rounded-lg px-1 py-0.5 border-red-300'>Digital Marketing</span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>BDE</span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Sales</span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Financial Modeling</span>
        <span className='border text-xs ml-4 px-1 py-0.5 rounded-lg border-red-300'>Growth</span>
    </div>
    <div className='text-2xl text-red-300 hover:text-[#ff0000]'>Media
        <span className='border text-xs ml-44 rounded-lg px-1 py-0.5 border-red-300'>Public Relations        </span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>UI/UX        </span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Operations        </span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Manual Testing        </span>
        
    </div>
    <div className='text-2xl text-red-300 hover:text-[#ff0000]'>Additional Skills
        <span className='border text-xs ml-20 rounded-lg px-1 py-0.5 border-red-300'>Project Management</span>
        <span className='border text-xs ml-4 rounded-lg px-1 py-0.5 border-red-300'>Social Media</span>
    </div>
     
    </div>
  )
}

export default JobSkills