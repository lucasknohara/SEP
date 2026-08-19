import ModeCard from "../../components/ModeCard/ModeCard.jsx";

function ModeSection() {
    return (
        <section>
            <h2>Dois modos. Uma nova experiência.</h2>

            <ModeCard title="StudyLens" description="Transforme suas capturas em conhecimento organizado." buttonText="Conhecer StudyLens" />
            <ModeCard title="Modo Customizável" description="Crie uma experiência de câmera do seu jeito." buttonText="Personalizar" />
        </section>
    );
}

export default ModeSection;