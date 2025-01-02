"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Certificates() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] mb-8">
        Industry-recognized & government approved Full Stack Development Certification
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Internshala Certificate */}
        <Card className="border-0 shadow-none">
          <CardHeader className="px-0">
            <CardTitle className="text-xl p-2 font-semibold text-[#2E2E2E]">
              Internshala Trainings certificate
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <p className="text-[#4A4A4A] mb-4">
              Upon successful completion of the program, you will receive a Full Stack Development
              Placement Guarantee Course certificate from Internshala.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full max-w-sm cursor-pointer transition-transform hover:scale-105">
                  <AspectRatio ratio={3/4}>
                    <Image
                      src="/assets/Certificate/cert1.webp"
                      alt="Internshala Training Certificate"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </AspectRatio>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <AspectRatio ratio={3/4}>
                  <Image
                    src="/assets/Certificate/cert1.webp"
                    alt="Internshala Training Certificate"
                    fill
                    className="rounded-lg object-cover"
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* NSDC Certificate */}
        <Card className="border-0 shadow-none">
          <CardHeader className="px-0">
            <CardTitle className="text-xl p-2 font-semibold text-[#2E2E2E]">
              NSDC & Skill India certificate
            </CardTitle>
          </CardHeader>
          <CardContent className="px-0">
            <p className="text-[#4A4A4A] mb-4">
              Also, receive a certificate from NSDC (National Skill Development Corporation) and
              Skill India.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="w-full max-w-sm cursor-pointer transition-transform hover:scale-105">
                  <AspectRatio ratio={3/4}>
                    <Image
                      src="/assets/Certificate/cert2.webp"
                      alt="NSDC and Skill India Certificate"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </AspectRatio>
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <AspectRatio ratio={3/4}>
                  <Image
                    src="/assets/Certificate/cert2.webp"
                    alt="NSDC and Skill India Certificate"
                    fill
                    className="rounded-lg object-cover"
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

