// import { useState } from "react";
// import { Card } from "@/components/ui/card";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import linkedinscreenshot1  from "../../../../../public/assets/linkedinScreenshot1.png"
// import linkedinscreenshot3  from "../../../../../public/assets/linkedinScreenshot2.png"

// interface LinkedInShowcaseItem {
//   id: number;
//   title: string;
//   description: string;
//   screenshot: any;
//   category: string;
//   date: string;
//   insights?: {
//     likes?: number;
//     comments?: number;
//     shares?: number;
//   };
// }

// const showcaseData: LinkedInShowcaseItem[] = [
//   {
//     id: 1,
//     title: "Engaging Post Format",
//     description: "This post demonstrates how to structure content for maximum engagement. Notice the use of bullet points, emojis, and clear call-to-actions that drove 50% more interactions than our average posts.",
//     screenshot: linkedinscreenshot1.src.toString(),
//     category: "Content Strategy",
//     date: "March 2024",
//     insights: {
//       likes: 1200,
//       comments: 89,
//       shares: 45
//     }
//   },
//   {
//     id: 2,
//     title: "Thought Leadership Article",
//     description: "A deep-dive article that positioned our brand as an industry expert. The combination of data-driven insights and personal experience resulted in significant profile visits and connection requests.",
//     screenshot: linkedinscreenshot3.src.toString(), // Replace with actual image path
//     category: "Thought Leadership",
//     date: "February 2024",
//     insights: {
//       likes: 856,
//       comments: 132,
//       shares: 67
//     }
//   },
//   // Add more showcase items as needed
// ];

// const LinkedInShowcase = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const navigate = (direction: 'next' | 'prev') => {
//     setIsAnimating(true);
//     if (direction === 'next') {
//       setCurrentIndex((prev) => 
//         prev === showcaseData.length - 1 ? 0 : prev + 1
//       );
//     } else {
//       setCurrentIndex((prev) => 
//         prev === 0 ? showcaseData.length - 1 : prev - 1
//       );
//     }
//     setTimeout(() => setIsAnimating(false), 300);
//   };


//   return (
//     <div className="max-w-5xl mx-auto px-4 py-16">
//       {/* Section Header */}
//       <div className="text-center mb-16">
//         <h2 className="text-3xl font-bold text-gray-900 mb-4">
//           LinkedIn Success Showcase
//         </h2>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Explore our most impactful LinkedIn content and learn what makes these posts perform exceptionally well.
//         </p>
//       </div>

//       {/* Main Showcase */}
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         {/* Screenshot Display */}
//         <div className="relative group">
//           <Card className="overflow-hidden bg-gray-100 border-2 border-gray-200">
//             <div className="relative aspect-[4/3]">
//               <img
//                 src={showcaseData[currentIndex].screenshot}
//                 alt={`LinkedIn post - ${showcaseData[currentIndex].title}`}
//                 className={`w-full h-full object-cover transition-opacity duration-300 ${
//                   isAnimating ? 'opacity-50' : 'opacity-100'
//                 }`}
//               />
              
//               {/* Hover Overlay with Insights */}
//               <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//                 <div className="text-white text-center">
//                   <div className="flex space-x-8">
//                     <div>
//                       <p className="text-2xl font-bold">
//                         {showcaseData[currentIndex].insights?.likes}
//                       </p>
//                       <p className="text-sm">Likes</p>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold">
//                         {showcaseData[currentIndex].insights?.comments}
//                       </p>
//                       <p className="text-sm">Comments</p>
//                     </div>
//                     <div>
//                       <p className="text-2xl font-bold">
//                         {showcaseData[currentIndex].insights?.shares}
//                       </p>
//                       <p className="text-sm">Shares</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Card>

//           {/* Navigation Buttons */}
//           <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
//             <button
//               onClick={() => navigate('prev')}
//               className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
//               disabled={isAnimating}
//             >
//               <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//               onClick={() => navigate('next')}
//               className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
//               disabled={isAnimating}
//             >
//               <ChevronRight className="w-6 h-6" />
//             </button>
//           </div>
//         </div>

//         {/* Content Analysis */}
//         <div className="space-y-6">
//           <div className="flex items-center space-x-3">
//             <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
//               {showcaseData[currentIndex].category}
//             </span>
//             <span className="text-gray-500">
//               {showcaseData[currentIndex].date}
//             </span>
//           </div>

//           <h3 className="text-2xl font-bold text-gray-900">
//             {showcaseData[currentIndex].title}
//           </h3>

//           <p className="text-gray-600 leading-relaxed">
//             {showcaseData[currentIndex].description}
//           </p>

//           {/* Key Takeaways */}
//           <div className="bg-gray-50 p-6 rounded-lg">
//             <h4 className="font-semibold text-gray-900 mb-4">Key Takeaways</h4>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span className="text-gray-600">Clear and concise messaging that resonates with the target audience</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span className="text-gray-600">Strategic use of visuals and formatting to enhance readability</span>
//               </li>
//               <li className="flex items-start">
//                 <span className="text-blue-500 mr-2">•</span>
//                 <span className="text-gray-600">Engagement-focused call-to-actions that drive meaningful interactions</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Progress Indicator */}
//       <div className="flex justify-center gap-2 mt-8">
//         {showcaseData.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setIsAnimating(true);
//               setCurrentIndex(index);
//               setTimeout(() => setIsAnimating(false), 300);
//             }}
//             className={`w-2 h-2 rounded-full transition-colors ${
//               index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
//             }`}
//             aria-label={`View showcase item ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LinkedInShowcase;


import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface LinkedInShowcaseItem {
  id: number;
  title: string;
  description: string;
  screenshot: string;
  category: string;
  date: string;
  insights?: {
    likes?: number;
    comments?: number;
    shares?: number;
  };
}

const showcaseData: LinkedInShowcaseItem[] = [
  {
    id: 1,
    title: "Engaging Post Format",
    description: "This post demonstrates how to structure content for maximum engagement. Notice the use of bullet points, emojis, and clear call-to-actions that drove 50% more interactions than our average posts.",
    screenshot: "/assets/linkedinScreenshot1.png",
    category: "Content Strategy",
    date: "March 2024",
    insights: {
      likes: 1200,
      comments: 89,
      shares: 45
    }
  },
  {
    id: 2,
    title: "Thought Leadership Article",
    description: "A deep-dive article that positioned our brand as an industry expert. The combination of data-driven insights and personal experience resulted in significant profile visits and connection requests.",
    screenshot: "/assets/linkedinScreenshot2.png",
    category: "Thought Leadership",
    date: "February 2024",
    insights: {
      likes: 856,
      comments: 132,
      shares: 67
    }
  },
];

const LinkedInShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scale, setScale] = useState(1.2); // Initial zoom level

  // Auto-zoom animation effect
  useEffect(() => {
    const zoomInterval = setInterval(() => {
      setScale((prevScale) => {
        // Oscillate between 1.2 and 1.3
        return prevScale === 1.2 ? 1.3 : 1.2;
      });
    }, 3000); // Change zoom every 3 seconds

    return () => clearInterval(zoomInterval);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    setIsAnimating(true);
    if (direction === 'next') {
      setCurrentIndex((prev) => 
        prev === showcaseData.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentIndex((prev) => 
        prev === 0 ? showcaseData.length - 1 : prev - 1
      );
    }
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            LinkedIn Success Showcase
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our most impactful LinkedIn content and learn what makes these posts perform exceptionally well.
          </p>
        </div>

        {/* Main Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Screenshot Display with Enhanced Zoom Effect */}
          <div className="relative">
            <Card className="overflow-hidden bg-gray-100 border-2 border-gray-200">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div 
                  className="w-full h-full transform-gpu transition-transform duration-[3000ms] ease-in-out"
                  style={{
                    transform: `scale(${scale})`,
                  }}
                >
                  <Image
                    src={showcaseData[currentIndex].screenshot}
                    alt={`LinkedIn post - ${showcaseData[currentIndex].title}`}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-all duration-700 filter brightness-105 contrast-105 saturate-105 ${
                      isAnimating ? 'opacity-50' : 'opacity-100'
                    }`}
                    priority
                  />
                </div>

                {/* Enhanced Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center transform transition-transform duration-300">
                    <div className="flex space-x-8">
                      <div className="flex flex-col items-center backdrop-blur-sm bg-black/10 p-3 rounded-lg">
                        <p className="text-xl sm:text-2xl font-bold mb-1">
                          {showcaseData[currentIndex].insights?.likes}
                        </p>
                        <p className="text-xs sm:text-sm opacity-90">Likes</p>
                      </div>
                      <div className="flex flex-col items-center backdrop-blur-sm bg-black/10 p-3 rounded-lg">
                        <p className="text-xl sm:text-2xl font-bold mb-1">
                          {showcaseData[currentIndex].insights?.comments}
                        </p>
                        <p className="text-xs sm:text-sm opacity-90">Comments</p>
                      </div>
                      <div className="flex flex-col items-center backdrop-blur-sm bg-black/10 p-3 rounded-lg">
                        <p className="text-xl sm:text-2xl font-bold mb-1">
                          {showcaseData[currentIndex].insights?.shares}
                        </p>
                        <p className="text-xs sm:text-sm opacity-90">Shares</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
              <button
                onClick={() => navigate('prev')}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-110"
                disabled={isAnimating}
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={() => navigate('next')}
                className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-110"
                disabled={isAnimating}
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          {/* Content Analysis */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {showcaseData[currentIndex].category}
              </span>
              <span className="text-sm sm:text-base text-gray-500">
                {showcaseData[currentIndex].date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              {showcaseData[currentIndex].title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {showcaseData[currentIndex].description}
            </p>

            {/* Key Takeaways with Enhanced Styling */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-4">Key Takeaways</h4>
              <ul className="space-y-3">
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Clear and concise messaging that resonates with the target audience</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Strategic use of visuals and formatting to enhance readability</span>
                </li>
                <li className="flex items-start text-sm sm:text-base">
                  <span className="text-blue-500 mr-2">•</span>
                  <span className="text-gray-600">Engagement-focused call-to-actions that drive meaningful interactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {showcaseData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setCurrentIndex(index);
                setTimeout(() => setIsAnimating(false), 300);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 transform ${
                index === currentIndex 
                  ? 'bg-blue-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`View showcase item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkedInShowcase;