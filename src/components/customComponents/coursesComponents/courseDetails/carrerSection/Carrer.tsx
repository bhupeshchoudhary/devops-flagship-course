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

export default function CourseCarrrerModule() {
  const [activeModule, setActiveModule] = useState<Module>(modules[1]) // Start with Module 2 active

  return (

    <div className="pt-8 w-full pb-8 flex bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className=" container px-4 md:px-12 max-w-5xl mx-auto bg-gray-200 p-12 rounded-xl">
      <div className="mx-auto ">
        <div className="relative mb-6">
        
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-black">
              Career <span className="text-[#ff0000]">Track</span></h1>
              <p className="mt-2 max-w-3xl text-gray-900">
              Once you have enrolled for the program then you will have access to a wide range of resources which will help you in becoming a Job-Ready Candidate. We have a dedicated placement team of professionals who excel in their individual domains committed to assist you in our journey.
              </p>
            </div>
            <Badge variant="secondary" className="h-6">
              6 Months
            </Badge>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[300px,1fr] ">
          <Card className="bg-white ">
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
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">
                {activeModule.subtitle}
              </h2>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Download Syllabus
              </Button>
            </div>
            <Separator className="mb-6" />
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-600">Topics-</h3>
              {activeModule.topics.map((topic, index) => (
                <div key={index} className="text-sm text-gray-700">
                  {topic}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  )
}

