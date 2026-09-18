function Solution() {
    return (
        <section className="mx-auto max-w-[1100px] scroll-mt-[60px] px-5 pt-[90px] pb-[70px]" id="solucao">
            <div className="mb-[45px] text-center">
                <h2 className="mb-[10px] text-[2.2rem] tracking-[-0.5px] text-[#111111] font-semibold">A Solução</h2>
                <p className="text-[1.1rem] text-[#666666]">Conheça a nova forma de usar a câmera do seu celular.</p>
            </div>

            <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
                <article className="rounded-[10px] border border-[#e2e8f0] bg-white p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <h3 className="mb-3 text-[1.25rem] text-[#0f172a] font-semibold">O Problema</h3>
                    <p className="text-[0.98rem] text-[#475569]">
                        Fotografar o quadro ou uma página de apostila raramente
                        resulta em algo útil para estudar depois: perspectiva
                        torta, reflexos, baixo contraste e dificuldade de
                        localizar a informação tornam o registro pouco
                        aproveitável, e o estudante ainda precisa recorrer a
                        várias ferramentas diferentes só para extrair o texto,
                        organizar o material e gerar um resumo.
                    </p>
                </article>

                <article className="rounded-[10px] border border-[#e2e8f0] bg-white p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <h3 className="mb-3 text-[1.25rem] text-[#0f172a] font-semibold">Nossa Proposta</h3>
                    <p className="text-[0.98rem] text-[#475569]">
                        A SEP centraliza essas etapas dentro da própria câmera
                        da JOVI. Em vez de fotografar e depois procurar apps
                        separados para tratar a imagem, extrair texto e
                        resumir, tudo acontece em um único fluxo, pensado
                        especificamente para o contexto educacional.
                    </p>
                </article>

                <article className="rounded-[10px] border border-[#e2e8f0] bg-white p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <h3 className="mb-3 text-[1.25rem] text-[#0f172a] font-semibold">Como Funciona</h3>
                    <p className="text-[0.98rem] text-[#475569]">
                        O modo StudyLens detecta automaticamente que o conteúdo
                        é material de estudo, corrige a perspectiva e reduz
                        reflexos. A partir daí, a inteligência artificial
                        extrai o texto por OCR, gera resumos e explicações
                        simples, classifica o conteúdo por matéria e permite
                        criar flashcards ou exportar tudo em PDF.
                    </p>
                </article>
            </div>

            <div className="mt-[25px] grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <article className="rounded-[10px] border border-[#e2e8f0] bg-white p-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <h4 className="mb-[10px] text-[1.05rem] text-[#0f172a] font-semibold">
                        StudyLens
                    </h4>
                    <p className="text-[0.9rem] text-[#475569]">
                        Detecção automática de conteúdo educacional, correção de
                        perspectiva e melhoria de contraste em tempo real.
                    </p>
                </article>

                <article className="rounded-[10px] border border-[#e2e8f0] bg-white p-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <h4 className="mb-[10px] text-[1.05rem] text-[#0f172a] font-semibold">
                        IA &amp; Aprendizado
                    </h4>
                    <p className="text-[0.9rem] text-[#475569]">
                        OCR em português e inglês, geração de resumos,
                        explicações simplificadas e classificação por matéria.
                    </p>
                </article>

                <article className="rounded-[10px] border border-[#e2e8f0] bg-white p-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <h4 className="mb-[10px] text-[1.05rem] text-[#0f172a] font-semibold">
                        Modos Personalizados
                    </h4>
                    <p className="text-[0.9rem] text-[#475569]">
                        Criação de modos de câmera sob medida, com nome,
                        identidade visual e ferramentas escolhidas pelo usuário.
                    </p>
                </article>

                <article className="rounded-[10px] border border-[#e2e8f0] bg-white p-[22px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                    <h4 className="mb-[10px] text-[1.05rem] text-[#0f172a] font-semibold">
                        Flashcards &amp; PDF
                    </h4>
                    <p className="text-[0.9rem] text-[#475569]">
                        Geração de flashcards para revisão e conversão das
                        capturas em PDF para consulta posterior.
                    </p>
                </article>
            </div>
        </section>
    );
}

export default Solution;