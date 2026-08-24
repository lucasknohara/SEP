import ProcessStep from "../ProcessStep/ProcessStep.jsx";
import "./HowStudyLensWorks.css";

function HowStudyLensWorks() {
    return (
        <section className="how-studylens-works">
            <h2>Da captura ao conhecimento.</h2>

            <div className="process-steps">
                <ProcessStep number="1" title="Capture" description="Fotografe quadro, livro, slide ou anotações." />
                <ProcessStep number="2" title="Aprimore" description="Corrija perspectiva, contraste e legibilidade." />
                <ProcessStep number="3" title="Entenda" description="Extraia textos e utilize IA para gerar resumos." />
                <ProcessStep number="4" title="Organize" description="Transforme tudo em material de estudo." />
            </div>
        </section>
    );
}

export default HowStudyLensWorks;