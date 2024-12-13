"use client"
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ChevronRight, Globe, BrainCircuit, ShoppingCart, Container } from "lucide-react";

const projectData = [
  {
    icon: ShoppingCart,
    title: "Setting up a Multi-Tier Application in Containers",
    description:
      "Containerize a multi-tier application with frontend, backend, and database components. Using Docker to create and manage containers.",
    skills: ["Docker", "Kubernetes", "DevOps", "Frontend", "Backend", "Database Management"],
  },
  {
    icon: BrainCircuit,
    title: "Integrating Docker files with Docker Compose",
    description:
      "Create Dockerfiles for different application components. Using Docker Compose to manage multi-container Docker applications.",
    skills: ["Docker", "Docker Compose", "Microservices", "Networking", "Container Management"],
  },
  {
    icon: Globe,
    title: "Integrating Kubernetes with Docker",
    description:
      "Deploying containerized applications using Kubernetes. Use Kubernetes to manage container orchestration and scaling.",
    skills: ["Kubernetes", "Container Orchestration", "Docker", "Scaling", "Cluster Management"],
  },
  {
    icon: Globe,
    title: "Configuring Jenkins Master-Slave Architecture in Docker",
    description:
      "Setting up Jenkins master and slave nodes in Docker containers. Implementing distributed builds using Jenkins agents.",
    skills: ["Jenkins", "Docker", "Distributed Builds", "CI/CD", "Automation"],
  },
  {
    icon: Globe,
    title: "Integrating Prometheus with Grafana",
    description:
      "Setting up Prometheus for monitoring application metrics. Visualize metrics with Grafana dashboards.",
    skills: ["Prometheus", "Grafana", "Monitoring", "Visualization", "Metrics Management"],
  },
  {
    icon: Globe,
    title: "Integrating GitLab with Kubernetes",
    description:
      "Using GitLab CI/CD for continuous integration and deployment. Deploying applications to Kubernetes clusters from GitLab.",
    skills: ["GitLab", "CI/CD", "Kubernetes", "DevOps", "Automation"],
  },
  {
    icon: Globe,
    title: "Infrastructure as Code (IaC)",
    description:
      "Using Terraform to define and provision infrastructure. Managing infrastructure changes through version control.",
    skills: ["Terraform", "Infrastructure as Code", "Version Control", "Cloud Infrastructure", "Automation"],
  },
  {
    icon: Globe,
    title: "Building a CI/CD Pipeline",
    description:
      "Implementing a continuous integration and deployment pipeline using Jenkins or GitLab CI. Automating testing, building, and deployment processes.",
    skills: ["CI/CD", "Jenkins", "GitLab", "Automation", "Testing"],
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      <div className="w-full max-w-6xl mx-auto p-6 lg:px-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-semibold text-gray-700 mb-2">
              Capstone Projects
            </h2>
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
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-muted-foreground">Industry Projects</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projectData.map((project, index) => {
                const isExpanded = expanded === index;
                const visibleSkills = isExpanded
                  ? project.skills
                  : project.skills.slice(0, 3);
                const showMore = project.skills.length > 3 && !isExpanded;

                return (
                  <Card
                    key={index}
                    className="border-t-0 border-r-1 border-b-1 border-l-1 border-gray-100 overflow-hidden transform transition-transform duration-300 hover:scale-105"
                  >
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
                          {visibleSkills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm"
                            >
                              {skill}
                            </span>
                          ))}
                          {showMore && (
                            <button
                              onClick={() => setExpanded(index)}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-blue-500"
                            >
                              + More
                            </button>
                          )}
                          {isExpanded && (
                            <button
                              onClick={() => setExpanded(null)}
                              className="px-3 py-1 bg-zinc-100 rounded-full text-sm text-red-500"
                            >
                              Show Less
                            </button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
