'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Download, ChevronRight } from 'lucide-react'
import { modules } from "./data"
import { Module } from "./types"


export default function CourseCurriculumModule() {
  const [activeModule, setActiveModule] = useState<Module>(modules[1]) // Start with Module 2 active

  return (
    <div className="pt-8 w-full pb-0 relative bg-gradient-to-br from-gray-50 via-black-50 to-red-50" id="trainingcontent">
     <div className="max-w-6xl mx-auto">
<div className="max-w-6xl px-2 md:px-8 mx-auto py-6 text-3xl font-bold ">Let’s walk you through the journey of  <span className="text-[#ff0000]">Placement Guaranteed DevOps </span> Training by LinuxWorld</div>
    <div className=" container px-4 md:px-12 max-w-5xl mx-auto bg-gray-200 pb-6 rounded-xl">

    <span className="h-12 w-12 ">
<img alt="numbering" className="h-16 w-16" src="/assets/tag3.png" ></img>
</span>


      <div className="mx-auto mt-2 lg:mt-8 md:mt-8">
        <div className="relative mb-6">
        {/* <div className="absolute -left-[48] -top-[48] flex h-12 w-12 items-center justify-center ">
            <span className="text-xl font-bold text-white">

              <img alt="numbering" src="/assets/tag1.webp" ></img>
            </span>
          </div> */}

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-black">
              <span className="text-[#ff0000]"> 14+ DevOps </span> Training Modules
              </h1>
              <p className="mt-2 max-w-3xl text-black">
              Exclusively designed, industry-relevant, placement-focused training modules by World Record Holder Mr. Vimal Daga offer you a step-by-step learning journey with hands-on practical implementation—ensuring you are fully prepared to become <span className="font-bold">DevOps Engineer</span>
              </p>
           </div>

           <Badge variant="secondary" className="h-6 w-20 flex-shrink-0">
             <span className=""> 3 Months </span>
            </Badge>


          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-[300px,1fr] ">
          <Card className="bg-white">
            <ScrollArea className="h-[400px]">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module)}
                  className={`w-full text-left ${
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

          <Card className="bg-white p-6">
          <ScrollArea className="h-[400px]">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {activeModule.subtitle}
              </h2>
              {/* <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Syllabus
              </Button> */}
            </div>
            <Separator className="mb-6" />

            <div className="space-y-2 ">
              <h3 className="text-sm font-medium text-gray-600">Topics-</h3>
              {activeModule.topics.map((topic, index) => (

                <div key={index} className="text-sm text-gray-700 ">

                  <span className="font-bold">{topic.title}</span>
                  {topic.content.map((content, contentIndex) => (
                    <div key={contentIndex} className="ml-4 ">
                      {content}
                    </div>
                  ))}

                </div>

              ))}

            </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
      </div>
  
      <div className="pt-2 h-16 w-8 ml-8 md:ml-[130px] ">
    <img src="/assets/downarrow.png" alt="Description of the image" className="h-full w-full object-contain" />
</div>
      </div>
      </div>
    
  )
}
