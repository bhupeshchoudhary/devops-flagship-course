import React from 'react'
import ServiceFeeCarousel from './ServiceFeeCarousel'

function CourseCarousel() {
  return (
    <div className="pt-8 w-full pb-0 relative bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="container px-4 md:px-12 max-w-5xl mx-auto bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] pb-6 rounded-xl relative">
          {/* Tag with number - Hidden on mobile */}
          <div className="hidden md:block absolute -top-2 left-12">
            <div className="relative w-20 h-24">
              <img 
                alt="numbering" 
                className="w-full h-full" 
                src="/assets/tag4.png"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="md:hidden absolute -top-2 left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-[#004D40] font-bold text-lg">4</span>
          </div>

          {/* Content section */}
          <div className="pt-6 pl-4 md:pl-16">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-4 ml-4 md:ml-16">
                  Become a DevOps Engineer
                </h1>
                <div className="text-white/90 max-w-3xl ml-4 md:pl-16">
                  <p className="text-sm mb-2">
                    Get ready to be hired by core tech companies & secure a package between ₹4,00,000 - ₹8,00,000
                  </p>
                  <p className="font-semibold text-white/70">
                    (Note : 100% refund if not hired*)
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="mt-8 px-0 md:px-16 md:-ml-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <ServiceFeeCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCarousel