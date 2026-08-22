import StudyLensImg from "../../assets/ModoEstudante.png";
import HowStudyLensWorks from "../../components/HowStudyLensWorks/HowStudyLensWorks.jsx";   
import "./StudyLens.css";

function StudyLens() {
    return (
        <main className="studylens-page">
            <section className="studylens-hero">
                <div>
                    <span>STUDYLENS</span>
                    <h1>Transforme suas capturas em conhecimento.</h1>
                    <p>Uma experiência de câmera pensada para estudantes, capaz de transformar imagens em materiais de estudo.</p>
                </div>

                <div>
                    <img src={StudyLensImg} alt="Tela do StudyLens" />
                </div>
            </section>

            <HowStudyLensWorks />
        </main>
    );
}

export default StudyLens;