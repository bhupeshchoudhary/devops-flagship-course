// OurAlumniWorksAtCarousel.tsx
"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Image from "next/image";

export const OurAlumniWorksAtCarousel = ({
  items,
  direction = "left",
  speed = "fast",
  className,
  cardWidth = 250,
  cardHeight = 250,
}: {
  items: {
    image: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
  cardWidth?: number;
  cardHeight?: number;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s";
      if (speed === "fast") duration = "20s";
      if (speed === "slow") duration = "200s";

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}  
      style={{
        height: `${cardHeight}px`
      }}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-2 py-4 w-max flex-nowrap",
          start && "animate-scroll"
        )}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={idx}
            className="company-card relative rounded-2xl flex-shrink-0 overflow-hidden flex items-center justify-center bg-white"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              padding: '1rem',
            }}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={item.image}
                alt={`Company Logo ${idx + 1}`}
                width={cardWidth - 40}
                height={cardHeight - 40}
                className="company-logo"
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '80%',
                  // opacity: '1'
                }}
                priority
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};