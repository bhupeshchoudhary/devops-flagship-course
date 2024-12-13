'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import DisplayCourseContent from './subComponents/DisplayCourseContent'


import { ArrowRight } from 'lucide-react'
//import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
//import Image from "next/image"
import ConsultantForm from '../Contact/ContactForm'
// Define types for learner data
interface Learner {
  name: string
  company: string
}

export default function KeyOutcomes() {
  const [isSticky, setIsSticky] = useState<boolean>(false)

  const rightSectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rightSectionRef.current) {
        const scrollPosition = window.scrollY
        const rightSectionTop = rightSectionRef.current.getBoundingClientRect().top
        const windowHeight = window.innerHeight

        if (scrollPosition >= rightSectionTop - windowHeight) {
          setIsSticky(true)
        } else {
          setIsSticky(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const learners: Learner[] = [
    { name: "ShareChat Learner", company: "ShareChat" },
    { name: "Google Learner", company: "Google" },
    { name: "Apna Learner", company: "Apna" },
    { name: "Capgemini Learner", company: "Capgemini" },
  ]

  const benefits: string[] = [
    "Stay ahead in your field by mastering industry relevant skills through our online sessions",
    "Dive into real challenges from today's businesses, gaining hands-on experience",
    "Tap into a wealth of career opportunities through our established network",
  ]

  const defaultLearnerImg = "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow"
  const LinuxWorldUrl = "https://media.licdn.com/dms/image/v2/C4E0BAQER-Sage-ex_A/company-logo_200_200/company-logo_200_200/0/1639050566015/linuxworld_informatics_pvt_ltd_logo?e=1739404800&v=beta&t=7LaZjwQW277ZW-ooZe19e_aWSS1uQzZULZzYC7t1JHY";

  return (
    <div className="flex flex-col lg:flex-row mt-4 max-w-6xl mx-auto pt-2">
      {/* Left Section */}
      <div className="lg:w-2/3 pt-6 h-full w-full">
      

        {/* <DisplayCourseContent /> */}
        <div className="flex min-h-full items-center justify-center bg-gray-50/50">
      <Card className="w-full max-w-[380px] shadow-lg">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-xl">
            Talk to a{" "}
            <span className="text-[#ff0000]">Consultant</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Fill in the details to get started
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name*"
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Id*"
              className="h-12"
            />
            <div className="flex gap-2">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[90px] h-12">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="IN"
                        width={16}
                        height={16}
                        className="rounded-sm"
                      />
                      +91
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="tel"
                placeholder="Phone Number*"
                className="h-12"
              />
            </div>
          </div>
          {/* <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="border-emerald-600 data-[state=checked]:bg-emerald-600" />
           
          </div> */}
          <Button className="w-full h-12 bg-[#ff0000] hover:bg-[#7340FF]">
            Submit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          {/* <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>In Collaboration with -</span>
            <Image
              src="/placeholder.svg"
              alt="IBM Logo"
              width={60}
              height={24}
              className="dark:invert"
            />
          </div> */}
        </CardContent>
      </Card>
    </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 p-6">
        {/* Sticky Card 1 */}
        <div
          ref={rightSectionRef}
          className={`sticky top-4 transition-all duration-300 ${isSticky ? "opacity-100" : "opacity-0"}`}
        >
          <Card className="mb-6 ">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold">5.4M+ Learners</CardTitle>
              <p className="text-muted-foreground">have reaped benefits from our programs</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="overflow-hidden">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 5,
                      ease: "linear",
                    },
                  }}
                  className="flex gap-4"
                >
                  {[...learners, ...learners].map((learner, index) => (
                    <div key={index} className="flex flex-col items-center flex-shrink-0">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                        <Image
                          src={defaultLearnerImg}
                          alt={learner.name}
                          width={64}
                          height={64}
                          className="object-cover"
                        />
                      </div>
                      <Image
                        src={`/placeholder.svg?text=${learner.company}`}
                        alt={learner.company}
                        width={64}
                        height={20}
                        className="h-5 w-auto object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>

              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4 ">
            {/* <CardHeader> */}
              <h2 className="text-xl font-semibold"> <span className='text-[#ff0000]'>LinuxWorld </span>Accreditation</h2>
            {/* </CardHeader> */}
            <div className="flex items-center gap-4">
              <Image
                src={LinuxWorldUrl}
                alt="Linux World"
                width={200}
                height={60}
                className="h-15 w-auto"
              />
              <div className="flex items-center gap-2">
                <Image
                  src="https://d3kl8zsmmx4oop.cloudfront.net/linkedin_symbol_svg_1_087168127b.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="h-6 w-6 grayscale"
                />
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground">LinkedIn</span>
                  <span className="text-sm font-semibold">Top Startup India 2023</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
