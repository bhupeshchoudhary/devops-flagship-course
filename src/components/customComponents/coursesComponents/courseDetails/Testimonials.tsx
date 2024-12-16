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
    name: "Manikandan Prakash",
    role: "Happy Client",
    rating: 66,
    content: "It was very informative and 100 pratical session by vimal sir ,From that I did learn the bedrock service how to intergrate in any of our own custom requirment ,It was pretty enough to start AWS bedrock thanks for the session Vimal Daga sir. ",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFiY07rDFiZ1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698246875639?e=1737590400&v=beta&t=n4sQVUqx1DDJaKh2fEvBUd5l6FR5_k7JEpb1cBS_ZTk"
  },
  {
    id: 2,
    name: "Dibyaraj Datta",
    role: "Satisfied Customer",
    rating: 78,
    content: "It was truly an amazing masterclass by the one & only Mr. Vimal Daga Sir. The Wow moment for me was how he explained each and every concept in such an easy manner from basic to advance, like the use of Helm Charts to solve modern world problems with container management.    Looking forward to join more such sessions & workshops from LinuxWorld Informatics Pvt Ltd under the guidance of Vimal Daga Sir.",
    image: ""
  },
  {
      id: 3,
      name: "Rushikesh Mahindrakar",
      role: "System Engineering",
      rating: 88,
     image: "https://media.licdn.com/dms/image/v2/D4D03AQGf6T3ej4bqMA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1686901550352?e=1737590400&v=beta&t=bCqKfqio6arSRNKOqOgDznJav6d1OqbsHzPMZAbK_tQ",
      
      content: ` Your invaluable guidance in this remarkable Kubernetes training program has been truly appreciated. It's a pivotal milestone in my DevOps journey, and I'm deeply grateful for your mentorship, Vimal Daga sir. Your expertise and insights are immensely valuable, propelling my professional growth with each session. Thank you!! 😊 `,
      
    }
]

const floatingAvatars = [
  { top: "32%", left: "40%", size: 80, delay: 200, image: "https://media.licdn.com/dms/image/v2/D4E03AQFiY07rDFiZ1A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698246875639?e=1737590400&v=beta&t=n4sQVUqx1DDJaKh2fEvBUd5l6FR5_k7JEpb1cBS_ZTk" },
  { top: "64%", left: "40%", size: 80, delay: 0, image: "https://media.licdn.com/dms/image/v2/D5603AQENeos_aDytsw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711478336339?e=1737590400&v=beta&t=eqdh3QVuz82VyuHWF78Bmif0EVec9xdh47F6VqZmmko" },
  { top: "54%", left: "54%", size: 80, delay: 0, image: "https://media.licdn.com/dms/image/v2/D4D03AQFqtDCGoMk54g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673897788931?e=1737590400&v=beta&t=s2TDcsAQ2oqQ_DvoGT8yyUUaGvsfGDwan4Phjo1RFL0" },
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

    )
}
