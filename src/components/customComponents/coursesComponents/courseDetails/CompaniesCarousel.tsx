"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Importing images as StaticImageData objects
import Google from "../../../../../public/assets/companyLogo/google.png";
import TCS from "../../../../../public/assets/companyLogo/tcs.png";
import Infosys from "../../../../../public/assets/companyLogo/infosys.png";
import Salesforce from "../../../../../public/assets/companyLogo/salesforce.png";
import Intel from "../../../../../public/assets/companyLogo/intel.png";
import RedHat from "../../../../../public/assets/companyLogo/redhat.png";
import Razorpay from "../../../../../public/assets/companyLogo/razorpay.png";
import Wipro from "../../../../../public/assets/companyLogo/wipro.png";
import Zoho from "../../../../../public/assets/companyLogo/zoho.png";
import Oracle from "../../../../../public/assets/companyLogo/oracle.png";
import Searce from "../../../../../public/assets/companyLogo/searce.png";
import Syfe from "../../../../../public/assets/companyLogo/syfe.png";
import Paytm from "../../../../../public/assets/companyLogo/paytm.png";
import PWC from "../../../../../public/assets/companyLogo/pwc.png";
import Nykaa from "../../../../../public/assets/companyLogo/nykaa.png";
import NPCI from "../../../../../public/assets/companyLogo/npci.png";
import Accenture from "../../../../../public/assets/companyLogo/accenture.png";
import JPMorgan from "../../../../../public/assets/companyLogo/jpmorgan.png";
import Microsoft from "../../../../../public/assets/companyLogo/mircosoft.png";
import Deloitte from "../../../../../public/assets/companyLogo/deloitte.png";
import Dell from "../../../../../public/assets/companyLogo/dell.png";
import IBM from "../../../../../public/assets/companyLogo/ibm.png";

const CompaniesCarousel = () => {
  const logos = [
    { src: Google, alt: "Google" },
    { src: TCS, alt: "TCS" },
    { src: Infosys, alt: "Infosys" },
    { src: Salesforce, alt: "Salesforce" },
    { src: Intel, alt: "Intel" },
    { src: RedHat, alt: "RedHat" },
    { src: Razorpay, alt: "Razorpay" },
    { src: Wipro, alt: "Wipro" },
    { src: Zoho, alt: "Zoho" },
    { src: Oracle, alt: "Oracle" },
    { src: Searce, alt: "Searce" },
    { src: Syfe, alt: "Syfe" },
    { src: Paytm, alt: "Paytm" },
    { src: PWC, alt: "PWC" },
    { src: Nykaa, alt: "Nykaa" },
    { src: NPCI, alt: "NPCI" },
    { src: Accenture, alt: "Accenture" },
    { src: JPMorgan, alt: "JPMorgan" },
    { src: Microsoft, alt: "Microsoft" },
    { src: Deloitte, alt: "Deloitte" },
    { src: Dell, alt: "Dell" },
    { src: IBM, alt: "IBM" },
  ];

  const containerRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Split the logos into chunks of 10
  const chunkedLogos = [];
  for (let i = 0; i < logos.length; i += 12) {
    chunkedLogos.push(logos.slice(i, i + 12));
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollOffset(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden max-w-7xl mx-auto">
      <div className="text-3xl font-bold mx-auto text-center pt-12">
        1300+ leading companies hire through <br />{" "}
        <span className="text-[#ff0000]">Linux World</span> Heading Icon 🤝
      </div>
      <div className="text-md text-center text-blue-400 pt-4 pb-8">
        Get an opportunity to learn from industry leaders
      </div>
      <div className="w-full overflow-hidden">
        {chunkedLogos.map((lineLogos, rowIndex) => (
          <div
            key={rowIndex}
            ref={containerRef}
            className="whitespace-nowrap mb-4"
            style={{
              transform: `translateX(${-scrollOffset * (rowIndex % 2 === 0 ? 0.1 : -0.1)}px)`,
              transition: "transform 0.9s ease-out",
            }}
          >
            <div className="inline-flex items-center w-max">
              {lineLogos.map((logo, index) => (
                <div key={index} className="mx-4 flex-shrink-0">
                  <div className="w-32 h-20 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={72}
                      height={72}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesCarousel;
