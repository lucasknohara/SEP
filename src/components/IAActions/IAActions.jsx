import IAActionsCard from "../IAActionCard/IAActionCard.jsx";
import "./IAActions.css";

function IAActions() {
    return (
        <section className="ia-actions">
            <h2>Uma captura. Várias possibilidades.</h2>

            <div className="ia-actions-cards">
                <IAActionsCard icon="📄" title="Transformar em PDF" description="Transforme sua captura em um documento PDF" />
                <IAActionsCard icon="🧠" title="Resumir conteúdo" description="Resuma o conteúdo da sua captura em um texto conciso" />
                <IAActionsCard icon="🔤" title="Extrair texto" description="Extraia o texto da sua captura" />
                <IAActionsCard icon="✨" title="Melhorar imagem" description="Aprimore a qualidade da sua captura" />
                <IAActionsCard icon="🃏" title="Gerar FlashCards" description="Crie flashcards a partir do conteúdo da sua captura" />
            </div> 
        </section>
    );
}

export default IAActions;