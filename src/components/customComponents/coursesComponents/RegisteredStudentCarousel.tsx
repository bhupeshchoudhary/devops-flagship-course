"use client";

import React from "react";
import { InfiniteMovingCards } from "../../ui/infinite-moving-cards";
import harshwardhan from "../../../../public/assets/harshwardhan.jpg";
import tharun from "../../../../public/assets/Tharun-Lakavath.jpg";
import priyam from "../../../../public/assets/priyam.jpg";
import nilesh from "../../../../public/assets/nilesh.jpg";
import andmanymore from "../../../../public/assets/and-many-more.jpg";

export function RegisteredStudentCarousel() {
  return (
    <div className="max-w-7xl px-4 py-12 mx-auto relative">
      <div className="text-center "> {/* Added text-center and margin bottom */}
        <div className="font-bold text-3xl inline-block">Technical students from <span className="text-[#ff0000]" >across India  </span><span>
            <img
              src="/assets/flag.png" 
              alt="Indian Flag" 
              width={20} 
              height={14} 
              style={{ display: 'inline-block', marginLeft: '4px', verticalAlign: 'middle' }} 
            />
           &nbsp; </span>  </div>
        <div className="text-gray-500">Becoming a part of Placement Guaranteed Initiative 2025</div>
      </div>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          cardWidth={250}
          cardHeight={250}
        />
      </div>
    </div>
  );
}

const testimonials = [
  { image: harshwardhan.src },
  { image: tharun.src },
  { image: priyam.src },
  { image: nilesh.src },
  { image: andmanymore.src },
];