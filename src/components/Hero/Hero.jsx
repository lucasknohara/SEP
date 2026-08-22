import modoEstudante from "../../assets/ModoEstudante.png";
import "./Hero.css";

function Hero(props) {
    return (
        <section className="hero">
            <div className="hero-content">
                <span>SEP · STUDYLENS · MODO CUSTOMIZÁVEL</span>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
            </div>

            <div className="hero-visual">
                <img src={modoEstudante} alt="Tela do Modo Estudante" />
            </div>
        </section>
    );
}

export default Hero;