"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../../../data/testimonial';

const floatingAvatars = [
  { top: "32%", left: "40%", size: 80, delay: 200, image: "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1742428800&v=beta&t=FwXDlkMxgxkWqJDEhrHhA20j6BFU-FTFc218GM8MX5M" },
  { top: "64%", left: "40%", size: 80, delay: 0, image: "/assets/learnersSayImages/harshalthakre.png" },
  { top: "54%", left: "54%", size: 80, delay: 0, image: "/assets/learnersSayImages/kaushikdenge.png" },
  { top: "24%", left: "56%", size: 80, delay: 0, image: "/assets/learnersSayImages/mayankagarwal.png" },
  { top: "4%", left: "46%", size: 80, delay: 0, image: "/assets/learnersSayImages/rahulraipuriya.png" },
  { top: "4%", left: "30%", size: 80, delay: 0, image: "/assets/learnersSayImages/rahulrathod.png" },
  { top: "29%", left: "24%", size: 80, delay: 0, image: "/assets/learnersSayImages/ritwikjha.png" },
  { top: "54%", left: "26%", size: 80, delay: 0, image: "/assets/learnersSayImages/rupaligurjar.png" },
  { top: "74%", left: "20%", size: 50, delay: 20, image: "/assets/learnersSayImages/rohanparab.png" },
  { top: "34%", left: "14%", size: 50, delay: 20, image: "/assets/learnersSayImages/deveshchitlangia.png" },
  { top: "24%", left: "71%", size: 50, delay: 20, image: "/assets/learnersSayImages/divyanashsaxena.png" },
  { top: "74%", left: "66%", size: 50, delay: 20, image: "/assets/learnersSayImages/abhijitmandal.png" },
  { top: "-6%", left: "59%", size: 50, delay: 20, image: "/assets/learnersSayImages/ashishmangal.png" },
  { top: "-6%", left: "24%", size: 50, delay: 20, image: "/assets/learnersSayImages/darshilshah.png" },
  { top: "90%", left: "42%", size: 50, delay: 20, image: "/assets/learnersSayImages/gargipatel.png" },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ensure the component is only rendered on the client side
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

  const handleAvatarClick = (index: number) => {
    // Map the specific avatar to a specific testimonial index
    if (index === 14) { // Assuming the last avatar is the one you want to map
      setCurrentIndex(0); // Set to the index of the desired testimonial
    } else {
      setCurrentIndex(index);
    }
  };

  if (!isClient) {
    return null; // Avoid rendering on the server
  }

  return (
    <div className="relative bg-[#faf7f4] overflow-hidden px-4 py-12 md:py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Left Section */}
        <div className="relative lg:col-span-1 order-2 lg:order-1 flex-shrink-0 h-96  " aria-hidden="true">
          <div className="absolute inset-0 w-full h-full">
            {floatingAvatars.map((avatar, index) => (
              <div
                key={index}
                className="absolute cursor-pointer"
                style={{
                  top: avatar.top,   
                  left: avatar.left,
                  animation: `float 3s ease-in-out ${avatar.delay}s infinite`,
                }}
                onClick={() => handleAvatarClick(index)}
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
          <h2 className="text-3xl md:text-3xl font-bold mb-8 tracking-tight">
          What our placed learners says
          </h2>

          <div className="w-full max-w-xl">
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-400 text-white font-semibold text-xl">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt="Testimonial avatar"
                    width={60}
                    height={60}
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