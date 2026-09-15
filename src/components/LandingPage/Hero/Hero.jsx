function HeroLading() {
    return (
        <section className="hero" aria-labelledby="hero-titulo">
            <div className="hero-conteudo">
                <p className="hero-eyebrow">Projeto Challenge · JOVI</p>
                <h1 id="hero-titulo">
                    A câmera do seu celular, agora a favor dos seus estudos.
                </h1>

                <p className="hero-texto">
                    SEP transforma cada captura em quadros, livros e apostilas em texto organizado, resumos e flashcards prontos para revisar — sem sair da experiência de câmera da JOVI.
                </p>

                <div className="hero-acoes">
                    <a href="#solucao" className="botao botao-primario">
                        Conhecer a solução
                    </a>

                    <a href="#contato" className="botao botao-secundario">
                        Falar com a equipe
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroLading;