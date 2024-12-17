import React from 'react'

import ServiceFeeCarousel from './ServiceFeeCarousel'

function CourseCarousel() {
  return (
    <div className="pt-8 w-full pb-8 flex bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    
    <div className=" container px-4 md:px-12 max-w-5xl mx-auto bg-gray-200 pb-6 rounded-xl">

    <span className="h-12 w-12">
<img alt="numbering" className="h-12 w-12" src="/assets/tag3.webp" ></img>
</span>

      <div className="mx-auto ">
        <div className="relative mb-2">
      
          <div className="relative items-center justify-between">
      
            <h1 className='text-2xl font-bold' >Pay Career Services Fee</h1>
            <p className='text-md' >Pay ₹10,000/- (Career Services Fee) Only after Getting Placed</p>
            <div className="mt-4 shadow-inset-sides">
  <ServiceFeeCarousel />
</div>


        
       </div></div></div>
        </div>

    </div>
  )
}

export default CourseCarousel