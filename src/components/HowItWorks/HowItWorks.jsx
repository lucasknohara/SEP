import StepCard from "../StepCard/StepCard.jsx";

function HowItWorks() {
    return (
        <section>
            <h2>Como Funciona</h2>

            <StepCard number="1" title="Capture" description="Capture uma imagem." />
            <StepCard number="2" title="Analise" description="A IA analisa a imagem." />
            <StepCard number="3" title="Organize" description="A IA organiza o conteúdo." />
            <StepCard number="4" title="Aprenda" description="Você estuda o conteúdo com a imagem." />
        </section>
    );
}

export default HowItWorks;