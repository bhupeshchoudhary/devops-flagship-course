import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const faqContent: Record<string, FAQItem[]> = {
  curriculum: [
    {
      question: "What is the Job-Oriented DevOps Program?",
      answer:
        "This is a specialized program designed to equip participants with in-demand DevOps skills and provide hands-on experience through real-world projects. The goal is to make participants job-ready for roles like DevOps Engineer, Site Reliability Engineer (SRE), and Cloud Engineer.",
    },
    {
      question: "What skills will I gain during the program?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>CI/CD pipelines with tools like Jenkins and GitHub Actions</li>
          <li>Infrastructure Automation using Terraform and Ansible.</li>
          <li>Containerization and orchestration with Docker and Kubernetes.
          </li>
          <li>Monitoring and logging with Prometheus, Grafana, and ELK Stack.
          </li>
          <li>Best practices for cloud platforms like AWS, Azure, and GCP.
          </li>

        </ul>
      ),
    },
    {
      question: "What kind of projects are included in the program?",
      answer:(
        <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Building automated CI/CD pipelines.
        </li>
        <li>Setting up multi-cloud infrastructure with IaC.</li>
        <li>Deploying containerized applications to Kubernetes.

        </li>
        <li>Implementing monitoring dashboards and alert systems.
        
        </li>
        <li>Enhancing system reliability with chaos engineering.

        </li>

      </ul>
      )
      ,
    },
    {
      question: " How is this program structured?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Training Phase: Comprehensive, hands-on learning of DevOps tools and techniques.

          </li>
          <li>Project/Job-Oriented Phase: Solving industry-grade problems and completing projects to build a strong portfolio.
          .</li>

  
        </ul>
        )
    },

    {
      question: "Who should enroll in this program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fresh graduates or IT professionals seeking a career in DevOps.


          </li>
          <li>Developers, sysadmins, or QA engineers wanting to transition to DevOps.

          .</li>
          <li>Anyone interested in mastering DevOps tools and workflows.
          </li>

  
        </ul>
        )
    },
  ],
  timeCommitment: [
    {
      question: "Does the program include job placement assistance?",
      answer:(
        <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Yes, the program provides:

        </li>
        <li>Resume-building services tailored for DevOps roles.</li>
        <li>Mock interviews with industry experts.

        </li>
        <li>Job referrals through partnerships with hiring companies for the students who has 90% Attendance 

        
        </li>
       

      </ul>
      )
      ,
    },
    {
      question: "What kind of job roles can I apply for after completing this program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>You can target roles such as:


          </li>
          <li>DevOps Engineer.
</li>

<li>Site Reliability Engineer (SRE).
</li>

<li>Cloud Infrastructure Engineer.
</li>

<li>Build and Release Engineer.
</li>

<li>Automation Engineer.
</li>

  
        </ul>
        )
    },

    {
      question: "Will I receive a certificate after completing the program?",
      answer:
       "If you maintain 90% attendance during the program, you will receive a Certificate of Completion and an Internship Certificate, both of which can be added to your LinkedIn profile and resume to highlight your DevOps expertise and practical experience."
    },

    
    {
      question: " How does the program prepare me for interviews?",
      answer:
(
  <ul className="list-disc list-inside mt-2 space-y-1">
  <li>Mock technical interviews.  

  </li>
  <li>Guidance on answering DevOps-specific questions.
  </li>
  <li>Training in building your projects & presenting effectively to recruiters.


  </li>

 

</ul>
)
    },

    {
      question: "What salary range can I expect after completing this program?",
      answer:
"Entry-level DevOps roles typically offer salaries ranging from $70,000 to $100,000 per year, depending on location, industry, and expertise level."
    },
  ],
  selectionCriteria: [
    {
      question: " How is this program structured?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Training Phase: Comprehensive, hands-on learning of DevOps tools and techniques.

          </li>
          <li>Project/Job-Oriented Phase: Solving industry-grade problems and completing projects to build a strong portfolio.
          .</li>

  
        </ul>
        )
    },
  ],
};

export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>("curriculum");

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className="container mx-auto max-w-6xl px-4 py-12 ">
      {/* Header */}
      <h1 className="sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
        Frequently Asked <span className="text-[#ff0000]">Questions</span>
      </h1>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
        {/* Sidebar */}
        <div className="space-y-4">
          {Object.keys(faqContent).map((key) => (
            <div
              key={key}
              className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 
              ${selectedItem === key ? "bg-red-200 border-red-500 text-red-600" : "bg-white text-gray-600"}`}
              onClick={() => setSelectedItem(key as keyof typeof faqContent)}
            >
              <h2 className="text-md md:text-md font-medium">
                {key === "curriculum"
                  ? "Program Overview"
                  : key === "timeCommitment"
                  ? "Career Support"
                  : "Tools and Hands-On Projects"}
              </h2>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqContent[selectedItem].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-base sm:text-md font-semibold px-4 sm:px-6 py-3 sm:py-4 [&[data-state=open]]:text-[#ff0000]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 px-4 sm:px-6 pb-3 sm:pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </div>
    </div>
  );
}
