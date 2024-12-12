import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import Roadmap from "../../../../../public/assets/cources/roadmap.png";
import Redhat from "../../../../../public/assets/companyLogo/redhat.png";
import TCS from "../../../../../public/assets/companyLogo/tcs.png";

const peopleData = [
  {
    name: "Kishore PS",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow",
    testimonial:
      "Grateful for StarAgile's transformative training, which not only helped me acquire essential skills but also played a decisive role in securing a job tailored to my career aspirations.",
    hike: "85% Hike",
    beforeRole: "Automation Engineer",
    beforeLogo: TCS,
    afterRole: "DevSecOps Engineer",
    afterLogo: Redhat,
  },
  {
    name: "Kishore",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow",
    testimonial:
      "Grateful for StarAgile's transformative training, which not only helped me acquire essential skills but also played a decisive role in securing a job tailored to my career aspirations.",
    hike: "85% Hike",
    beforeRole: "Automation Engineer",
    beforeLogo: TCS,
    afterRole: "DevSecOps Engineer",
    afterLogo: Redhat,
  },
  {
    name: "Kishore PS",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow",
    testimonial:
      "Grateful for StarAgile's transformative training, which not only helped me acquire essential skills but also played a decisive role in securing a job tailored to my career aspirations.",
    hike: "85% Hike",
    beforeRole: "Automation Engineer",
    beforeLogo: TCS,
    afterRole: "DevSecOps Engineer",
    afterLogo: Redhat,
  },
  // Add more people here
];

export default function CareerTransformation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peopleData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + peopleData.length) % peopleData.length
    );
  };

  const person = peopleData[currentIndex];

  return (
    <div className="w-full bg-gradient-to-r from-purple-50 to-green-50">
      <section className="max-w-6xl mx-auto py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter mb-8">
            Career Transformation
          </h1>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <Card className="p-6 relative">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3">
                  <Image
                    src={person.image}
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
                    {person.hike}
                  </div>
                </div>

                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold">{person.name}</h2>
                  <p className="text-gray-600">{person.testimonial}</p>
                  <Button className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    Hear My Story
                  </Button>
                </div>
              </div>
            </Card>

            <div className="flex flex-col items-center justify-center gap-4 h-64">
              <div className="relative pl-60">
                <Card className="p-4 border-1 border border-green-500">
                  <div className="space-y-2">
                    <p className="text-xs font-medium">{person.afterRole}</p>
                    <Image
                      src={person.afterLogo}
                      alt="After logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <span className="absolute -bottom-3 left-[316px] -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      AFTER
                    </span>
                  </div>
                </Card>
              </div>

              <div className="relative w-full lg:w-auto">
                <Image
                  src={Roadmap}
                  alt="Roadmap Image"
                  className="rounded-lg object-contain"
                  priority
                  width={72}
                  height={72}
                />
              </div>

              <div className="relative pr-60">
                <Card className="p-4 border border-blue-400">
                  <div className="space-y-2">
                    <p className="text-xs font-medium">{person.beforeRole}</p>
                    <Image
                      src={person.beforeLogo}
                      alt="Before logo"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <span className="absolute -bottom-3 left-[72px] -translate-x-1/2 bg-[#ff0000] text-white px-3 py-1 rounded-full text-xs font-medium">
                      BEFORE
                    </span>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-8">
            <Button
              onClick={handlePrevious}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}