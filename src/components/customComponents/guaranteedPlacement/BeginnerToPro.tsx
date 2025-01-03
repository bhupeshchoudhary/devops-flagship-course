import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Cpu, FileCheck } from 'lucide-react'

export default function BeginnerToPro() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 mx-auto">
    <div className="container mx-auto px-4 py-8 md:py-12 ">
      <div className=" text-3xl font-bold pb-6">How will you get guaranteed placement?</div>
      <Card className="p-4 sm:p-6 md:p-8 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-3 md:space-y-4 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold">
                Go from{" "}
                <span className="text-[#ff0000]">beginner to pro in 6 months</span>
              </h1>
              <p className="text-sm sm:text-md text-muted-foreground max-w-[700px] mx-auto lg:mx-0">
                With a curriculum designed and taught by industry experts, you will
                get the skills and mentorship for guaranteed success.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="w-full">
                <CardContent className="p-4 md:p-6 space-y-2 flex flex-col items-center lg:items-start">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <Monitor className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-center lg:text-left">
                    Live & on-demand
                  </h3>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-4 md:p-6 space-y-2 flex flex-col items-center lg:items-start">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <Cpu className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-center lg:text-left">
                    Latest AI tools
                  </h3>
                </CardContent>
              </Card>

              <Card className="w-full sm:col-span-2 md:col-span-1">
                <CardContent className="p-4 md:p-6 space-y-2 flex flex-col items-center lg:items-start">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <FileCheck className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]" />
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-center lg:text-left">
                    Industry-level projects
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden bg-[#E8FAF0] w-full sm:w-[350px] md:w-[400px] lg:w-[500px]">
              <img
                src="/assets/guaranteedPlacement/beginnerGuide.gif"
                alt="Student learning"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
    </div>
  )
}