"use client"
import react from "react";
import { useParams  } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share } from "lucide-react";
import { Star } from 'lucide-react';
import { ST } from "next/dist/shared/lib/utils";
const CourseDetailHero = ()=>{
    const params = useParams ();
    const {pid}  = params;

    return (
        <>
        <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
<div className="container mx-auto  p-6 max-w-6xl px-6 lg:px-8">
      <Card className="max-w-6xl  mx-auto rounded-[32px] overflow-hidden shadow-lg">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Program Information */}
            <div className="flex-1 p-12">
              {/* Share Button */}
        

              {/* Title Section */}
              <div className="mb-6">
                <h1 className="text-3xl font-bold leading-tight  mb-2">


                  
                  <span className="text-[#ff0000]">Job Oriented DevOps </span>
                  <br></br>
                  <span className="text-black">Globally Recognised Program
                  </span>
                  <div className="text-black"></div>
                </h1>
                <div className="text-gray-600 text-sm font-bold leading-relaxed">


                    

                
        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-emerald-500 shrink-0">
              <Star  size={18} className="text-[#ff0000]"/>
            </span>
            <span className="text-gray-900">
            Curated by industry expert with over 22 years of experience, this 300+ hours Global DevOps Program covers tools & technologies like Kubernetes, Jenkins, Ansible, GIT n GITHub, Docker, etc at Assured minimum package of ₹5 LPA with the LWs Job Placement Oriented Program

            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-500 shrink-0">
            <Star  size={18} className="text-[#ff0000]"/>
            </span>
            <span className="text-gray-900">
            Free 6 Months Internship Certificate

            </span>
          </li>

          <li className="flex gap-3">
            <span className="text-emerald-500 shrink-0">
            <Star  size={18} className="text-[#ff0000]"/>
            </span>
            <span className="text-gray-900">
            10 Industry Level Projects


            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-emerald-500 shrink-0">
            <Star  size={18} className="text-[#ff0000]"/>
            </span>
            <span className="text-gray-900">Placement Training Included Resume Building, LinkedIn Profile Building, Impressive GITHub Profile,Interview Preps, Soft Skills

            </span>
          </li>
       
        </ul>
 

                   
                    
                </div>
              </div>

              {/* Program Details */}
              {/* <div className="grid grid-cols-3 gap-8 mb-4">
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">Type</p>
                  <p className="text-[#ff0000] font-medium text-base">Doctorate</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">Start Date</p>
                  <p className="text-[#ff0000] font-medium text-base">Nov 14, 2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm">Duration</p>
                  <p className="text-[#ff0000] font-medium text-base">36 Months</p>
                </div>
              </div> */}

              {/* CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button 
                  variant="outline" 
                  className="flex-1 h-12 text-sm font-medium rounded-full border hover:bg-transparent hover:text-black transition-colors"
                >
                  Download Brochure
                </Button>
                <Button 
                  className="flex-1 h-12 text-sm font-medium rounded-full bg-[#ff0000] hover:shadow-md hover:shadow-black hover:bg-[#ff0000] shadow-md transition-colors"
                >
                  Apply Now
                </Button>
              </div> */}

              {/* Contact Information */}
              <div className="flex items-center gap-2 text-gray-600  pt-4">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="">For enquiries call: 1800 210 2020</span>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="md:w-[45%] relative overflow-hidden rounded-l-[32px]">
              {/* Professional photo with black background */}
              <img 
                src="/assets/cources/course1.jpg" 
                alt="Professional business woman"
                className="absolute inset-0 w-full h-full object-cover"
              />
             
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>
        </>
    )
}

export default CourseDetailHero;