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
    name: "Darshil Shah",
    role: "DevOps Engineer",
    rating: 66,
    content: "Thank you, sir. I never had the chance to speak to you directly before, but it's an honor to do so now. From the first lecture of ARTH-1 to now being a DevOps engineer at a well-reputed company, it has been an incredible journey. I credit you for your guidance and teaching, which showed me how the thinking process of an engineer should be. Learning skills is secondary; what comes first is the mindset and how you approach problems or learning any new skill. I'm proud to be an ARTH student and grateful to have found a mentor like you.",
    image: "/assets/learnersSayImages/darshilshah.png"
  },
  {
    id: 2,
    name: "Ashish Mangal",
    role: "Software Engineer",
    rating: 78,
    content: "Hello sir, Thank you so much for your kind words and encouragement! I truly appreciate your support throughout my journey. Being an ARTHian has had a huge impact on my growth, and I'm excited to continue learning and exploring new technologies at Capgemini. Your blessings mean a lot to me!",
    image: "/assets/learnersSayImages/ashishmangal.png"
  },
  {
      id: 3,
      name: "Abhijit Mandal",
      role: "Software Engineer",
      rating: 88,
     image: "/assets/learnersSayImages/abhijitmandal.png",
      
      content: `Hi Vimal Sir,

Thank you so much for your kind words and blessings! It truly means a lot, especially coming from someone who played such an instrumental role in shaping my journey. I still remember being in my 2nd year of college during the lockdown, participating in the ARTH program. While I may not be working with the same tools and technologies today, what you really instilled in me was a deep desire to learn and stay curious - a trait that has been invaluable in my path to becoming a software engineer.

I'm deeply grateful for your guidance, and I hope you continue to inspire both my juniors and the rest of us. Thank you once again for everything, sir.`,
      
    }
    ,
    {
      "id": 5,
      "name": "Devesh Chitlangia",
      "role": "Software Engineer @ GlobalLogic",
      "rating": 88,
      "image": "/assets/learnersSayImages/deveshchitlangia.png",
      "content": "Thank you so much for your kind words and blessings! It means a lot coming from you. I feel fortunate to have had the opportunity to learn under your guidance in the ARTH program. Your teachings have played a huge role in shaping my journey, and I continue to draw inspiration from your passion for technology and learning. You are a great teacher, and I am truly grateful for all the knowledge and wisdom you've shared with me. I'll always carry those lessons forward as I continue to grow. Thank you once again for everything!"
  }
    ,
    {
      "id": 6,
      "name": "Divyansh Saxena",
      "role": "Software Engineer @ Pitney Bowes",
      "rating": 88,
      "image": "/assets/learnersSayImages/divyanashsaxena.png",
      "content": "Thank you so much sir for your kind words! It means a lot to be noticed by you. Your guidance and the ARTH program has been a huge part of my career journey, and I'm grateful for everything I learned from you. It's an honor to be called an ARTHian. Your blessings and encouragement means the world."
  }
    ,
    {
      "id": 7,
      "name": "Gargi Patel",
      "role": "IT Engineer II @ Honeywell",
      "rating": 88,
      "image": "/assets/learnersSayImages/gargipatel.png",
      "content": "Hello Vimal Sir, thank you so much! Means a lot to get this from you. I have learnt a lot from you during my internship at linux world and in the ARTH program. It has helped me a lot in my career journey so far. I actually cracked the interview at Honeywell because of the project done in linux world internship. So for me it was totally worth it."
  }
    ,
    {
      "id": 8,
      "name": "Harshal Thakare",
      "role": "ATSE @ Red Hat",
      "rating": 88,
      "image": "/assets/learnersSayImages/harshalthakre.png",
      "content": "Hello Vimal Sir, I can't image that you messaged me. It truly feels like a dream come true! I want to take a moment to express my deepest gratitude to you. Your guidance and mentorship have meant the world to me. Without your support I wouldn't be where I am today. Your message truly touched me, and it made me reflect on how much of an impact you have had on my journey. I remember I once had the opportunity to meet you in person, but unfortunately, due to a family emergency, I couldn't make it. I deeply regret missing that chance I really want to meet you. You've shaped my path in ways that words cannot fully express. Thank you again, Sir, for everything. I look forward to the day I can meet you and express this in person."
  }
    ,
    {
      "id": 9,
      "name": "Kaushik Denge",
      "role": "Cloud Network Engineer @ Capgemini",
      "rating": 88,
      "image": "/assets/learnersSayImages/kaushikdenge.png",
      "content": "Thank you so much for your kind words and blessings Vimal Sir! It truly means a lot to me.. ARTH was such a transformative experience and your guidance played a crucial role in shaping my journey. I'm grateful for everything I learned during that time and I carry those lessons and memories with me every day. I'll continue to strive for growth and keep pushing boundaries in the tech world. Proud to be an ARTHian!"
  }
    ,
    {
      "id": 10,
      "name": "Mayank Agarwal",
      "role": "Associate @ pwc",
      "rating": 88,
      "image": "/assets/learnersSayImages/mayankagarwal.png",
      "content": "All the things that are taught by you help me here as well in achieving an edge over everyone. And I would also like to mention that because of the skill set I got a better offer from Deloitte and on 14th oct im joining there. And one of my college Junior Ankit talks a lot about you."
  }
    ,
    {
      "id": 11,
      "name": "Rahul Raipurkar",
      "role": "Senior Software Engineer @ Capgemini",
      "rating": 88,
      "image": "/assets/learnersSayImages/rahulraipuriya.png",
      "content": "I am truly blessed to be part of Arth 2.0. It has given me invaluable knowledge in various technologies and their integration, giving me a competitive edge. I am also deeply grateful for the spiritual wisdom that Arth has beautifully imparted to me."
  }
    ,
    {
      "id": 12,
      "name": "Rahul Rathod",
      "role": "CloudOps Engineer @ Seclore",
      "rating": 88,
      "image": "/assets/learnersSayImages/rahulrathod.png",
      "content": "Thank you so much, Sir! Whatever I am today is because of the foundation and knowledge I gained during the ARTH journey under your guidance. Your teachings have always been an inspiration, and I continue to apply the principles you instilled in me every day. Your blessings mean a lot to me, and I'll always strive to grow and learn, just as you taught us. Proud to be an ARTHian, and truly grateful to have had a mentor like you!"
  },
  {
    "id": 13,
    "name": "Ritwik Jha",
    "role": "Associate Consultant @ Oracle",
    "rating": 88,
    "image": "/assets/learnersSayImages/ritwikjha.png",
    "content": "Hi Vimal Sir, Thank you so much for your kind words and blessings! It truly means a lot coming from you. ARTH was such a transformative experience for me, and it has played a huge role in shaping my career. I feel grateful to have had the opportunity to learn from someone as inspiring as you. I will definitely keep learning and striving to grow, both personally and professionally as I believe that there is still a lot to learn and a lot to achieve. Thanks again for all your support and encouragement."
},
{
  "id": 14,
  "name": "Rupali Gurjar",
  "role": "Software Engineer II @ Cvent",
  "rating": 88,
  "image": "/assets/learnersSayImages/rupaligurjar.png",
  "content": "Thank you so much sir, it really means a lot! Being ARThian was one of my best decision! The core concepts that I learned from you helps me to adapt the new technologies and their integrations smoothly. You are truly inspirational!"
},

{
  "id": 15,
  "name": "Rohan Parab",
  "role": "Performance Quality Engineer @ Citi",
  "rating": 88,
  "image": "/assets/learnersSayImages/rohanparab.png",
  "content": "Hello Vimal Sir, Thank you so much for the appreciation. My journey in tech started with ARTH and your guidance. Every lesson since the first day has deeply impacted both my work and personal life. You didn't just teach; you helped us understand how to grow, achieve, and remain humble while uplifting others, academically and spiritually. Words can't fully express the positive influence you've had on me and countless others. Your appreciation means a great deal to me, and I'm truly grateful. Thank you again."
}
]

const floatingAvatars = [
  { top: "32%", left: "40%", size: 80, delay: 200, image: "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1742428800&v=beta&t=FwXDlkMxgxkWqJDEhrHhA20j6BFU-FTFc218GM8MX5M" },
  { top: "64%", left: "40%", size: 80, delay: 0, image: "/assets/learnersSayImages/gargipatel.png" },
  { top: "54%", left: "54%", size: 80, delay: 0, image: "/assets/learnersSayImages/harshalthakre.png" },
  { top: "24%", left: "56%", size: 80, delay: 0, image: "/assets/learnersSayImages/kaushikdenge.png" },
  { top: "4%", left: "46%", size: 80, delay: 0, image: "/assets/learnersSayImages/mayankagarwal.png" },
  { top: "4%", left: "30%", size: 80, delay: 0, image: "/assets/learnersSayImages/rahulraipuriya.png" },
  { top: "29%", left: "24%", size: 80, delay: 0, image: "/assets/learnersSayImages/rahulrathod.png" },
  { top: "54%", left: "26%", size: 80, delay: 0, image: "/assets/learnersSayImages/ritwikjha.png" },
  { top: "74%", left: "20%", size: 50, delay: 20, image: "/assets/learnersSayImages/rohanparab.png" },
  { top: "34%", left: "14%", size: 50, delay: 20, image: "/assets/learnersSayImages/rupaligurjar.png" },
  { top: "24%", left: "71%", size: 50, delay: 20, image: "/assets/learnersSayImages/sheetalagarwal.png" },
  { top: "74%", left: "66%", size: 50, delay: 20, image: "/assets/learnersSayImages/divyanashsaxena.png" },
  { top: "-6%", left: "59%", size: 50, delay: 20, image: "/assets/learnersSayImages/abhijitmandal.png" },
  { top: "-6%", left: "24%", size: 50, delay: 20, image: "/assets/learnersSayImages/ashishmangal.png" },
  { top: "90%", left: "42%", size: 50, delay: 20, image: "/assets/learnersSayImages/darshilshah.png" },

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
              <Image 
                  src={  testimonials[currentIndex].image}
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
  </section>

    )
}
