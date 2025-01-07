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

const TestimonialSlider = () => {
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
        <section className="relative max-w-6xl mx-auto px-4 py-16">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 -z-10" />

            {/* Main Content */}
            <div className="h-[450px] relative">
                <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    effect="fade"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !bg-blue-500 !opacity-50',
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !opacity-100',
                    }}
                    navigation={false}
                    className="h-full w-full !pb-16"
                >
                    {testimonialData.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-[380px]">
                            {/* Main Testimonial Card */}
                            <Card className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                                <div className="grid md:grid-cols-2 h-full">
                                    {/* Left Column - Gradient Background */}
                                    <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50">
                                        <div className="absolute inset-0 bg-blue-500/5" />
                                    </div>

                                    {/* Right Column - Content */}
                                    <div className="p-8 lg:p-10 flex flex-col justify-between relative">
                                        {/* Quote Icon */}
                                        <Quote size={48} className="text-blue-500/20 absolute top-4 right-4" />

                                        {/* Testimonial Text */}
                                        <p className="text-gray-700 text-lg leading-relaxed font-light mb-8">
                                            {testimonial.text}
                                        </p>

                                        {/* Author Info */}
                                        <div className="space-y-2">
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

                            {/* Profile Image Card */}
                            <Card className="absolute left-12 bottom-12 shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 group">
                                <div className="relative w-80 h-80 md:w-36 md:h-36"> {/* Adjusted size */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={testimonial.image}
                                        alt={`${testimonial.name}'s testimonial`}
                                        className="w-full h-full object-cover rounded-lg"
                                        loading="lazy"
                                    />
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4">
                    <button
                        onClick={handlePrev}
                        className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};

// Optional: Add custom styles for Swiper pagination
const styles = `
.swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    margin: 0 4px;
}

.swiper-pagination {
    bottom: 0 !important;
}

@media (max-width: 768px) {
    .swiper-slide {
        height: auto !important;
    }
}
`;

// Add styles to head
if (typeof document !== 'undefined') {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
}

export default TestimonialSlider;