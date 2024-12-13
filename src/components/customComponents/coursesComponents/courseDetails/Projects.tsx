import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight, Globe, BrainCircuit, ShoppingCart } from "lucide-react";

const projectData = [
  {
    icon: ShoppingCart,
    title: "Create ShopAssist AI",
    description: "A conversational chatbot that provides shopping recommendations to users based on their preferences",
    skills: ["ChatGPT", "GPT 3.5/4", "+5"],
  },
  {
    icon: BrainCircuit,
    title: "Create PixxelCraft AI",
    description: "Enable and fast-track digitisation for online e-commerce businesses by generating high-quality images",
    skills: ["GPT 3.5/4", "OpenAI", "+3"],
  },
  {
    icon: Globe,
    title: "Create ShrewdNews AI",
    description: "Automate News Recommendation using ChatGPT 4 powered ML pipelines, generating high-quality images",
    skills: ["GPT 3.5/4", "OpenAI", "+1"],
  },
  {
    icon: Globe,
    title: "Create ShrewdNews AI",
    description: "Automate News Recommendation using ChatGPT 4 powered ML pipelines, generating high-quality images",
    skills: ["GPT 3.5/4", "OpenAI", "+1"],
  },
  {
    icon: Globe,
    title: "Create ShrewdNews AI",
    description: "Automate News Recommendation using ChatGPT 4 powered ML pipelines, generating high-quality images",
    skills: ["GPT 3.5/4", "OpenAI", "+1"],
  },
  {
    icon: Globe,
    title: "Create ShrewdNews AI",
    description: "Automate News Recommendation using ChatGPT 4 powered ML pipelines, generating high-quality images",
    skills: ["GPT 3.5/4", "OpenAI", "+1"],
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className="w-full max-w-6xl mx-auto p-6 lg:px-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-gray-700 mb-2">Generative AI Certification Projects</h2>
          <div className="flex items-center gap-2 mt-2">
            <h2 className="text-black px-3 py-1 text-3xl font-bold">
              Learn by <span className="text-[#ff0000] text-2xl font-bold">Doing</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 8v13H3V8" />
                <path d="M1 3h22v5H1z" />
                <path d="M10 12h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-muted-foreground">Industry Projects</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projectData.map((project, index) => (
              <Card key={index} className="border-t-0 border-r-1 border-b-1 border-l-1 border-gray-100 overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Skills learned</p>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-zinc-100 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
            
        </div>
      </div>
    </div>
    </div>
  );
}
