// CourseHero.tsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import HeroImage from "../../../../../public/assets/heroImage.jpg"
import { MdOnlinePrediction } from "react-icons/md"
import { BsCalendarCheck } from "react-icons/bs"
import { FaMoneyBillWave } from "react-icons/fa"
import { TbCertificate } from "react-icons/tb"



const Hero = () => {
  return (
    <div className="mx-auto pb-12 md:pb-0">
      {/* Gradient Background */}
      <div className="bg-gradient-to-b from-red-900 to-red-700 h-[780px] md:h-[400px] lg:h-[400px]  px-4 sm:px-6"> 
        <div className="max-w-6xl mx-auto py-8 sm:py-8">
          {/* Top Badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
            <Badge variant="secondary" className="bg-red-800 text-white text-xs sm:text-sm">
              Government-certified
            </Badge>
            <Badge variant="secondary" className="bg-red-800 text-white text-xs sm:text-sm">
              AI-Powered ✨
            </Badge>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 lg:justify-between lg:items-center">
            <div className="max-w-2xl">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-yellow-400 mb-2">
                Full Stack Development
                <span className="text-white"> Course with</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                Guaranteed Placement
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white mb-6">
                Get placed with ₹3-10 LPA salary
              </p>
              <Button variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-purple-700 text-sm sm:text-base">
                Introducing Live Bootcamp
              </Button>
            </div>

            {/* Right Side Image */}
            <div className="relative w-full lg:w-[600px] h-[220px] mt-4 lg:mt-0">
              <Image 
                src={HeroImage}
                alt="Course illustration"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Bottom Info Card */}
          <div className="relative">
  <div className="relative left-0 right-0 -bottom-[48px]">
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg">
      {/* Main container with better spacing */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Info Sections Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {/* Online Section */}
          <div className="flex items-start gap-3 justify-center lg:justify-start">
            <MdOnlinePrediction className="text-red-700 text-xl mt-1" />
            <div className="flex flex-col">
              <span className="text-red-700 text-sm font-medium">ONLINE</span>
              <span className="font-bold text-sm">6 months</span>
            </div>
          </div>

          {/* Admission Section */}
          <div className="flex items-start gap-3 justify-center lg:justify-start">
            <BsCalendarCheck className="text-red-700 text-xl mt-1" />
            <div className="flex flex-col">
              <span className="text-red-700 text-sm font-medium">ADMISSION CLOSES ON</span>
              <span className="font-bold text-sm">7th Jan</span>
              <Badge variant="outline" className="text-yellow-600 border-yellow-600 text-xs mt-1 whitespace-nowrap">
                Limited seats
              </Badge>
            </div>
          </div>

          {/* Course Fee Section */}
          <div className="flex items-start gap-3 justify-center lg:justify-start">
            <FaMoneyBillWave className="text-red-700 text-xl mt-1" />
            <div className="flex flex-col">
              <span className="text-red-700 text-sm font-medium">COURSE FEE</span>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-sm">₹42,000</span>
                <span className="line-through text-gray-400 text-sm">₹50,000</span>
              </div>
              <Badge variant="outline" className="text-green-600 border-green-600 text-xs mt-1">
                Save ₹8,000/-
              </Badge>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="flex items-start gap-3 justify-center lg:justify-start">
            <TbCertificate className="text-red-700 text-xl mt-1" />
            <div className="flex flex-col">
              <span className="text-red-700 text-sm font-medium">GUARANTEE</span>
              <div className="font-bold text-sm">100% refund if not hired*</div>
            </div>
          </div>
        </div>

        {/* Vertical Divider and Button Section */}
        <div className="flex items-center gap-6 lg:border-l lg:pl-6 w-full lg:w-auto">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-auto">
            <Button className="bg-[#ff0000] hover:bg-[#ff0000] hover:shadow-md hover:shadow-black w-full sm:w-auto">
              Start your application
            </Button>
            <span className="text-xs sm:text-sm text-gray-600 mt-2 whitespace-nowrap">
              186,044 already applied
            </span>
          </div>
        </div>
      </div>
    </div>

            </div>
          </div>
        </div>
      </div>
      
      {/* Spacer div to prevent content overlap */}
      <div className="h-[120px]"></div>
    </div>
  )
}

export default Hero



