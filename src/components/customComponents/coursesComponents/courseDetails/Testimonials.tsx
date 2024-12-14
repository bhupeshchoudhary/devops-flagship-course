'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Kevin James',
    role: 'Happy Client',
    rating: 66,
    content:
      'Nemo enim ipsam voluptatem quia voluptas sit asperna aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciuntporro quisuam est, rui dolorem ipsum quia dolor sit amet, consectetur adieisci velit sed ruia.',
    image: '/assets/About/profile1.png',
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    role: 'Satisfied Customer',
    rating: 78,
    content:
      'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    image: '/assets/About/profile2.png',
  },
];

const floatingAvatars = [
  { top: '10%', left: '15%', size: 80, delay: 0, image: '/assets/cources/courseDetails/WhatWillYouLearn1.webp' },
  { top: '20%', left: '40%', size: 100, delay: 1, image: '/assets/cources/courseDetails/WhatWillYouLearn2.webp' },
  { top: '40%', left: '25%', size: 90, delay: 2, image: '/assets/cources/courseDetails/WhatWillYouLearn3.webp' },
  { top: '60%', left: '40%', size: 110, delay: 1.5, image: '/assets/cources/courseDetails/WhatWillYouLearn1.webp' },
  { top: '20%', left: '8%', size: 110, delay: 1.5, image: '/assets/cources/courseDetails/WhatWillYouLearn2.webp' },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative min-h-[600px] bg-[#faf7f4] overflow-hidden p-6 md:p-12">
      {/* Floating Avatars */}
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
                alt="Floating Avatar"
                width={avatar.size}
                height={avatar.size}
              />
            </Avatar>
          </div>
        ))}
      </div>

      {/* Testimonials Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side Placeholder for Large Screens */}
          <div className="order-1 lg:order-none">
            <div className="flex justify-center">
              <Image
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                width={200}
                height={200}
                className="rounded-full shadow-md"
              />
            </div>
          </div>

          {/* Right Side Testimonial */}
          <div className="relative z-10 text-center lg:text-left order-2 lg:order-none">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
              What our learners say
            </h2>

            <div className="w-full max-w-xl mx-auto lg:mx-0">
              <p className="text-gray-600 leading-relaxed text-lg mb-6">
                {testimonials[currentIndex].content}
              </p>
              <div className="flex flex-col items-center lg:flex-row lg:items-start gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-400 text-white font-semibold text-xl">
                  {testimonials[currentIndex].rating}
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-semibold text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center lg:justify-start gap-4 mt-8">
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
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .container {
            padding: 1rem;
          }

          h2 {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}
