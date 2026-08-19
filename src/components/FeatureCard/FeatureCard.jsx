import { useState } from "react";

function FeatureCard(props) {
    const [mostrar, setMostrar] = useState(false);

    return (
        <article>
            <img src={props.image} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button onClick={() => setMostrar(!mostrar)}>
                {mostrar ? "Ver menos" : "Ver mais"}
            </button>

            {mostrar && (
                <p>Colocar uma explicação maior.</p>
            )}
        </article>
    );
}

export default FeatureCard;