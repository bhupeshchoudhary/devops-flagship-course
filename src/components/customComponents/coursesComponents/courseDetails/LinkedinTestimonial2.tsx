import React, { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const testimonialData = [
    {
        text: "We all know how tedious finding an internship is, but Cuvette made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews",
        name: "Sumit pal",
        institute: "IIT INDORE",
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
    const swiperRef = useRef(null);

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    return (
        <div className="relative max-w-4xl mx-auto px-4 py-12">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 -z-10" />
            
            <div className="h-[600px] relative">
                <Swiper
                    ref={swiperRef}
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
                    navigation={false} // Disabled default navigation
                    className="h-full w-full !pb-16" // Increased bottom padding for custom navigation
                >
                    {testimonialData.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-48">
                            <Card className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                                <div className="grid md:grid-cols-2 items-center gap-6 h-full">
                                    <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50">
                                        <div className="absolute inset-0 bg-blue-500/5" />
                                    </div>
                                    
                                    <div className="p-8 lg:p-10 flex flex-col space-y-6 relative">
                                        <Quote size={48} className="text-blue-500/20 absolute top-4 right-4" />
                                        
                                        <p className="text-gray-700 text-lg leading-relaxed font-light">
                                            {testimonial.text}
                                        </p>
                                        
                                        <div className="space-y-2 relative mt-auto">
                                            <div className="h-0.5 w-12 bg-blue-500/30 mb-4" />
                                            <h3 className="font-semibold text-xl text-gray-900">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-500 text-base">
                                                {testimonial.institute}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            
                            <Card className="absolute left-8 -bottom-6 shadow-xl md:w-[45%] overflow-hidden transition-transform duration-300 hover:scale-105 group">
                                <div className="relative">
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

                {/* Custom Navigation Buttons */}
                {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center space-x-4 mt-8">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div> */}
            </div>
        </div>
    );
}

export default LinkdingTestimonial2;