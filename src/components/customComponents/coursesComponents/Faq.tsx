import { useState } from "react";
import type { JSX } from 'react';
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
      question: "What DevOps tools will I work with during the program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Version Control: Git and GitHub.

          </li>
          <li>CI/CD: Jenkins, GitHub Actions, and ArgoCD.
          </li>

          <li>Containerization: Docker.
          </li>

          <li>Orchestration: Kubernetes.
          </li>
<li>IaC: Terraform and Ansible.
</li>

<li>Monitoring: Prometheus, Grafana, and ELK Stack.
</li>
  
        </ul>
        )
    },
    {
      question: "Are the projects aligned with industry standards?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Implementing blue-green deployments.


          </li>
          <li>Scaling applications with Kubernetes.

          </li>

          <li>Automating cloud infrastructure.

          </li>

          


  
        </ul>
        )
    },

    {
      question: " Do I need my own system to practice?",
      answer:
       "Yes, you all need a laptop/PC with you."
    },

    {
      question: " Do I need my own system to practice?",
      answer:
       "Yes, you all need a laptop/PC with you."
    },

    {
      question: "Can I showcase the projects on my resume?",
      answer:
       "Absolutely! All projects are designed to be portfolio-worthy, demonstrating your practical DevOps skills to potential employers."
    },

    {
      question: "Will I receive guidance during the hands-on projects?",
      answer:
       "Yes, our technical team will guide you throughout the projects, providing feedback and resolving doubts to ensure successful completion."
    },
    
  ],

  Eligibility:[
    {
      question:"Who is eligible to apply for the Placement Guarantee course?",
      answer: 
       "The Placement Guarantee course program is meant for pre-final and final year students, recent graduates, and young professionals who wish to build a career in Full Stack Development. You should also be authorized and available to work in India upon completion of the course if you wish to avail of the internship guarantee benefits." 
    },
    {
      question: "I am in the early years of college and will NOT be graduating in the next 12 months, can I still apply?",
      answer:  "Yes, if you have decided to make a career in full-stack development and are ready to put in the required time and effort to complete the course, you can still apply and we will evaluate your application based on its quality. You would be able to apply to the short-term or work-from-home internships that are published on Internshala."
    },
    {
      question: "I have more than 3 years of work experience in a different field and now I want to switch to Full Stack Development, can I apply?",
      answer:  "Yes, you can. However, please note that the placement opportunities that we would be curating for the students of the Placement Guarantee course would be those of internships and the same will be made available to you too. Different companies may factor in your prior work experience in their hiring decisions differently and it will be at the sole discretion of the companies."
    },
    {
      question: "My application was rejected, can I re-apply?",
      answer:  "You can. However, it is recommended that you speak to us first to understand shortcomings in your previous application before deciding to re-apply."
    }
    
  ],
  Program:[
    {
      question: "Do I need to have a laptop or desktop to do the Placement Guarantee course or can I do it on mobile too?",
      answer: "You can watch the videos and take quizzes & tests on any device including mobile. However, for assignments and projects, use of a desktop or laptop will be needed and hence it is advised that you do this full-stack development course on a laptop or desktop."
    },
  ],
  Pay:[
    {
      question: "I'm not able to make payment. What should you do now?",
      answer: "You could try making the payment from a different card or account (of a friend or family). Otherwise, you can follow the instructions on how to make an offline payment here"
    },
    {
      question: "What are the different options available to pay the course fee?",
      answer: "You can pay the Placement Guarantee course fee online using any of the following payment methods - debit card, credit card, netbanking, UPI, and wallets. You will receive the link to make the payment once your application is successful."
    },
    {
      question: "My payment got deducted twice. What should I do now?",
      answer: "Just let us know your registered email id along with the screenshot of the payment receipt or transaction history. You can submit your request using the section. Once verified, the additional amount you paid will be refunded."
      
    },

  ],
  Start:[
    {
      question: "Once my application is accepted, when will the course start?",
      answer: "At the time of making the payment, you will have the option to choose your preferred batch start date."
    },
    {
    question: "My application has been accepted but I would like to start the course at a later date, can I?",
    answer:  "Yes, you can. Just choose a suitable later date batch while making the payment. If a suitable date is not available, please write to us at pgc.support@internshala.com so that we can help you with it."
    },

  ],
  GuranteedJob :[

    {
      question: "What is the job guarantee?",
       answer: "Internshala guarantees that every eligible Placement Guarantee course student will be able to secure a placement (full-time employment or internship with a pre-placement offer) within 6 months after graduating from the Placement Guarantee course program, failing which Internshala will refund the Placement Guarantee course fee paid by the student."
    },
    {
      question: "What is the salary I will get an offer for?",
      answer: "Every eligible Placement Guarantee course student will be assured a CTC ranging from ₹ 3 LPA to ₹ 10 LPA for full-time, part-time, and temporary/contractual employment."
    },
    {
      question: "What opportunities will be considered towards this guarantee?",
      answer:"Any full-time employment or internship with a pre-placement offer that a student gets, in a profile directly related to the Placement Guarantee course program or otherwise, through their own efforts, via Internshala, or any other medium, will be considered the job guarantee."

    },
    
  
    ],

  Certifications:[
    {
      question: "What certificate will I receive from Internshala upon completing the Placement Guarantee course?",
      answer: "Upon successful completion of the Placement Guarantee course, you will receive a Full-Stack Development Placement Guarantee course certificate from Internshala Trainings."
    },
    {
      question: "What is the eligibility criteria to get the government approved certificate from NSDC & Skill India?",
      answer: "To be eligible for NSDC & Skill India certificate, you need to fill in the required additional information including your salutation, date of birth and father's name within 3 days of enrollment. This form will open when you log in to your account. You will also need to complete your final test by the original course end date and score greater than 50% marks in the final test of each course, submit all mandatory milestones (projects, certificates), and complete viva and overall final test before the end date. Please also note that the partnership came to effect on 8th May so only trainings purchased on or after 8th May '23 are eligible for the certificate."
    },
  ],
  Course:[
    {
      question: "How will the courses in the Placement Guarantee course be taught? What will be the timing of the online classes?",
      answer:"The Placement Guarantee Course consists of 9 courses that you would complete one after another. The videos are pre-recorded, so you can watch them at any time of the day as convenient for you. Along with this, you will get weekly live classes, including Learning Concept Classes & Doubt Clearing Sessions, etc. The courses also consist of quizzes, tests, assignments, and projects that you will undergo as you learn."
    },
    {
      question: "What if I get stuck somewhere while learning, how will my doubts be solved?",
      answer: "You will have 24*7 access to a doubt clearing forum where you can post your doubts and the course instructors would answer them with-in 24 hours. There will also be a live doubt clearing session with the instructor once a week where you can ask your doubts in real-time through chat or audio/video call."


    },

  ],
  Bootcamp:[
    {
      question:"How will the Placement Bootcamp help me?",
      answer: "It aims at providing you with the practical application of Full Stack Development concepts learnt during the course. The Bootcamp will be a guided approach, where you will solve industry-level problems live and practice just like you would do in an actual Full Stack Development job."

    },
    {
      question: "Can I access the Bootcamp materials and resources after the sessions have concluded?",
      answer:"Yes, you would have lifetime access to all the study material and resources provided during the bootcamp."
    },
  ],

AItools:[
  {
    question :"Which AI tools will I learn in the Full Stack Development Placement Guarantee Course?",
    answer:"You will upskill with 4 in-demand AI tools: ChatGPT, GitHub Copilot, Blackbox AI, and Claude."


  },
  {
    question: "How can I access the AI tools? Will I get a subscription for these tools?",
    answer: " Free versions of these tools are available so no subscription is required."

  },
  {
    question: "Do we need prior knowledge for learning AI tools?",
    answer: "No prior knowledge is required. We will start with the basics."
  }
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
                  : key === "Eligibility"
                  ? "Eligibility & Application"
                  :key == "Start"
                  ? "Start date & Duration"
                  :key=="GuranteedJob "
                  ?"Guranteed Job Program"
                  
                  : "Tools and Hands-On Projects"
                  }
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
