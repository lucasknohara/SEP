import CustomImg from "../../assets/ModoCustomizavel.png";
import CustomModeForm from "../../components/CustomModeForm/CustomModeForm.jsx";
import "./Custom.css";

function Custom() {
    return (
        <main className="custom-page">
            <section className="custom-hero">
                <div>
                    <span>MODO CUSTOMIZÁVEL</span>
                    <h1>PERSONALIZE A CÂMERA DO SEU JEITO.</h1>
                    <p>Personalize sua experiência escolhendo recursos e ajustes que combinam com a forma como você usa a câmera.</p>
                </div>

                <div>
                    <img src={CustomImg} alt="Tela do Modo Customizável" />
                </div>
            </section>

            <CustomModeForm />
        </main>
    );
}

export default Custom;