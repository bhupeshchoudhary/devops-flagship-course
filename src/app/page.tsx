"use client"
import react from "react";
import { useParams  } from 'next/navigation'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Share } from "lucide-react";
import CourseDetailHero from "@/components/customComponents/coursesComponents/courseDetails/CourseDetailsHero";
import Tools from "@/components/customComponents/coursesComponents/Tools"
import Analyst from "@/components/customComponents/coursesComponents/Analyst";
import Faq from "@/components/customComponents/coursesComponents/Faq";
import ExampleCard from "@/components/customComponents/coursesComponents/courseDetails/ExampleCard";
import CardStack from "@/components/customComponents/coursesComponents/CardStack";
import Projects from "@/components/customComponents/coursesComponents/courseDetails/Projects";
import ExampleCard2 from "@/components/customComponents/coursesComponents/courseDetails/ExampleCard2";
import ProgramHighlights from "@/components/customComponents/coursesComponents/courseDetails/ProgramHighlights";
import MentorProfile from "@/components/customComponents/coursesComponents/courseDetails/Mentor";
import WhoisthisProgramFor from "@/components/customComponents/coursesComponents/courseDetails/WhoisthisProgramFor";
import KeyOutcomes from "@/components/customComponents/coursesComponents/courseDetails/KeyOutcomes";
import CourseTestimonials from "@/components/customComponents/coursesComponents/courseDetails/CourseTestimonials"
import CoursePricingSection from "@/components/customComponents/coursesComponents/courseDetails/CoursePricingSection";
import CertificateDisplay from "@/components/customComponents/coursesComponents/courseDetails/CertificateDetails";
import Navbar from "@/components/customComponents/Navbar";
import Footer from "@/components/customComponents/Footer";

const CourseDetail = ()=>{
    const params = useParams ();
    const {pid}  = params;

    return (
        <>
        <Navbar />
        <CourseDetailHero></CourseDetailHero>
        <ProgramHighlights></ProgramHighlights>
     <Tools></Tools> 
     <Projects></Projects>
     <MentorProfile></MentorProfile>
     <WhoisthisProgramFor></WhoisthisProgramFor>
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