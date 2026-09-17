import HeroLanding from "../../components/LandingPage/Hero/Hero.jsx";
import HeaderLanding from "../../components/LandingPage/Header/Header.jsx";
import Solution from "../../components/LandingPage/Solution/Solution.jsx";
import TargetAudience from "../../components/LandingPage/TargetAudience/TargetAudience.jsx";
import Gallery from "../../components/LandingPage/Gallery/Gallery.jsx";
import Team from "../../components/LandingPage/Team/Team.jsx";
import Contact from "../../components/LandingPage/Contact/Contact.jsx";

function LandingPage() {
    return (
        <section className="bg-[#f4f6f8]">
            <HeaderLanding />
            <HeroLanding />
            <Solution />
            <TargetAudience />
            <Gallery />
            <Team />
            <Contact />
        </section>
    );
}

export default LandingPage;