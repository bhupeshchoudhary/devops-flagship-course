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
import KeyOutcomes from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";
import CourseTestimonials from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials"
import CoursePricingSection from "@/components/customComponents/coursesComponents/courseDetails/CoursePricingSection";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";
import CareerTransformation from "@/components/customComponents/coursesComponents/courseDetails/CareerTransformation";
import CertificateCarousel from "@/components/customComponents/coursesComponents/courseDetails/CertificateCarousel";
import PlacementProgramCard from "@/components/customComponents/coursesComponents/courseDetails/PlacementProgramCard";
import CourseCurriculumModule from "@/components/customComponents/coursesComponents/CourseModules/CourseModule";
import MentorFeatured from "@/components/customComponents/coursesComponents/courseDetails/MentorFeatured";
import CompaniesCarousel from "@/components/customComponents/coursesComponents/courseDetails/CompaniesCarousel";
import CourseCarrrerModule from "@/components/customComponents/coursesComponents/courseDetails/carrerSection/Carrer";
import TestimonialsSection from "@/components/customComponents/coursesComponents/courseDetails/Testimonials";
import JobSkills from "@/components/customComponents/coursesComponents/courseDetails/JobSkills";
import ProgramCohorts from "@/components/customComponents/coursesComponents/ProgramDetails";
import CourseCarousel from "@/components/customComponents/coursesComponents/courseDetails/CourseCarousel";
import QueryForm from "@/components/customComponents/coursesComponents/courseDetails/ContactAndSupport";
import EmployeeCards from "@/components/customComponents/coursesComponents/courseDetails/PlacedStudents";
import PlacedStudents from "@/components/customComponents/coursesComponents/courseDetails/PlacedStudents";
const CourseDetail = ()=>{
    const params = useParams ();
    const {pid}  = params;

    return (
        <>
        <Navbar />
        <CourseDetailHero></CourseDetailHero>
        <CompaniesCarousel/>
        <CareerTransformation />
        <ProgramCohorts></ProgramCohorts>
        <CourseCurriculumModule></CourseCurriculumModule>
        <CourseCarrrerModule ></CourseCarrrerModule>
        <CourseCarousel />
     <Projects></Projects> {/*6 */}
     <MentorProfile></MentorProfile>
     <Analyst></Analyst>
  <TestimonialsSection />
     <PlacedStudents />
     <CoursePricingSection></CoursePricingSection> {/*10 */}
     <Tools></Tools> 
        <CertificateDisplay></CertificateDisplay>
     <CourseTestimonials />
        <ProgramHighlights></ProgramHighlights>
        <JobSkills />
     
     <Faq></Faq>
     
     <QueryForm />
        <Footer />






        
        
     </>
    )
}

export default CourseDetail;