import { Search } from 'lucide-react'
import Image from "next/image"
import { Input } from "@/components/ui/input"

export default function RequiredSkills() {
  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      {/* Search Header */}
    

      <div className="grid md:grid-cols-[280px,1fr] gap-6">
        {/* Sidebar */}
        <div className="space-y-4">
          <CompanyItem
            logo="/placeholder.svg?height=40&width=40"
            name="DevOps Engineer"
            company="Meta"
            bgColor="bg-blue-50"
          />
          <CompanyItem
            logo="/placeholder.svg?height=40&width=40"
            name="Site Reliability Engineer (SRE)"
            company="Amazon"
            bgColor="bg-orange-50"
          />
          <CompanyItem
            logo="/placeholder.svg?height=40&width=40"
            name="DevOps Architect"
            company="Netflix"
            bgColor="bg-red-50"
          />
          <CompanyItem
            logo="/placeholder.svg?height=40&width=40"
            name="Cloud Engineer"
            company="Google"
            bgColor="bg-green-50"
          />
          <CompanyItem
            logo="/placeholder.svg?height=40&width=40"
            name="Platform Engineer"
            company="Microsoft"
            bgColor="bg-blue-50"
          />
        </div>

        {/* Main Content */}
        <div>
          <h2 className="text-xl font-semibold mb-6">Required skills</h2>
          <div className="space-y-6">
            {/* Image Skills Row */}
            <div className="flex gap-3 mb-6">
              <div className="h-14 w-14 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="AWS"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-14 w-14 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Docker"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-14 w-14 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Kubernetes"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-14 w-14 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Jenkins"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-14 w-14 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Terraform"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-14 w-14 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Ansible"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="h-14 w-14 flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="Github"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text Badge Skills */}
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="AWS" />
              <SkillBadge name="Docker" />
              <SkillBadge name="Kubernetes" />
              <SkillBadge name="Jenkins" />
              <SkillBadge name="Terraform" />
              <SkillBadge name="Ansible" />
              <SkillBadge name="Github" />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Chef" />
              <SkillBadge name="Puppet" />
              <SkillBadge name="GitOps" />
              <SkillBadge name="Prometheus" />
              <SkillBadge name="Grafana" />
              <SkillBadge name="ArgoCD" />
              <SkillBadge name="Lambda" />
            </div>

            <div className="flex flex-wrap gap-3">
              <SkillBadge name="Fargate" />
              <SkillBadge name="SubNets" />
              <SkillBadge name="CloudFront" />
              <SkillBadge name="CI/CD" />
              <SkillBadge name="Redshift" />
              <SkillBadge name="Linux" />
              <SkillBadge name="SQL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CompanyItem({ logo, name, company, bgColor = "bg-gray-50" }: {
  logo: string
  name: string
  company: string
  bgColor?: string
}) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
      <div className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}>
        <Image
          src={logo || "/placeholder.svg"}
          alt={company}
          width={24}
          height={24}
        />
      </div>
      <div>
        <h3 className="font-medium text-sm">{name}</h3>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  )
}

function SkillBadge({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-50 hover:bg-gray-100">
      <span className="text-sm">{name}</span>
    </div>
  )
}

