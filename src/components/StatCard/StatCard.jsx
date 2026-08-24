import "./StatCard.css";

function StatCard(props) {
    return (
        <article className="stat-card">
            <strong>{props.value}</strong>
            <p>{props.label}</p>
        </article>
    );
}

export default StatCard;