"use client";

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Code } from 'lucide-react'
import { payment } from "@/data/paymentLink"

export default function ProgramCohorts() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 py-4" id="programcohorts">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Headers */}
        <div className="space-y-2">
          <h1 className=" text-3xl font-semibold text-black text-center">
            Job Oriented
            <span className="text-[#ff0000]"> DevOps Globally Recognized Initiative</span>
          </h1>
          <h2 className="text-md sm:text-lg text-black text-center">
            Chance to learn from DevOps Guru -
            <span className="text-[#ff0000]"> Mr Vimal Daga</span>
            &nbsp;& get Placement Guarantee
          </h2>
        </div>

        {/* Cohort Card */}
        <Card className="p-6 bg-white">
          <div className="space-y-6">
            {/* Card Header */}
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-md sm:text-lg text-black font-semibold">
                Full Stack Development using MERN Globally Recognized Initiative 2025
              </h3>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 text-sm rounded-full">
                Limited Seats available
              </span>
            </div>

            {/* Schedule Table */}
            <div className="space-y-4">
              {/* Header row */}
              <div className="hidden sm:grid sm:grid-cols-4 text-sm text-black pb-2">
                <div className="flex items-center text-sm text-black gap-2 font-bold">Starting On : </div>
                <div className="flex text-black items-center gap-2 font-bold">Time</div>
                <div className="text-black text-sm font-bold">Mode</div>
                <div className="text-black font-bold text-sm pl-6">Action</div>
              </div>

              <div className="flex flex-col sm:grid sm:grid-cols-4 text-sm border-b pb-4 gap-y-2 sm:gap-y-0">
                {/* Mobile View */}
                <div className="flex flex-col sm:hidden">
                  <div className="font-medium text-sm text-black font-semibold">Starting On :</div>
                  <div className=" text-sm mb-2 text-green-400 font-bold">23rd June,2025</div>

                  <div className="font-medium text-sm text-black font-semibold">Time:</div>
                  <div className="text-black text-sm mb-2">07:00 pm onwards (Tue - Fri)</div>
                  <div className="text-black text-sm mb-2">01:00 pm onwards (Sat - Sun)</div>

                  <div className="font-medium font-semibold text-sm text-black">Mode:</div>
                  <div className="text-black text-sm mb-2">Online/Offline</div>
                </div>

                {/* Desktop View */}
                <div className="hidden sm:block">
                  <div className="font-bold text-sm text-green-400">23rd June,2025</div>
                </div>
                <div className="hidden sm:block text-black text-sm">
                  <div>07:00 pm onwards (Tue - Fri)</div>
                  <div>01:00 pm onwards (Sat - Sun)</div>
                </div>
                <div className="hidden sm:block text-black text-sm text-blue-400">Online/Offline</div>

                {/* Action Button */}
                <div>
                  <a href={payment.paymentLink} target="blank">
                    <Button className="w-full sm:w-auto bg-[#ff0000] hover:shadow-white hover:shadow-md hover:bg-[#ff0000]">
                      Apply Now
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Eligibility Criteria */}
          <Card className="p-6 bg-white">
            <h3 className="text-lg text-black font-medium mb-4 font-semibold">
              Eligibility Criteria:
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <GraduationCap className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-black">
                  Open to all technical students pursuing B.Tech | BCA | MCA | M.Tech | B.Sc IT - 2024 & 2025 passouts
                </p>
              </div>
              <div className="flex gap-3">
                <Briefcase className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-black">
                  No prior knowledge required learn everything from Basics to Advanced levels.
                </p>
              </div>
              <div className="flex gap-3">
                <Code className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-black">
                  Ideal for those curious to learn new skills and work on industry-level projects.
                </p>
              </div>
              <div className="flex gap-3">
                <Code className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-black">
                  Minimum 90% attendance is mandatory to qualify for the placement.
                </p>
              </div>
            </div>
          </Card>

          {/* What You'll Receive */}
          <Card className="p-6 bg-white">
            <h3 className="text-lg font-medium mb-4 text-black font-semibold">
              What You&apos;ll Receive:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Guaranteed Placement. (100% refund if not hired)",
                "Industrial Training Certificate from Linux World Informatics Pvt. Ltd.",
                "Industry-Recognized Project Certificate signed by Mr. Vimal Daga.",
                "6 Months Internship Certificate upon successful completion of the projects",
                "The opportunity to learn from World Record Holder, Mr. Vimal Daga, and enhance your skills to stand out in the tech industry!"
              ].map((role, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex-shrink-0 w-2 h-2 mt-2 bg-red-500 rounded-full" />
                  <span className="text-sm text-black">{role}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}