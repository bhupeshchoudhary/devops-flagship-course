import Image from "next/image"
import { Brain, FileText, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function BecomePlacement() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 bg-gradient-to-br from-gray-50 via-black-50 to-red-50" >
      <Card className="w-full overflow-hidden max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left side with image */}
          <div className="relative p-6 lg:p-8">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/assets/guaranteedPlacement/becomePlacementReady.gif"
                alt="Resume interface mockup"
                fill
                className="object-cover rounded-lg"
                priority
              />
              {/* <div className="absolute -right-4 top-4 w-12 h-12 rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/placeholder.svg"
                  alt="Profile avatar"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div> */}
            </div>
          </div>

          {/* Right side content */}
          <div className="p-6 lg:p-8 flex flex-col gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-2xl">
                Become{" "}
                <span className="text-[#ff0000]">placement-ready</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Prepare to ace your placements with our career coaches, having 10+ years of experience. Say goodbye to placement anxiety!
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <Card className="border border-gray-200 flex-1">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Brain className="w-6 h-6 text-[#ff0000] mb-2" />
                  <h3 className="font-medium">Soft skills training</h3>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 flex-1">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <FileText className="w-6 h-6 text-[#ff0000] mb-2" />
                  <h3 className="font-medium">Resume building & AI-</h3>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 flex-1">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <Rocket className="w-6 h-6 text-[#ff0000] mb-2" />
                  <h3 className="font-medium">All-new live bootcamp</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

