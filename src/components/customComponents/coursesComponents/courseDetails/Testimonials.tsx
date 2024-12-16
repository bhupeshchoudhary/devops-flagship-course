"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  rating: number
  content: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Kevin James",
    role: "Happy Client",
    rating: 66,
    content: "Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntporro quisuam est, rui dolorem ipsum quia dolor sit amet, consectetur adieisci velit sed ruia.",
    image: "/assets/About/profile1.png"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "Satisfied Customer",
    rating: 78,
    content: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    image: "/assets/About/profile2.png"
  },
]

const floatingAvatars = [
  { top: "32%", left: "40%", size: 80, delay: 200, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "64%", left: "40%", size: 80, delay: 0, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "54%", left: "54%", size: 80, delay: 0, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "24%", left: "56%", size: 80, delay: 0, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "4%", left: "46%", size: 80, delay: 0, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "4%", left: "30%", size: 80, delay: 0, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "29%", left: "24%", size: 80, delay: 0, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "54%", left: "26%", size: 80, delay: 0, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "74%", left: "20%", size: 50, delay: 20, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "34%", left: "14%", size: 50, delay: 20, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "24%", left: "71%", size: 50, delay: 20, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "74%", left: "66%", size: 50, delay: 20, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "-6%", left: "59%", size: 50, delay: 20, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "-6%", left: "24%", size: 50, delay: 20, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },
  { top: "90%", left: "42%", size: 50, delay: 20, image: "/assets/cources/courseDetails/WhatWillYouLearn1.webp" },

]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className='sm:py-12'>
    <section className="relative bg-[#faf7f4] overflow-hidden px-4 py-12  md:py-12">
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section */}
      <div className="relative lg:col-span-1 order-2 lg:order-1" aria-hidden="true">
        <div className="absolute inset-0 w-full h-full">
          {floatingAvatars.map((avatar, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: avatar.top,
                left: avatar.left,
                animation: `float 3s ease-in-out ${avatar.delay}s infinite`,
              }}
            >
              <Avatar 
                className="border-4 border-white shadow-lg transition-transform hover:scale-110"
                style={{ width: avatar.size, height: avatar.size }}
              >
                <Image 
                  src={avatar.image}
                  alt="Testimonial avatar" 
                  width={avatar.size} 
                  height={avatar.size}
                />
              </Avatar>
            </div>
          ))}
        </div>
      </div>
  
      {/* Right Section */}
      <div className="relative z-10 lg:col-span-1 order-1 lg:order-2">
        <h2 className="text-4xl md:text-3xl font-bold mb-8 tracking-tight">
          What our learners say
        </h2>
  
        <div className="w-full max-w-xl">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-lg">
              {testimonials[currentIndex].content}
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-400 text-white font-semibold text-xl">
                {testimonials[currentIndex].rating}
              </div>
              <div>
                <h4 className="font-semibold text-xl">{testimonials[currentIndex].name}</h4>
                <p className="text-gray-500">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full border-gray-200 hover:bg-white hover:text-gray-900"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full border-gray-200 hover:bg-white hover:text-gray-900"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  
    <style jsx>{`
      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }
  
      @media (max-width: 1024px) {
        .lg\\:grid-cols-2 {
          grid-template-columns: 1fr;
        }
      }
  
      @media (max-width: 768px) {
        .lg\\:col-span-1 {
          grid-column: span 1;
        }
  
        .lg\\:order-1 {
          order: 1;
        }
  
        .lg\\:order-2 {
          order: 2;
        }
      }
    `}</style>
  </section>
  </div>
    )
}
