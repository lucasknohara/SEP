import Hero from "../../components/Hero/Hero.jsx";
import ModeSection from "../../components/ModeSection/ModeSection.jsx";
import HowItWorks from "../../components/HowItWorks/HowItWorks.jsx";
import FeatureCard from "../../components/FeatureCard/FeatureCard.jsx";

function Home() {
    return (
        <main>
            <Hero title="A CÂMERA QUE ENTENDE O QUE VOCÊ ESTÁ APRENDENDO." subtitle="Transforme suas capturas em conhecimento organizado com IA." />
        
            <ModeSection />

            <HowItWorks />

            <section>
                <h2>Funcionalidades</h2>

                <FeatureCard image="" title="Captura Inteligente" description="Melhore suas fotos de estudo automaticamente."/>
                <FeatureCard image="" title="IA para estudos" description="Transforme suas capturas em conteúdo útil." />
                <FeatureCard image="" title="Organização automática" description="Organize seus materiais por matéria." />
            </section>
        </main>
    );
}

export default Home;