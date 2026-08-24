import Inicial from "../../assets/Inicial.png";
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
                <img src={Inicial} alt="Tela do Modo Estudante" />
            </div>
        </section>
    );
}

export default Hero;