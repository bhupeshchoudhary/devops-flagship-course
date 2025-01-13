// "use client";
 
 
// import { PlacementCard, CardData } from './card';
 
// import { Rays } from './rays';
// import {Beams} from './beams';
// import blackimage from "../../../public/assets/black.jpg";
// import { useState } from "react";
// import { Lens } from "../ui/lens";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";


// export function RecentPlacedStudents() {
//     const [hovering, setHovering] = useState(false);
//   // Create separate hovering state for each card
//   const [hoveringStates, setHoveringStates] = useState([false, false, false, false]);

//   // Function to update hovering state for a specific card
//   const handleHover = (index: number, isHovering: boolean) => {
//     const newHoveringStates = [...hoveringStates];
//     newHoveringStates[index] = isHovering;
//     setHoveringStates(newHoveringStates);
//   };

//   // Card data
//   const cardData: CardData[] = [
//     {
//       title: "Shortlisted Students",
//       description: "46+ students shortlisted for Signzy as DevOps Engineer - Freshers 2024-2025 passouts from our previous DevOps batch",
//     //   imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEu-u0dHSY1mg/feedshare-shrink_2048_1536/B56ZRQfsZVHQAo-/0/1736517274165?e=1739404800&v=beta&t=htjTa_MHD-eISeH1F00aZdv3UBRKXKDuELGeNhgnnoI"
//       imageUrl: blackimage.src
//     },
//     {
//       title: "Shortlisted Students",
//       description: "56+ students shortlisted for Deloitte as Fresher DevOps Engineer : 2024/2025 passouts from our previous DevOps batch",
//       imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEu-u0dHSY1mg/feedshare-shrink_2048_1536/B56ZRQfsZVHQAo-/0/1736517274165?e=1739404800&v=beta&t=htjTa_MHD-eISeH1F00aZdv3UBRKXKDuELGeNhgnnoI"
//     },
//     {
//       title: "Shortlisted Students",
//       description: "1052 learners placed in 2024 : 401 Freshers & 651 professionals with 2x hike  ",
//       imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEu-u0dHSY1mg/feedshare-shrink_2048_1536/B56ZRQfsZVHQAo-/0/1736517274165?e=1739404800&v=beta&t=htjTa_MHD-eISeH1F00aZdv3UBRKXKDuELGeNhgnnoI"
//     },
//     {
//       title: "Shortlisted Students",
//       description: "5000+ jobs in 2025 : This year job openings would be 5x more than 2024",
//       imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEu-u0dHSY1mg/feedshare-shrink_2048_1536/B56ZRQfsZVHQAo-/0/1736517274165?e=1739404800&v=beta&t=htjTa_MHD-eISeH1F00aZdv3UBRKXKDuELGeNhgnnoI"
//     }
//   ];

 
// return (
//     <div>
//       <div className="w-full relative rounded-3xl overflow-hidden max-w-md mx-auto bg-gradient-to-r from-[#1D2235] to-[#121318] p-8 my-10">
//         <Rays />
//         <Beams />
//         <div className="relative z-10">
//           <Lens hoveringStates={hoveringStates} setHoveringStates={setHoveringStates}>
//             <Image
//               src="https://images.unsplash.com/photo-1713869820987-519844949a8a?q=80&w=3500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="image"
//               width={500}
//               height={500}
//               className="rounded-2xl"
//             />
//           </Lens>
//           <motion.div
//             animate={{
//               filter: hovering ? "blur(2px)" : "blur(0px)",
//             }}
//             className="py-4 relative z-20"
//           >
//             <h2 className="text-white text-2xl text-left font-bold">
//               Apple Vision Pro
//             </h2>
//             <p className="text-neutral-200 text-left  mt-4">
//               The all new apple vision pro was the best thing that happened
//               around 8 months ago, not anymore.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
 


"use client";
 
import { PlacementCard, CardData } from './card';
import { Rays } from './rays';
import { Beams } from './beams';
import blackimage from "../../../public/assets/black.jpg";
import { useState } from "react";
import { Lens } from "../ui/lens";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function RecentPlacedStudents() {
  // Create separate hovering state for each card
  const [hoveringStates, setHoveringStates] = useState([false, false, false, false]);

  // Function to update hovering state for a specific card
  const handleHover = (index: number, isHovering: boolean) => {
    const newHoveringStates = [...hoveringStates];
    newHoveringStates[index] = isHovering;
    setHoveringStates(newHoveringStates);
  };

  // Card data
  const cardData: CardData[] = [
    {
      title: "Shortlisted Students",
      description: "46+ students shortlisted for Signzy as DevOps Engineer - Freshers 2024-2025 passouts from our previous DevOps batch",
      imageUrl: blackimage.src
    },
    {
      title: "Shortlisted Students",
      description: "56+ students shortlisted for Deloitte as Fresher DevOps Engineer : 2024/2025 passouts from our previous DevOps batch",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEu-u0dHSY1mg/feedshare-shrink_2048_1536/B56ZRQfsZVHQAo-/0/1736517274165?e=1739404800&v=beta&t=htjTa_MHD-eISeH1F00aZdv3UBRKXKDuELGeNhgnnoI"
    },
    {
      title: "Shortlisted Students",
      description: "1052 learners placed in 2024 : 401 Freshers & 651 professionals with 2x hike",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEu-u0dHSY1mg/feedshare-shrink_2048_1536/B56ZRQfsZVHQAo-/0/1736517274165?e=1739404800&v=beta&t=htjTa_MHD-eISeH1F00aZdv3UBRKXKDuELGeNhgnnoI"
    },
    {
      title: "Shortlisted Students",
      description: "5000+ jobs in 2025 : This year job openings would be 5x more than 2024",
      imageUrl: "https://media.licdn.com/dms/image/v2/D5622AQEu-u0dHSY1mg/feedshare-shrink_2048_1536/B56ZRQfsZVHQAo-/0/1736517274165?e=1739404800&v=beta&t=htjTa_MHD-eISeH1F00aZdv3UBRKXKDuELGeNhgnnoI"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div 
            key={index} 
            className="w-full relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D2235] to-[#121318] p-4"
          >
            <Rays />
            <Beams />
            <div className="relative z-10">
              <Lens 
                hovering={hoveringStates[index]}
                setHovering={(isHovering) => handleHover(index, isHovering)}
              >
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={500}
                  height={500}
                  className="rounded-2xl"
                />
              </Lens>
              <motion.div
                animate={{
                  filter: hoveringStates[index] ? "blur(2px)" : "blur(0px)",
                }}
                className="py-4 relative z-20"
              >
                <h2 className="text-white text-xl text-left font-bold">
                  {card.title}
                </h2>
                <p className="text-neutral-200 text-left mt-2 text-sm">
                  {card.description}
                </p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}