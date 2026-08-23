import { useEffect, useState } from "react";
import "./CustomModeForm.css";

function CustomModeForm() {
    const [nome, setNome] = useState("");
    const [ativarIA, setAtivarIA] = useState(false);
    const [gerarPDF, setGerarPDF] = useState(false);

    function salvarModo() {
        const modo = {
            nome,
            ativarIA,
            gerarPDF
        };

        localStorage.setItem("modoCustomizado", JSON.stringify(modo));

    };

    useEffect(() => {
        const modoSalvo = localStorage.getItem("modoCustomizado");

        if (modoSalvo) {
            const modo = JSON.parse(modoSalvo);

            setNome(modo.nome);
            setAtivarIA(modo.ativarIA);
            setGerarPDF(modo.gerarPDF);
        };

    }, []);

    return (
        <section className="custom-mode-form">
            <h2>Crie seu próprio modo.</h2>

            <input type="text" placeholder="Nome do Modo" value={nome} onChange={(e) => setNome(e.target.value)} />
            <label>
                <input type="checkbox" checked={ativarIA} onChange={(e) => setAtivarIA(e.target.checked)} />
                Ativar IA
            </label>
            <label>
                <input type="checkbox" checked={gerarPDF} onChange={(e) => setGerarPDF(e.target.checked)} />
                Gerar PDF
            </label>
            <button onClick={salvarModo}>Salvar modo</button>
        </section>
    );
}

export default CustomModeForm;