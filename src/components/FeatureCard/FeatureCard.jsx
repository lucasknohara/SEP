import { useState } from "react";
import "./FeatureCard.css";

function FeatureCard(props) {
    const [mostrar, setMostrar] = useState(false);

    return (
        <article className="feature-card">
            <span>{props.icon}</span>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Ver menos" : "Ver mais"}
            </button>

            {mostrar && (
                <p>{props.details}</p>
            )}
        </article>
    );
}

export default FeatureCard;