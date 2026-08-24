import StepCard from "../StepCard/StepCard.jsx";
import "./HowItWorks.css";

function HowItWorks() {
    return (
        <section className="how-it-works">
            <h2>Como Funciona?</h2>

            <div className="steps">
                <StepCard number="1" title="Capture" description="Capture uma imagem." />
                <StepCard number="2" title="Analise" description="A IA analisa a imagem." />
                <StepCard number="3" title="Organize" description="A IA organiza o conteúdo." />
                <StepCard number="4" title="Aprenda" description="Você estuda o conteúdo com a imagem." />
            </div>
        </section>
    );
}

export default HowItWorks;