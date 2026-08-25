import { Link } from "react-router-dom";
import "./ModeCard.css";

function ModeCard(props) {
    return (
        <article className={`mode-card ${props.variant}`}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

            <Link to={props.link}>
                <button>{props.buttonText}</button>
            </Link>
        </article>
    );
}

export default ModeCard;