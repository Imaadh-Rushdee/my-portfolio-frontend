import Hero from "../components/Hero";
import Bio from "../components/Bio"
import Skills from "../components/Skills"
import Projects from "../components/Projects";
import Education from "../components/Education";
import References from "../components/References";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedSection from "../components/AnimatedSection"
function Dashboard() {
    return (
        <>
                <AnimatedSection><Hero />
                <Bio />
                <Skills />
                <Projects />
                <Education />
                <References />
                <Contact />
                <Footer /></AnimatedSection>
        </>
    )
}

export default Dashboard;