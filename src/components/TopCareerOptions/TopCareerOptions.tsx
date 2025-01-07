import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TopCareerOptions() {
  const careers = [
    {
      title: "DevOps Engineer",
      description: "Manage CI/CD pipelines, automate infrastructure, and optimize workflows.",
      icon: "/assets/TopCarrer/Devops Engineer.jpeg",
    },
    {
      title: "Cloud Architect",
      description: "Cloud Architect Design and manage cloud environments.",
      icon: "/assets/TopCarrer/CloudArchitect.jpeg",
    },
    {
      title: "Infrastructure as Code (IaC) Specialist",
      description: "Automate infrastructure provisioning with tools like Terraform or CloudFormation.",
      icon: " /assets/TopCarrer/Architech.jpeg",
    },
    {
      title: "Monitoring and Security Specialist",
      description: "Focus on application performance and system security in DevOps ecosystems.",
      icon: "/assets/TopCarrer/releaseengineer.jpeg",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 md:p-6">
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-8 text-center">
        Top career options in <span className="text-[#ff0000]">Devops Program </span>with <span className="text-[#ff0000]">Placement Guarantee Program</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {careers.map((career, index) => (
          <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
            <CardHeader className="p-6">
              <div className="h-48 mb-4 relative bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={career.icon}
                  alt=""
                  className="w-full h-full object-contain p-4"
                />
              </div>
              <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{career.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    </div>
  )
}

