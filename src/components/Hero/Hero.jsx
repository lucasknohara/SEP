import "./Hero.css";

function Hero(props) {
    return (
        <section className="hero">
            <div className="hero-content">
                <span>SEP · STUDYLENS</span>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <button>Conheça o StudyLens</button>
            </div>

            <div className="hero-visual">
                {/* colocar imagem aqui */}
            </div>
        </section>
    );
}

export default Hero;