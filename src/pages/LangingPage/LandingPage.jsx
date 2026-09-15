import HeroLanding from "../../components/LandingPage/Hero/Hero.jsx";
import HeaderLanding from "../../components/LandingPage/Header/Header.jsx";
import Solution from "../../components/LandingPage/Solution/Solution.jsx";

function LandingPage() {
    return (
        <>
            <HeaderLanding />
            <HeroLanding />
            <Solution />
        </>
    );
}

export default LandingPage;