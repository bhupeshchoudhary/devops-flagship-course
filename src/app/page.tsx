"use client"
import react from "react";
import { useParams  } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share } from "lucide-react";
import CourseDetailHero from "@/components/customComponents/coursesComponents/courseDetails/CourseDetailsHero";
import Tools from "@/components/customComponents/coursesComponents/Tools"
import Analyst from "@/components/customComponents/coursesComponents/courseDetails/Analyst";
import Faq from "@/components/customComponents/coursesComponents/Faq";
import ExampleCard from "@/components/customComponents/coursesComponents/courseDetails/ExampleCard";
import CardStack from "@/components/customComponents/coursesComponents/CardStack";
import Projects from "@/components/customComponents/coursesComponents/courseDetails/Projects";
import ExampleCard2 from "@/components/customComponents/coursesComponents/courseDetails/ExampleCard2";
import ProgramHighlights from "@/components/customComponents/coursesComponents/courseDetails/ProgramHighlights";
import MentorProfile from "@/components/customComponents/coursesComponents/courseDetails/Mentor";
import KeyOutcomes from "@/components/customComponents/coursesComponents/courseDetails/KeyOutcomes";
import CourseTestimonials from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials"
import CoursePricingSection from "@/components/customComponents/coursesComponents/courseDetails/CoursePricingSection";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import CareerTransformation from "@/components/customComponents/coursesComponents/courseDetails/CareerTransformation";
import CertificateCarousel from "@/components/customComponents/coursesComponents/courseDetails/CertificateCarousel";
import PlacementProgramCard from "@/components/customComponents/coursesComponents/courseDetails/PlacementProgramCard";
import DevOpsCourseOverview from "@/components/customComponents/coursesComponents/courseDetails/DevopsCourseOverview";
import CourseCurriculumModule from "@/components/customComponents/coursesComponents/CourseModules/CourseModule";
import MentorFeatured from "@/components/customComponents/coursesComponents/courseDetails/MentorFeatured";
import CompaniesCarousel from "@/components/customComponents/coursesComponents/courseDetails/CompaniesCarousel";
import CourseCarrrerModule from "@/components/customComponents/coursesComponents/courseDetails/carrerSection/Carrer";
const CourseDetail = ()=>{
    const params = useParams ();
    const {pid}  = params;

    return (
        <>
        <Navbar />

        <CourseDetailHero></CourseDetailHero>
        <CompaniesCarousel/>
        
        <PlacementProgramCard />
        {/* <CertificateCarousel /> */}
        <CareerTransformation />
        <ProgramHighlights></ProgramHighlights>
        <CourseCurriculumModule></CourseCurriculumModule>

        <CourseCarrrerModule ></CourseCarrrerModule>
        <DevOpsCourseOverview />
  
     <Tools></Tools> 
     <Projects></Projects>
     <MentorProfile></MentorProfile>
     
     <Analyst></Analyst>
     <Faq></Faq>
     <CardStack></CardStack>
     <KeyOutcomes></KeyOutcomes>
     <CoursePricingSection></CoursePricingSection>
     <CourseTestimonials></CourseTestimonials>
        <CertificateDisplay></CertificateDisplay>
        <Footer />
     </>
    )
}

export default CourseDetail;