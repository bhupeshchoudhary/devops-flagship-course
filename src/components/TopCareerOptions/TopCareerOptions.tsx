import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TopCareerOptions() {
  const careers = [
    {
      title: "DevOps Engineer",
      description: 
                  <ul className="list-disc list-inside mt-2 space-y-1"><li>Drive seamless CI/CD pipelines</li>
                  <li>Implement automation tools and monitor systems efficiently.</li>
                  <li>Manage infrastructure using tools like Terraform, Ansible, and Jenkins.
                  </li></ul>,
      icon: "/assets/TopCarrer/Devops Engineer.jpeg",
    },
    {
      title: " Site Reliability Engineer (SRE)",
      description: <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Ensure reliability and uptime for mission-critical systems.</li>
        <li>Use advanced monitoring tools to enhance system performance.</li>
      </ul>,
      icon: "/assets/TopCarrer/CloudArchitec.png",
    },
    {
      title: "Kubernetes Specialist",
      description: <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Manage container orchestration with Kubernetes.</li>
        <li>Deploy, scale, and secure applications in containerized environments.</li>
      </ul>,
      icon: " /assets/TopCarrer/Architech.png",
    },
    {
      title: "CI/CD Engineer",
      description:<ul className="list-disc list-inside mt-2 space-y-1">
        <li>Designs and maintains CI/CD pipelines for software delivery and deployment automation.</li>
      </ul>,
      icon: " /assets/TopCarrer/monitoringimage.jpeg",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 md:p-6">
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-8 text-center">
        Top career options in <span className="text-[#ff0000]">Devops Program </span>with <span className="text-[#ff0000]">Placement Guarantee Course</span>
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

