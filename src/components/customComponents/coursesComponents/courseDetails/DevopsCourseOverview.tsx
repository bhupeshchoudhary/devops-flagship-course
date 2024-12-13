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
    "Understand and implement DevOps methodologies in real-world scenarios.",

    "Efficiently use industry-standard DevOps tools like Docker, Git, Kubernetes, Jenkins, and more.",
    "Automate and optimize the software development and deployment lifecycle..",

    "Automate and optimize the software development and deployment lifecycle.",

    "Integrate CI/CD pipelines and continuous integration/deployment in real-world workflows.",

    "Apply security best practices throughout the DevOps pipeline.",


    "Utilize cloud resources effectively in your DevOps initiatives (AWS, Azure, GCP).",

    "Increase job prospects by mastering job-relevant skills for top MNCs.",


    "Become proficient in Infrastructure as Code (IaC) practices using tools like Terraform and Ansible.",

    "Module 1: Introduction to DevOps",

    "Module 2: Git & Github",

    "Module 3: DCA- Docker Certified Associate",

    "Module 4: Kubernetes",

    "Module 5: CI/CD with Jenkins",

    "Module 6 : Prometheus & Grafana",

    "Module 6 : Ansible",

    "Module 8: Terraform ",

    "Module 9: Linux ",

    "Module 10: AWS DevOps Services ",

    "Module 11: Azure & GCP Cloud",

    "Module 12: Gitlab ",

    "Module 13: Shell Scripting",

    "Module 14: Integration of DevOps Tools Or CapeStone Projects "


  ]

  return (
    <div className="w-full py-12 bg-gradient-to-br from-gray-50 via-black-50 to-red-50 p-6 ">
      <div className="container px-4 md:px-12 max-w-5xl mx-auto bg-gray-200 p-12 rounded-xl">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-bold text-gray-900 "><span className="text-[#ff0000]">DevOps Course </span>Overview</h2>
          <h2 className="text-2xl font-bold text-gray-900 ">Course Learning Objectives
          </h2>
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

