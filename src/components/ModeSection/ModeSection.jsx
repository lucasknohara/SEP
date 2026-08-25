import ModeCard from "../../components/ModeCard/ModeCard.jsx";
import "./ModeSection.css";

function ModeSection() {
    return (
        <section className="mode-section">
            <h2>Dois modos. Uma nova experiência.</h2>

            <div className="mode-cards">
                <ModeCard variant="studylens" title="StudyLens" description="Transforme suas capturas em conhecimento organizado." buttonText="Conhecer StudyLens" link="/studylens" />
                <ModeCard variant="custom" title="Modo Customizável" description="Crie uma experiência de câmera do seu jeito." buttonText="Conhecer Modo Customizável" link="/modocustomizavel" />
            </div>
        </section>
    );
}

export default ModeSection;