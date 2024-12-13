import Image from "next/image"
import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Certificate from "../../../../../public/assets/cources/certficatepng.png"


export default function DevOpsCourseOverview() {
  const courseDetails = [
    "DevOps Certification Course: 4.5-month comprehensive training at StarAgile, covering DevOps methodologies.",
    "Extensive Curriculum: Includes Linux basics, cloud technologies (AWS, Azure, GCP), CI/CD pipelines, Git, Docker, and continuous testing.",
    "Practical Orientation: DevOps course offers real-world projects across various sectors, ensuring practical learning.",
    "StarX Placement Program: Bridges education with career readiness, offering services like profile enhancement, portfolio development, resume crafting, and interview preparation.",
    "Assistance in Job Placement: Minimum salary range of INR 5-25 LPA, with a commitment to career success and a six-month internship certificate post-training.",
    "Assistance in Job Placement: Minimum salary range of INR 5-25 LPA, with a commitment to career success and a six-month internship certificate post-training.",
    "Assistance in Job Placement: Minimum salary range of INR 5-25 LPA, with a commitment to career success and a six-month internship certificate post-training.",
    "Assistance in Job Placement: Minimum salary range of INR 5-25 LPA, with a commitment to career success and a six-month internship certificate post-training.",
    "Assistance in Job Placement: Minimum salary range of INR 5-25 LPA, with a commitment to career success and a six-month internship certificate post-training.",
    "Professional Development Roadmap: DevOps training blends technical skills with soft skills, leading to comprehensive professional development and certification."
  ]

  return (
    <div className="w-full py-12 bg-gradient-to-br from-gray-50 via-black-50 to-red-50 p-6 ">
      <div className="container px-4 md:px-12 max-w-5xl mx-auto bg-gray-200 p-12 rounded-xl">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-gray-900 "><span className="text-[#ff0000]">DevOps Course </span>Overview</h2>
          <div className="relative w-16 h-16">
            <Image
              src={Certificate}
              alt="Certificate icon"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
        </div>

        <Card className="bg-white shadow-lg overflow-hidden">
          <div className="p-6 h-[350px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-gray-100 ">
            <div className="space-y-4">
              {courseDetails.map((detail, index) => (
                <div key={index} className="flex gap-3 text-sm">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500 mt-2" />
                  <p className="text-gray-700">{detail}</p>
                </div>
              ))}
            </div>
          </div>

         
        </Card>
      </div>
    </div>
  )
}

