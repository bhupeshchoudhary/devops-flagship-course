import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Cpu, FileCheck } from 'lucide-react'

export default function BeginnerToPro() {
  return (
    <div className="container mx-auto px-4 py-12  bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      <Card className="p-8 lg:p-12 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-2xl font-bold">
                Go from{" "}
                <span className="text-[#ff0000]">beginner to pro in 6 months</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-[600px]">
                With a curriculum designed and taught by industry experts, you will
                get the skills and mentorship for guaranteed success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <Monitor className="h-6 w-6 text-[#ff0000]" />
                  </div>
                  <h3 className="font-medium">Live & on-demand </h3>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-[#ff0000]" />
                  </div>
                  <h3 className="font-medium">Latest AI tools</h3>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="h-12 w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <FileCheck className="h-6 w-6 text-[#ff0000]" />
                  </div>
                  <h3 className="font-medium">Industry-level projects</h3>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden bg-[#E8FAF0]">
              <img
                src="/assets/guaranteedPlacement/beginnerGuide.gif"
                alt="Student learning"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

