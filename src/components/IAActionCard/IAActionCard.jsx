import "./IAActionCard.css";

function IAActionCard(props) {
    return (
        <article className="ia-action-card">
            <span>{props.icon}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default IAActionCard;