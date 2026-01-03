import Hero from "../components/Hero";
import Bio from "../components/Bio"
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Education from "../components/Education";
import References from "../components/References";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection"
import Certificates from "../components/Certifications";
function Dashboard() {
    return (
        <>
                <AnimatedSection><Hero /></AnimatedSection>
                <AnimatedSection><Bio /></AnimatedSection>
                <AnimatedSection><Skills /></AnimatedSection>
                <AnimatedSection><Projects /></AnimatedSection>
                <AnimatedSection><Education /></AnimatedSection>
                <AnimatedSection><Certificates /></AnimatedSection>
                <AnimatedSection><References /></AnimatedSection>
                <AnimatedSection><Contact /></AnimatedSection>
                <AnimatedSection><Footer /></AnimatedSection>
        </>
    )
}

export default Dashboard;