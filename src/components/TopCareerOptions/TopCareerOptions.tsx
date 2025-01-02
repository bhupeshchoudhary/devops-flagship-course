import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TopCareerOptions() {
  const careers = [
    {
      title: "Full Stack Developer",
      description: "Be a jack of all trades and create an entire website by yourself or manage teams who do!",
      icon: "/assets/TopCarrer/img1.webp",
    },
    {
      title: "Software Development Engineer",
      description: "Design, develop, and maintain software solutions.",
      icon: "/assets/TopCarrer/img2.webp",
    },
    {
      title: "Front-end Developer",
      description: "Develop all the visual elements of a website that you see and interact with (like this page!).",
      icon: "/assets/TopCarrer/img3.webp",
    },
    {
      title: "Back-end Developer",
      description: "Manage the behind-the-scenes of a website. Keep the website running efficiently by managing servers.",
      icon: "/assets/TopCarrer/img4.webp",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 md:p-6">
    <div className="container max-w--6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Top career options in Full Stack Development Placement Guarantee Course
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

