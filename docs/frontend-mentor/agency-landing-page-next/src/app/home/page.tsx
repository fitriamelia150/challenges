import About from "@/components/About";
import Footer from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
    return(
        <div className="relative z-0">
            <Hero/>
            <About/>
            <Services/>
            <Testimonials/>
            <Projects/>
            <Footer/>
        </div>
    )
}