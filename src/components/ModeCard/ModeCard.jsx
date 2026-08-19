function ModeCard(props) {
    return (
        <article>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <button>{props.buttonText}</button>
        </article>
    );
}

export default ModeCard;