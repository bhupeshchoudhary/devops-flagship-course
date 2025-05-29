"use client"
import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';

export default function Component() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Example posts data (replace with your actual posts array)

  
 
const posts = [
 
  {
    id: 1,
    author: {
      name: "Akansha chaurasia",
      title: "Domain Support Specialist @ Ericsson India Global",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQGUv_4wyCC6fg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1522737007614?e=1752710400&v=beta&t=oMb1vPnm8BYJuedn-fqab0Nlgryvs_D7UIPO94ZepVc",
      linkedin: "https://www.linkedin.com/in/akansha-chaurasia-681718119/"
    },
    content: `It was an amazing class to attend. I liked the way sir delivered the helm content. Helm became so easy for me now. I like to attend these classes as it helps me to elevate my skills. Thank you Vimal sir as well as LinuxWorld Informatics Pvt to share such a good content with us..`,
    timestamp: "8 month ago"
  },
  {
    id: 2,
    author: {
      name: "Manikandan Prakash",
      title: "DevOps Engineer @smallcase",
      avatar: "https://media.licdn.com/dms/image/v2/D4E03AQFiY07rDFiZ1A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698246875639?e=1752710400&v=beta&t=rl9_TZv1--t0V7bo_JrysuiGkhvKQ5u3gxyH5FtG3xo",
      linkedin: "https://www.linkedin.com/in/manikandan-prakash/"
    },
    content: `It was very informative and 100 pratical session by vimal sir ,From that I did learn the bedrock service how to intergrate in any of our own custom requirment ,It was pretty enough to start AWS bedrock thanks for the session Vimal Daga sir`,
    timestamp: "8 month ago"
  },
  {
    id: 3,
    author: {
      name: "Dibyaraj Datta",
      title: "Process Associate at Netscribes",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQENeos_aDytsw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711478336339?e=1737590400&v=beta&t=eqdh3QVuz82VyuHWF78Bmif0EVec9xdh47F6VqZmmko",
      linkedin: "https://www.linkedin.com/in/dibyaraj-datta-b785661a5/"
    },
    content: `It was truly an amazing masterclass by the one & only Mr. Vimal Daga Sir. 
    The Wow moment for me was how he explained each and every concept in such an easy manner from basic to advance, like the use of Helm Charts to solve modern world problems with container management.
    Looking forward to join more such sessions & workshops from LinuxWorld Informatics Pvt Ltd under the guidance of Vimal Daga Sir.`,
    timestamp: "8 month ago"
  },
  {
    id: 4,
    author: {
      name: "Rushikesh Mahindrakar",
      title: "System Engineering",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQH9caqLtsFOKw/profile-displayphoto-shrink_200_200/B4DZPdW6uqGkAY-/0/1734585593402?e=1752710400&v=beta&t=qR3SqHZsyoZjDkWOgqtkmgTnr2cVnkMcjV-LIWSKt9Y",
      linkedin: "https://www.linkedin.com/in/rushikesh-mahindrakar-70b82537/"
    },
    content: `Your invaluable guidance in this remarkable Kubernetes training program has been truly appreciated. It's a pivotal milestone in my DevOps journey, and I'm deeply grateful for your mentorship, Vimal Daga sir. Your expertise and insights are immensely valuable, propelling my professional growth with each session. Thank you!!`,
    timestamp: "3 week ago"
  },
  {
    id: 5,
    author: {
      name: "Himanshu Sahu",
      title: "Java Backend Developer",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFqtDCGoMk54g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1673897788931?e=1737590400&v=beta&t=s2TDcsAQ2oqQ_DvoGT8yyUUaGvsfGDwan4Phjo1RFL0",
      linkedin: "https://www.linkedin.com/in/himanshu-sahu-2aa357237/"
    },
    content: `I attended this helm masterclass and it's amazing. The way Vimal Daga sir teaches makes everything so simple and clear and it also helps understand the real time based problem's and use cases. I learned about hashtag#helm chart with examples, artifact hub, docker hub, how to use procreated Helm chart and how to create my own helm chart and upload it, jenkins setup via helm chart etc. Thank u Vimal Daga sir and LinuxWorld Informatics Pvt Ltd Informatics Pvt Ltd for conducting this masterclass. It is always a pleasure to learnt something new always from Vimal Daga sir.`,
    timestamp: "1 week ago"
  },
  {
    id: 6,
    author: {
      name: "Pratibha Kokil",
      title: "DevOps | Full Stack Developer",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHspredHFM_Ig/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729926571919?e=1737590400&v=beta&t=EopKPQqmr1fMBHnO3vVCQ-iI51PNnI8XhKTWumH0CI0",
      linkedin: "https://www.linkedin.com/in/pratibhakokil/"
    },
    content: `Thank u Vimal Daga sir and LinuxWorld Informatics Pvt Ltd for conducting this masterclass.. I learned about hashtag#helm chart with examples, artifact hub, docker hub, how to use procreated Helm chart and how to create my own helm chart and upload it, what's it's requirement, Roll out and Roll back, multi environment setup using helm chart, Jenkins setup via helm chart, jinja template etc.`,
    timestamp: "2 week ago"
  },
  {
    id: 7,
    author: {
      name: "Jivan Bhardwaj",
      title: "DevOps Engineer at Echelon Edge",
      avatar: "https://media.licdn.com/dms/image/v2/C4E03AQEvxMngWtOM1g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1628692879304?e=1741824000&v=beta&t=RRN0Njf2W6uv_EPjspUlYUhnQotymJIJG9XOQPUe3Jk",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7115702316866940929"
    },
    content: `It was great to see how through Kubernetes we can manage containers and launch Jenkins. 

I got the first time to get hands knowledge on various topics like Heml,Operators in the Kubernetes and CRD (custom resource definition). 
thanks, Vimal Daga sir for so insight session.`,
    timestamp: ""
  },
  {
    id: 8,
    author: {
      name: "Prateek Srivastava",
      title: "DevOps Engineer - II at o9 Solutions",
      avatar: "https://media.licdn.com/dms/image/v2/C5603AQHZ852DgWHZCw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517809201722?e=1741824000&v=beta&t=O643r_bMfCdAF1iw9E46iHEVE2riktLzWrERvtmFh_Q",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7115702316866940929"
    },
    content: `We delved into a diverse range of topics, starting from the fundamentals of DevOps to the intricacies of deploying Jenkins for continuous integration and continuous delivery (CI/CD) with automation. Throughout the course, we acquired knowledge in various areas, such as setting up Jenkins on Amazon EKS using Kubernetes Operators and Helm charts.

I want to extend my gratitude to Mr. Vimal Daga for sharing his expertise and making the masterclass a truly exceptional learning experience. 

One of the highlights was our exploration of managing Jenkins pipelines as code, employing tools like Jenkins Kubernetes CRD and Grafana Loki. What's remarkable is that we completed a full-fledged DevOps project within a condensed 3-hour session, which is a testament to Mr. Vimal Daga's exceptional teaching.`,
    timestamp: ""
  },
  {
    id: 9,
    author: {
      name: "Peeru Babu Vaddaman",
      title: "AWS DevOps Engineer   ",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQGzxDFWF5O7Pw/profile-framedphoto-shrink_200_200/B56ZYy.95VH0Ac-/0/1744612089760?e=1747659600&v=beta&t=bGGyMRTgUepUbsa6-NTBuMPDc45e_KaoSQmr0Qcrbj0",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7281961496195018752"
    },
    content: `I gained hands-on experience with multiple tools, enhancing my practical knowledge and skills. It was a wonderful session , Sir is a blessing for the student who are looking their career in the field of DevOps and other.

The DevOps project workshop by Vimal Sir was truly amazing and insightful.`,
    timestamp: ""
  },
  {
    id: 10,
    author: {
      name: "Akash Srivastava",
      title: "Intern at Techgyan Technologies",
      avatar: "",
      linkedin: ""
    },
    content: `Sir is a blessing for the student who are looking their career in the field of Devops and other.

Students nowadays are stressed about how to make project what to make project come and have session with sir, you will feel project was in your pocket but you dont have someone who can tell you about this`,
    timestamp: ""
  },
  {
    id: 11,
    author: {
      name: "Dibyaraj Datta",
      title: "Process Associate at Netscribes",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQENeos_aDytsw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711478336339?e=1753920000&v=beta&t=uFuDgOCWLYdZgoInQJnW2N9QzHSmYp-VIshVu1rXsmE",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7181174125804097536"
    },
    content: `Who never fails to enlighten us through his innovative thoughts and ideas. We learnt how various AWS cloud services like EC2, S3, Lambda are used in real industries and also gained an overview of the Microsoft Azure cloud platform. We learnt how an app runs in various cloud platforms altogether at a time part by part in order to gain worldwide access.
We learnt about tools like Terraform, OpenStack that the engineers lack nowadays.

A big thanks to LinuxWorld Informatics Pvt Ltd for conducting the session & hoping for more sessions.`,
    timestamp: ""
  },
   {
    id: 12,
    author: {
      name: "Sanchita Agrawal",
      title: "DevOps Engineer ",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHvkoJDpKyN6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1664520645818?e=1753920000&v=beta&t=7947H-345Q9k7rU55dXuwTB4AcKUhJ7FFQBG2x1LGks",
      linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7239134220567130113/?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7239134220567130113%2C7240708775475601408%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287240708775475601408%2Curn%3Ali%3Aactivity%3A7239134220567130113%29"
    },
    content: `
Another amazing informative workshop by vimal sir. Its always fun learning from you sir. Learned so much of AWS DevOps concepts and how it gets implemented in real-world projects.`,
    timestamp: "2 month ago"
  },
  {
    id: 13,
    author: {
      name: "Rajneesh Pratap Singh",
      title: "DevOps Engineer || 3x Redhat ",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQES0juOhhnKYQ/profile-displayphoto-shrink_200_200/B56ZShRhtAHoAY-/0/1737872515563?e=1753920000&v=beta&t=_Gds_0HYV1BToF-LCnJ3G_x-S1hEoolSqKD82Ll5Wt4",
      linkedin: "https://www.linkedin.com/in/rajneesh-pratap-singh/"
    },
    content: `
This is my first step towards security with DevOps, and it was a great learning experience
In this session, we covered:
Why DevSecOps? Understanding its importance over traditional DevOps.
Integrating security with DevOps, including SAST and secure coding practices.
Best practices for writing secure Dockerfiles.
Setting up and using Docker Scout for vulnerability scanning.
Strategies for patching and managing vulnerabilities in containers..`,
    timestamp: "1 month ago"
  },


  
  {
    id: 14,
    author: {
      name: "Aakash Kathunia",
      title: "Technical Architect at HCLTech ",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQGJi9pe0O-O8A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723740692945?e=1753920000&v=beta&t=Tmm_f3CxolLZXmPDCtl2cx2XlnqeO2S3HJNO66HZCgY",
      linkedin: "https://www.linkedin.com/in/aakash-kathunia-6b618b16/"
    },
    content: `

    Vimal Sir is outstanding while teaching complex and advanced topics, as he teaches us in such a way that even someone without technical background one can easily grasp and this is the main reason I have been following him since long.

    Before his session, I had tried to understand DevSecOps through various technical channels, but I didn't get a clear picture. However, in just initial hours of Vimal Sir’s session, he made the concept very much clearer. Then, over the next two hours, he simplified DevSecOps further, helping me gain valuable insights that sparked my interest in exploring the topic more deeply.
    
    I am Thankful to Vimal Sir for in-depth course on DevSecOps and looking more indepth session from him, and Im grateful for his teachings for current and upcoming valuable training sessions.`,
    timestamp: "1 month ago"
  },
  {
    id: 15,
    author: {
      name: "Alok Kumar Singh ",
      title: " Data Analyst |",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQFGCjRM6gI1zg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724789778105?e=1753920000&v=beta&t=lRS8KsvoM6QkD8M7nJFiekojDf3Yeb7fqukrPRajQ-o",
      linkedin: "https://www.linkedin.com/in/tech-alok/"
    },
    content: `

Attending the System Design workshop by Vimal Daga Sir was a great learning experience. He explained complex topics like scalability, fault tolerance, and load balancing in simple terms, making it easy to understand. The examples he gave helped us see how these concepts are used in real projects. I learned how to make systems more efficient and reliable by balancing important factors like performance and cost. I'm excited to apply these new skills in my future projects!
.`,
    timestamp: "1 month ago"
  },

  {
    id: 16,
    author: {
      name: "Mallesh Gangadhar ",
      title: "--",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQFvYLlZaIHe_A/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1713248954215?e=1749132000&v=beta&t=r8qB_nMKWFZ9tdI10UFybLAA0rOz0VtQn9kEjwA0vSA",
      linkedin: "https://www.linkedin.com/in/mallesh-gangadhar-8ab53777/"
    },
    content: `

Superrrrrrrb Training Enjoyed! This Linux Essentials workshop with Vimal Sir was superb, The workshop provided a solid foundation, covering key concepts like processes, users, file operations, and essential commands. It also gave a glimpse into the power and versatility of Linux for solving real-world problems. I'm excited to learn next skills on Linux with AI.
to enhance my IT skills in Linux! Thanks
.`,
    timestamp: "1 month ago"
  },

  {
    id: 17,
    author: {
      name: "Mohit Agarwal ",
      title: " Secretary of MExperts",
      avatar: "https://media.licdn.com/dms/image/v2/D5635AQEU9qZl9pXFvw/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1737954708379?e=1749132000&v=beta&t=eAk3lNipRylN08yTXX3ZtolMwUeF6LTICvA5G6gG3PU",
      linkedin: "https://www.linkedin.com/in/mohitagarwal99/"
    },
    content: `

The workshop was incredibly beneficial! I'm excited about the practical applications of CI/CD and AWS services. I plan to start by working on a personal project to implement a deployment pipeline and use AWS CodeDeploy for automation. Collaborating with others will definitely enhance the learning experience, and I'm eager to stay updated with new DevOps trends to improve my skills continuously.
I'm really looking forward to applying these insights!
.`,
    timestamp: "1 month ago"
  },
  
];

  // Show only the first 6 posts when not expanded, otherwise show all posts
  const visiblePosts = isExpanded ? posts : posts.slice(0, 6);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-gray-100 p-4 sm:p-6 mx-auto" >
      <div className="max-w-[920px] mx-auto">
        <h2 className="text-black text-sm sm:text-md text-center">HEAR IT FROM THEM</h2>
        <h2 className="text-black text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 mt-2 text-center">
          Ambitious People ❤️ <span className="text-[#ff0000]">Linux World</span>
        </h2>

        {/* Displaying testimonials in masonry layout */}
        <div className="sm:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-0">
          {visiblePosts.map((post) => (
            <div key={post.id} className="break-inside-avoid mb-4 sm:mb-6">
              <PostCard post={post} />
            </div>
          ))}
        </div>

        {/* Button to toggle visibility of all posts */}
        <div className="flex justify-center items-center mt-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white text-[#2C3E50] font-semibold text-lg border-2 border-gray-500 py-3 px-8 rounded-full hover:bg-[#ff0000] hover:text-white transition-all duration-300"
          >
            {isExpanded ? 'Show Less' : 'See our Wall of Love'}
          </button>
        </div>
      </div>
    </div>
  );
}

// PostCard component to display individual testimonial
const PostCard: React.FC<{ post: any }> = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const words = post.content.split(' ');
  const truncatedContent = words.length > 80 ? words.slice(0, 80).join(' ') + '...' : post.content;

  const handleToggleContent = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="bg-[#ffffff] text-black mt-4 shadow-md w-full p-4 rounded-lg">
      <div className="pb-2">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-300">
            <img className="h-full w-full object-cover rounded-full" src={post.author.avatar || '/default-avatar.png'} alt={post.author.name} />
          </div>
          <div className="flex-grow">
            <h3 className="text-sm font-semibold">{post.author.name}</h3>
            <p className="text-xs text-gray-400">{post.author.title}</p>
          </div>
          <a href={post.author.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${post.author.name}'s LinkedIn profile`}>
            <svg className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
            </svg>
          </a>
        </div>
      </div>

      <div className="pt-2 space-y-2 text-xs sm:text-sm">
        <p>
          {isExpanded ? post.content : truncatedContent}
          {words.length > 80 && (
            <span 
              className="text-blue-500 cursor-pointer ml-1" 
              onClick={handleToggleContent}
            >
              {isExpanded ? 'Show less' : 'Read more'}
            </span>
          )}
        </p>
      </div>

      <p className="mt-4 text-xs text-gray-400">{post.timestamp}</p>
    </div>
  );
};
