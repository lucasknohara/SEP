import StatCard from "../StatCard/StatCard.jsx";
import "./StatCardSection.css";

const capturas = Math.floor(Math.random() * 20) + 22;
const legibilidade = Math.floor(Math.random() * 20) + 80;
const materiais = Math.floor(Math.random() * 7) + 1;

function StatCardSection() {
    return (
        <section className="stats-section">
            <h2>StudyLens em números.</h2>
            
            <div className="stats-grid">
                <StatCard value={capturas} label="capturas analisadas" />
                <StatCard value={`${legibilidade}%`} label="legibilidade média" />
                <StatCard value={materiais} label="matérias organizadas" />
            </div>
        </section>
    );
}

export default StatCardSection;