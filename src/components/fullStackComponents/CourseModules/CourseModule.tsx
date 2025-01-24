'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Calendar, CalendarDays } from 'lucide-react'
import { modules } from "./data"
import { Module } from "./types"

export default function CourseCurriculumModule() {
  const [activeModule, setActiveModule] = useState<Module>(modules[0])

  return (
    <div className="pt-4 md:pt-0 w-full pb-0 relative bg-gradient-to-br from-gray-50 via-black-50 to-gray-100" id="trainingcontent">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading - Hidden on mobile */}
        <div className="hidden md:block max-w-6xl px-2 md:px-8 mx-auto py-6 text-3xl font-bold text-center">
          Let's walk you through the journey of <span className="text-[#ff0000]"> <br/>Career Switch / Salary hike Guaranteed </span> DevOps Training by LinuxWorld

        </div>

        <div className="container px-0 md:px-12 max-w-5xl mx-auto bg-gradient-to-r from-[#1e1e1e] via-[#212121] via-[#2f2f2f] to-[#363636] pb-6 rounded-xl relative">
        {/* <div className="container px-0 md:px-12 max-w-5xl mx-auto bg-gradient-to-r from-[#292929] via-[#323232] via-[#3d3d3d] to-[#4a4a4a] pb-6 rounded-xl relative"> */}
          {/* Tag with number - Hidden on mobile */}
          <div className="hidden md:block absolute -top-2 left-12">
            <div className="relative w-20 h-24">
              <img 
                alt="numbering" 
                className="w-full h-full" 
                src="/assets/tag3.png"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="md:hidden absolute -top-2 left-4 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">1</span>
          </div>

          {/* Content section */}
          <div className="pt-6 px-4 md:pl-16">
    <div className="absolute top-0 right-0 hidden md:block">
      <Badge 
        variant="secondary" 
        className="h-10 px-4 p-4 bg-[#4a4a4a] text-sm text-white border-none shrink-0"
      >
       <CalendarDays className="mr-2 mt-4 mb-4   h-6"/>  3 Months
      </Badge>
      
    </div>
    <div className="absolute top-0 right-0 sm:block md:hidden"> {/* Changed here */}
  <Badge 
    variant="secondary" 
    className="h-6 pt-2 pb-2 bg-[#4a4a4a] text-sm text-white border-none shrink-0"
  >
    <CalendarDays className=" mt-4 mb-4 h-6"/> &nbsp; 3 Months
  </Badge>
</div>
  <div className="flex items-start md:items-center mb-4 relative"> {/* Added relative */}
    {/* Badge positioned absolute in top right */}

    <div className="w-full">
      <h1 className="text-2xl md:text-2xl font-bold text-white mb-4 mt-2 md:ml-8">
        14+ DevOps Training Modules  
      </h1>
      <p className="text-white/90 max-w-3xl  md:pl-8 text-md">
      Exclusively designed, industry-relevant, placement-focused training modules by World Record Holder Mr. Vimal Daga offer you a step-by-step learning journey with hands-on practical implementation—ensuring you are fully prepared to become SRE I/ SRE II/ DevOps Engineer
     </p>
    </div>
  </div>
            {/* Mobile Module Tabs and Content */}
            <div className="md:hidden">
              <div className="overflow-x-auto flex gap-2 mt-4 pb-2 pl-12 w-full">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    onClick={() => setActiveModule(module)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold ${
                      activeModule.id === module.id
                        ? "bg-white text-[#710000]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    {module.title}
                  </button>
                ))}
              </div>

              {/* Mobile Content View */}
              <div className="mt-4 bg-white rounded-lg p-4 mx-4">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {activeModule.subtitle}
                </h2>
                <div className="space-y-4">
                
                  {activeModule.topics.map((topic, index) => (
                    <div key={index} className="text-sm text-gray-700">
                      <span className="font-bold">{topic.title}</span>
                      <ul className="list-disc pl-4 mt-2 space-y-2">
                        {topic.content.map((content, contentIndex) => (
                          <li key={contentIndex} className="text-gray-600">{content}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Cards Grid */}
            <div className="hidden md:grid gap-6 md:grid-cols-[350px,1fr] mt-8 md:-ml-12">
              {/* Module Selection Card */}
              <Card className="bg-white">
                <ScrollArea className="h-[400px]">
                  {modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => setActiveModule(module)}
                      className={`w-full text-left font-bold ${
                        activeModule.id === module.id
                          ? "bg-gray-100"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center justify-between p-3">
                        <div>
                          <div className="text-sm text-gray-600">{module.title}</div>
                          <div className="text-sm font-medium text-gray-900">{module.subtitle}</div>
                        </div>
                        {activeModule.id === module.id && (
                          <ChevronRight className="h-4 w-4 text-gray-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </ScrollArea>
              </Card>

              {/* Content Card */}
              <Card className="bg-white p-6">
                <ScrollArea className="h-[400px]">
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">
                      {activeModule.subtitle}
                    </h2>
                  </div>
                  <Separator className="mb-6" />
                  <div className="space-y-4">
            
                    {activeModule.topics.map((topic, index) => (
                      <div key={index} className="text-sm text-gray-700">
                        <span className="font-bold">{topic.title}</span>
                        <ul className="list-disc pl-4 mt-2 space-y-2">
                          {topic.content.map((content, contentIndex) => (
                            <li key={contentIndex}>{content}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Arrow */}
        <div className="pt-2 h-16 w-8 ml-8 md:ml-[130px]">
          <img 
            src="/assets/downarrow.png" 
            alt="Description of the image" 
            className="h-full w-full object-contain" 
          />
        </div>
      </div>
    </div>
  )
}