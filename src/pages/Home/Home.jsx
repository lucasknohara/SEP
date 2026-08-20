import Hero from "../../components/Hero/Hero.jsx";
import ModeSection from "../../components/ModeSection/ModeSection.jsx";
import HowItWorks from "../../components/HowItWorks/HowItWorks.jsx";
import FeatureCard from "../../components/FeatureCard/FeatureCard.jsx";
import "./Home.css";

function Home() {
    return (
        <main>
            <Hero title="A CÂMERA QUE ENTENDE O QUE VOCÊ ESTÁ APRENDENDO." subtitle="Transforme suas capturas em conhecimento organizado com IA." />
        
            <ModeSection />

            <HowItWorks />

            <section className="features-section">
                <h2>Feito para transformar imagens em conhecimento.</h2>

                <div className="features-grid">
                    <FeatureCard icon="📷" title="Captura Inteligente" description="Melhore suas fotos de estudo automaticamente." details="A proposta permite a captura inteligente analisando e melhorando a qualidade das suas fotos de estudo, garantindo que cada imagem seja clara e útil para o aprendizado." />
                    <FeatureCard icon="🧠" title="IA para estudos" description="Transforme suas capturas em conteúdo útil." details="A proposta utiliza inteligência artificial, convertemos suas capturas em resumos, FlashCards, anotações e materiais de estudo organizados." />
                    <FeatureCard icon="🗂️" title="Organização automática" description="Organize seus materiais por matéria." details="A proposta organiza automaticamente todos os seus materiais de estudo por disciplina, facilitando o acesso e a revisão." />
                </div>
            </section>
        </main>
    );
}

export default Home;