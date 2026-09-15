import HeroLanding from "../../components/LandingPage/Hero/Hero.jsx";
import HeaderLanding from "../../components/LandingPage/Header/Header.jsx";
import Solution from "../../components/LandingPage/Solution/Solution.jsx";

function LandingPage() {
    return (
        <>
        <section className="bg-[#f4f6f8]">
            <HeaderLanding />
            <HeroLanding />
            <Solution />
        </section>
        </>
    );
}

export default LandingPage;