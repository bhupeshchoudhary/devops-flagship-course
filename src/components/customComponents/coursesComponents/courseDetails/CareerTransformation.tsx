import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { PlayCircle } from 'lucide-react'

export default function CareerTransformation() {
  return (
    <section className="w-full py-12 bg-gradient-to-r from-purple-50 to-green-50">
      <div className="container px-4 md:px-6">
        <h1 className="text-3xl font-bold tracking-tighter mb-8">
          Career Transformation
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <Card className="p-6 relative">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-full md:w-1/3">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Profile photo"
                  width={300}
                  height={400}
                  className="rounded-lg object-cover"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  85% Hike
                </div>
              </div>
              
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold">Kishore PS</h2>
                <p className="text-gray-600">
                  Grateful for StarAgile's transformative training, which not only helped me acquire essential skills but also played a decisive role in securing a job tailored to my career aspirations.
                </p>
                <Button className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2">
                  <PlayCircle className="w-4 h-4" />
                  Hear My Story
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <Card className="p-4 w-48">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Automation Engineer</p>
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="NewvisionTech logo"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    BEFORE
                  </span>
                </div>
              </Card>
            </div>

            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transform rotate-45"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>

            <div className="relative">
              <Card className="p-4 w-48">
                <div className="space-y-2">
                  <p className="text-sm font-medium">Automation Engineer</p>
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="QualiTlabs logo"
                    width={120}
                    height={40}
                    className="object-contain"
                  />
                  <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    AFTER
                  </span>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

