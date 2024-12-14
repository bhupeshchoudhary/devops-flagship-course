import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { useState } from "react";
import Roadmap from "../../../../../public/assets/cources/roadmap.png";
import Redhat from "../../../../../public/assets/companyLogo/redhat.png";
import TCS from "../../../../../public/assets/companyLogo/tcs.png";
import AryaCollage from "../../../../../public/assets/companyLogo/aryaCollage.svg";
import bluePlanet from "../../../../../public/assets/companyLogo/bluePlanet.jpeg"
import ignoLogo from "../../../../../public/assets/companyLogo/ignouLogo.png"
import NagpurUniversityLogo from "../../../../../public/assets/companyLogo/NagpurLogo.png"
import ShyenaTechLogo from "../../../../../public/assets/companyLogo/shyenaTechLogo.png"
import TtiLogo from "../../../../../public/assets/companyLogo/TtiLogo.png"
const peopleData = [
  {
    name: "Anmol Roop Rai",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGQcSKFn4S8QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698426492355?e=1739404800&v=beta&t=3Sw7zO6e1a_hzbNmxyrKB8pR6EYl1hfx24jeWQ7UEjI",
    testimonial:
      "Till now, my journey with ARTH and LW has been awesome and, it is still going on. I got to know about Vimal sir and LW through my friend and that day and this day there is a huge upward curve in my technical knowledge & passion for learning new technologies and integrating them which boosts my confidence and through ARTH and INIT platform I got DevOps internship with all that knowledge and sir blessings. Thanks a lot to Vimal Sir, Preeti mam, and the whole LinuxWorld Team for providing such great opportunities. ",
    hike: "85% Hike",
    beforeRole: "Arya College of Engineering and IT",
    beforeLogo: AryaCollage,
    afterRole: "DevOps Intern",
    afterLogo: bluePlanet,
  },
  {
    name: "Disha Bajaj",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1736380800&v=beta&t=tvAlORqrjV22gAuI7g_OrtINGRbGnNQXkCUegqFyPow",
    testimonial:
      "Before ARTH, I had applied for several internships through my college's Internship drive but never got selected by any of the companies. Finally, I got two offers in March as I brushed up my technical skills and worked on my resume and presentation skills through the many workshops provided by ARTH. Today, my confidence has grown, and do not shy away from working with new technologies, which has become my USP.",
    hike: "85% Hike",
    beforeRole: "Dr. Vishwanath Karad MIT World Peace University Pune",
    beforeLogo: TCS,
    afterRole: "Cloud DevOps and React Intern",
    afterLogo: Redhat,
  },
  {
    name: "Chetna",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHwuLc1BHCq8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725440239539?e=1739404800&v=beta&t=v2LC7PCyLPOT3g5qRrU0jOFTX9MWt1kiQJOeNTFcWFo",
    testimonial:
      "Being a part of ARTH transformed me entirely. I learned so many industry trending technologies that I ha only heard about and gained quality practical exposure. My interest in Automation technologies grew, and this was all thanks to Vimal Sir. I was actually enjoying working with technologies.",
    hike: "85% Hike",
    beforeRole: "IGNOU, NEW DELHI",
    beforeLogo: ignoLogo,
    afterRole: "Quality Engineer Intern",
    afterLogo: Redhat,
  },
  {
    name: "Harishankar Dubey",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQHj5Xn6AH4Otg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1733389351846?e=1734616800&v=beta&t=zYrN6sURG-m5zISgMD6CZBZGOTL0qYMWX2JPqt-M3e0",
    testimonial:
      "Learning from Vimal sir, I understood that it doesn't matter if you have zero knowledge about the subject but with dedication, determination, and perseverance, we can achieve whatever we aim for. Similarly, I started learning and working on the task given by Vimal Sir. In those tasks, I failed multiple times. Every time I failed I learned something new and then my creativity developed in the topics I learned. Now I am much more confident and I am ready to face any issue, sooner or later, I'll surely find its solution..",
    hike: "85% Hike",
    beforeRole: "RTM Nagpur University",
    beforeLogo: NagpurUniversityLogo,
    afterRole: "DevOps Engineer ",
    afterLogo: ShyenaTechLogo,
  },

  {
    name: "Pankaj Kumar Sharma", 
    image: "https://media.licdn.com/dms/image/v2/C5103AQFNrakAM4hGZg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517238637504?e=1739404800&v=beta&t=JucvTVGyo-TDH6Xk2oJ8-F1C1SgqBkNccDntFbbHEY4",
    testimonial:
      "Linux World is not just an organization, it's a family having head Preeti Ma'am and Vimal Sir. In this family the children are being grown with all the aspects, not just education, by spiritual, learning the things and share the things by providing a large platform, developed the leadership skills, enable all the learners to be active, disciplined and confident. Thanks a lot to LW Team.",
    hike: "85% Hike",
    beforeRole: "Technocrats Institute of Technology Bhopal",
    beforeLogo: TtiLogo,
    afterRole: "Blue Planet Solutions",
    afterLogo: bluePlanet,
  },
  {
    name: "MANALI JAIN", 
    image: "https://media.licdn.com/dms/image/v2/C5103AQFNrakAM4hGZg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517238637504?e=1739404800&v=beta&t=JucvTVGyo-TDH6Xk2oJ8-F1C1SgqBkNccDntFbbHEY4",
    testimonial:
      "Linux World is not just an organization, it's a family having head Preeti Ma'am and Vimal Sir. In this family the children are being grown with all the aspects, not just education, by spiritual, learning the things and share the things by providing a large platform, developed the leadership skills, enable all the learners to be active, disciplined and confident. Thanks a lot to LW Team.",
    hike: "85% Hike",
    beforeRole: "Teerthanker Mahaveer University",
    beforeLogo: TCS,
    afterRole: "Blue Planet Solutions",
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
    <div className="w-full bg-gradient-to-r from-gray-50 to-red-50">
      <section className="max-w-6xl mx-auto py-12">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter mb-8">
            Career <span className="text-[#ff0000]">Transformation</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <Card className="p-6 relative mb-8">
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
                  <div className="absolute bottom-4 left-4 bg-green-500 text-white px-4  rounded-full text-sm font-medium flex items-center gap-2">
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
                  <p className="text-gray-600">{person.testimonial.slice(0,183)}...</p>
                  {/* <Button className="bg-purple-500 hover:bg-purple-600 text-white flex items-center gap-2">
                    <PlayCircle className="w-4 h-4" />
                    Hear My Story
                  </Button> */}
                </div>
              </div>
            </Card>

            <div className="flex flex-col items-center justify-center gap-4 h-64 ">
              <div className="relative pl-60">
                <Card className="p-4 border-1 border border-green-500 ">
                  <div className="space-y-2 ">
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

              {/* roadmap image */}
                      <div className="sm:ml-18">
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

          <div className="flex justify-between mt-12">
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