import inicio from "../../../assets/galeria-inicio.png";
import captura from "../../../assets/galeria-captura.png";
import resultado from "../../../assets/galeria-resultado-ia.png";
import config from "../../../assets/galeria-config-modo.png";
import modos from "../../../assets/galeria-modos.png";
import gerenciamento from "../../../assets/galeria-meus-modos.png";

function Gallery() {

    const imagens = [
        {
            src: `${inicio}`,
            alt: "Tela de boas-vindas da câmera SEP",
            legenda: "Onboarding: primeiro contato com os modos de câmera"
        },
        {
            src: `${captura}`,
            alt: "Interface de câmera capturando um quadro",
            legenda: "Captura de conteúdo educacional em tempo real"
        },
        {
            src: `${resultado}`,
            alt: "Tela de resultado da IA",
            legenda: "Ações da IA: resumo, OCR, PDF e flashcards"
        },
        {
            src: `${config}`,
            alt: "Tela de configuração de modo personalizado",
            legenda: "Criação de um modo de câmera personalizado"
        },
        {
            src: `${modos}`,
            alt: "Grade de modos de câmera",
            legenda: "O modo Estudo integrado aos demais modos da câmera"
        },
        {
            src: `${gerenciamento}`,
            alt: "Tela de gerenciamento dos modos criados",
            legenda: "Gerenciamento dos modos criados pelo usuário"
        }
    ];

    return (
        <section
            id="galeria"
            className="px-6 py-20 md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-bold md:text-4xl">
                        Galeria
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Um primeiro olhar sobre as telas da solução.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {imagens.map((imagem) => (
                        <figure key={imagem.src}>
                            <img
                                src={imagem.src}
                                alt={imagem.alt}
                                loading="lazy"
                                className="h-auto w-full rounded-xl object-cover"
                            />

                            <figcaption className="mt-3 text-sm text-gray-600">
                                {imagem.legenda}
                            </figcaption>
                        </figure>
                    ))}

                </div>

                <p className="mt-8 text-sm text-gray-500 text-center">
                    Capturas do protótipo de interface desenvolvido para a Challenge.
                </p>

            </div>
        </section>
    );
}

export default Gallery;