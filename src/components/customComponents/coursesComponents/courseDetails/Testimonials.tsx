



"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../../../data/testimonial';

interface FloatingAvatar {
  top: string;
  left: string;
  size: number;
  delay: number;
  image: string;
  testimonialId: number;
}
// Updated floatingAvatars array with testimonialId
const floatingAvatars: FloatingAvatar[] = [
  { 
    top: "32%", 
    left: "40%", 
    size: 80, 
    delay: 200, 
    image: "/assets/learnersSayImages/gargipatel.png",
    testimonialId: 1 
  },
  { 
    top: "64%", 
    left: "40%", 
    size: 80, 
    delay: 0, 
    image: "/assets/learnersSayImages/harshalthakre.png",
    testimonialId: 2 
  },
  { 
    top: "54%", 
    left: "54%", 
    size: 80, 
    delay: 0, 
    image: "/assets/learnersSayImages/kaushikdenge.png",
    testimonialId: 3 
  },
  { 
    top: "24%", 
    left: "56%", 
    size: 80, 
    delay: 0, 
    image: "/assets/learnersSayImages/mayankagarwal.png",
    testimonialId: 4 
  },
  { 
    top: "4%", 
    left: "46%", 
    size: 80, 
    delay: 0, 
    image: "/assets/learnersSayImages/rahulraipuriya.png",
    testimonialId: 5 
  },
  { 
    top: "4%", 
    left: "30%", 
    size: 80, 
    delay: 0, 
    image: "/assets/learnersSayImages/rahulrathod.png",
    testimonialId: 6 
  },
  { 
    top: "29%", 
    left: "24%", 
    size: 80, 
    delay: 0, 
    image: "/assets/learnersSayImages/ritwikjha.png",
    testimonialId: 7 
  },
  { 
    top: "54%", 
    left: "26%", 
    size: 80, 
    delay: 0, 
    image: "/assets/learnersSayImages/rupaligurjar.png",
    testimonialId: 8 
  },
  { 
    top: "74%", 
    left: "20%", 
    size: 50, 
    delay: 20, 
    image: "/assets/learnersSayImages/rohanparab.png",
    testimonialId: 9 
  },
  { 
    top: "34%", 
    left: "14%", 
    size: 50, 
    delay: 20, 
    image: "/assets/learnersSayImages/deveshchitlangia.png",
    testimonialId: 10 
  },
  { 
    top: "24%", 
    left: "71%", 
    size: 50, 
    delay: 20, 
    image: "/assets/learnersSayImages/divyanashsaxena.png",
    testimonialId: 11 
  },
  { 
    top: "74%", 
    left: "66%", 
    size: 50, 
    delay: 20, 
    image: "/assets/learnersSayImages/abhijitmandal.png",
    testimonialId: 12 
  },
  { 
    top: "-6%", 
    left: "59%", 
    size: 50, 
    delay: 20, 
    image: "/assets/learnersSayImages/BellamkondaNarendraVenkataSaiChaitanya.png",
    testimonialId: 13 
  },
  { 
    top: "-6%", 
    left: "24%", 
    size: 50, 
    delay: 20, 
    image: "/assets/learnersSayImages/DhavalChhayla.png",
    testimonialId: 14 
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Update the handleAvatarClick function with the type
  const handleAvatarClick = (avatar: FloatingAvatar) => {
    const testimonialIndex = testimonials.findIndex(t => t.id === avatar.testimonialId);
    if (testimonialIndex !== -1) {
      setCurrentIndex(testimonialIndex);
    }
  };


  if (!isClient) {
    return null;
  }

  return (
    <div className="relative bg-[#faf7f4] overflow-hidden px-4 py-12 md:py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="relative lg:col-span-1 order-2 lg:order-1 flex-shrink-0 h-96" aria-hidden="true">
          <div className="absolute inset-0 w-full h-full">
            {floatingAvatars.map((avatar, index) => (
              <div
                key={index}
                className="absolute cursor-pointer transform transition-all duration-300"
                style={{
                  top: avatar.top,
                  left: avatar.left,
                  animation: `float 3s ease-in-out ${avatar.delay}s infinite`,
                }}
                onClick={() => handleAvatarClick(avatar)}
              >
                <Avatar
                  className={`border-4 shadow-lg transition-transform hover:scale-110 ${
                    testimonials[currentIndex].id === avatar.testimonialId 
                      ? 'border-red-500 scale-110' 
                      : 'border-white hover:border-red-200'
                  }`}
                  style={{ width: avatar.size, height: avatar.size }}
                >
                  <Image
                    src={avatar.image}
                    alt={`${testimonials.find(t => t.id === avatar.testimonialId)?.name || 'Testimonial'} avatar`}
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
          <h2 className="text-3xl md:text-3xl font-bold mb-8 tracking-tight">
            What our placed learners say
          </h2>

          <div className="w-full max-w-xl">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
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
    </div>
  );
}