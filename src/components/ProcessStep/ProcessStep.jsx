import "./ProcessStep.css";

function ProcessStep(props) {
    return (
        <article className="process-step">
            <span>{props.number}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </article>
    );
}

export default ProcessStep;