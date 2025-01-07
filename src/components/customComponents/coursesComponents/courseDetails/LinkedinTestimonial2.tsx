import React from "react";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Quote } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper'; 
import {  ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from "react";
// Import Swiper styles
import { Button } from "@/components/ui/button";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const testimonialData = [
    {
        text: "We all know how tedious finding an internship is, but Cuvette made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews",
        name: "Sumit pal",
        institute: "IIT Kanpur",
        image: "https://media.licdn.com/dms/image/v2/D5603AQE9xNA62XznLg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1714316145658?e=1741824000&v=beta&t=e5k7GLayi_NqZAk3xXJ4XLGicTu_EHnsQgtcc_HT4_A"
    },
    {
        text: "We all know how tedious finding an internship is, but Cuvette made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews",
        name: "PRIYAL DUBEY",
        institute: "IIT INDORE",
        image: "https://media.licdn.com/dms/image/v2/D4D03AQHXkuvnF5Zm7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724997745281?e=1741824000&v=beta&t=4L3p08LUosAQ3DGvDfuJ3VVdjuPLoY3hgzwy7A7rTQQ"
    },
];


const LinkdingTestimonial2 = () => {    
    const swiperRef = useRef<SwiperType>();  // Add ref for Swiper instance

    return (
        <div className="relative max-w-4xl mx-auto px-4 py-8">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-48 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 -z-10" />
            
            <div className="h-[350px] relative"> {/* Adjusted main container height */}
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    effect="fade"
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !bg-blue-500 !opacity-50',
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !opacity-100',
                    }}
                    navigation={false} // Enable navigation
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}

                    className="h-full w-full !pb-16"
                >
                    {testimonialData.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-[300px]"> {/* Adjusted slide height */}
                            <Card className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                                <div className="grid md:grid-cols-2 items-center h-full">
                                    <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50">
                                        {/* Empty background div */}
                                    </div>
                                    
                                    <div className="p-6 flex flex-col space-y-4 relative"> {/* Adjusted padding and spacing */}
                                        <Quote size={32} className="text-blue-500/20 absolute top-4 right-4" /> {/* Reduced quote size */}
                                        
                                        <p className="text-gray-700 text-base leading-relaxed font-light"> {/* Adjusted text size */}
                                            {testimonial.text}
                                        </p>
                                        
                                        <div className="space-y-1 relative mt-auto"> {/* Reduced spacing */}
                                            <div className="h-0.5 w-12 bg-blue-500/30 mb-2" /> {/* Adjusted separator margin */}
                                            <h3 className="font-semibold text-lg text-gray-900"> {/* Adjusted heading size */}
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm"> {/* Adjusted text size */}
                                                {testimonial.institute}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            
                            <Card className="absolute left-8 -bottom-6 shadow-xl md:w-[45%] overflow-hidden transition-transform duration-300 hover:scale-105 group h-[290px]"> {/* Added fixed height to image card */}
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={testimonial.image}
                                        alt={`${testimonial.name} testimonial`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white hover:bg-blue-50 border-blue-100"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white hover:bg-blue-50 border-blue-100"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LinkdingTestimonial2;