




import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ZoomIn } from "lucide-react"

export default function Certification() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 mx-auto">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-12 text-center">
          Industry-recognized & government approved{" "}
          <span className="text-red-600">Full Stack Development Certification</span>
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Certificate Section */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">1</span>
                Internshala Trainings certificate
              </h2>
              <p className="text-gray-600 pl-10">
                Upon successful completion of the program, you will receive a Full
                Stack Development Placement Guarantee Course certificate from
                Internshala.
              </p>
              
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative group">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src="/assets/certificates/internshala.png"
                        alt="Internshala Certificate"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                        <ZoomIn className="text-red-600" size={24} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Center Divider */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="w-[2px] h-[400px] bg-gradient-to-b from-transparent via-red-200 to-transparent"></div>
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
              &
            </div>
          </div>

          {/* Right Certificate Section */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">2</span>
                NSDC & Skill India certificate
              </h2>
              <p className="text-gray-600 pl-10">
                Also, receive a certificate from NSDC (National Skill Development
                Corporation) and Skill India.
              </p>
              
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative group">
                    <div className="relative w-full h-[400px]">
                      <Image
                        src="/assets/certificates/nsdc.png"
                        alt="NSDC Certificate"
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                        <ZoomIn className="text-red-600" size={24} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}