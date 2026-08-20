import "./StepCard.css";

function StepCard(props) {
    return (
        <article className="step-card">
            <span>{props.number}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default StepCard;