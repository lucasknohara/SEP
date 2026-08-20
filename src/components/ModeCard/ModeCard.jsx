import "./ModeCard.css";

function ModeCard(props) {
    return (
        <article className={`mode-card ${props.variant}`}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>{props.buttonText}</button>
        </article>
    );
}

export default ModeCard;