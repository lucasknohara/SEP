import { useEffect, useState } from "react";
import "./CustomModeForm.css";

function CustomModeForm() {
    const [nome, setNome] = useState("");
    const [ativarIA, setAtivarIA] = useState(false);
    const [gerarPDF, setGerarPDF] = useState(false);
    const [resumirComIA, setResumirComIA] = useState(false);
    const [organizarPasta, setOrganizarPasta] = useState(false);

    function salvarModo() {
        const modo = {
            nome,
            ativarIA,
            gerarPDF,
            resumirComIA,
            organizarPasta,
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
            setResumirComIA(modo.resumirComIA);
            setOrganizarPasta(modo.organizarPasta);
        };

    }, []);

    return (
        <section className="custom-mode-form">
            <h2>Crie seu próprio modo.</h2>

            <div className="custom-mode-form-div">    
                <h3>Nome do modo</h3>
                <input type="text" placeholder="Nome do Modo" value={nome} onChange={(e) => setNome(e.target.value)} />

                <h3>Funções Especializadas</h3>
                <label>
                    <input type="checkbox" checked={ativarIA} onChange={(e) => setAtivarIA(e.target.checked)} />
                    Ativar IA
                </label>
                <label>
                    <input type="checkbox" checked={gerarPDF} onChange={(e) => setGerarPDF(e.target.checked)} />
                    Gerar PDF
                </label>
                <label>
                    <input type="checkbox" checked={resumirComIA} onChange={(e) => setResumirComIA(e.target.checked)} />
                    Resumir com IA
                </label>
                <label>
                    <input type="checkbox" checked={organizarPasta} onChange={(e) => setOrganizarPasta(e.target.checked)} />
                    Organizar em pastas
                </label>
                <button onClick={salvarModo}>Criar modo</button>
            </div>
        </section>
    );
}

export default CustomModeForm;