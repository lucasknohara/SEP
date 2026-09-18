function TargetAudience() {
    return (
    <section id="publico-alvo" className="mx-auto mt-5 mb-5 max-w-[1100px] scroll-mt-[60px] rounded-[12px] bg-white px-5 pt-[90px] pb-[70px]">
        <div className="mb-[45px] text-center">
            <h2 className="mb-[10px] text-[2.2rem] tracking-[-0.5px] text-[#111111] font-semibold">Público-Alvo</h2>

            <p className="text-[1.1rem] text-[#666666]">Para quem a SEP foi pensada e por que ela faz diferença.</p>
        </div>

        <div className="grid grid-cols-1 gap-[25px] md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-[10px] border border-[#e2e8f0] bg-[#f8fafc] p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                <h3 className="mb-3 font-semibold text-[1.25rem] text-[#0f172a] font-semibold">
                    Quem são
                </h3>

                <p className="text-[0.98rem] text-[#475569]">
                    Estudantes que já usam o smartphone no dia a dia para registrar conteúdos de aula — em quadros, 
                    livros, apostilas e outros materiais — e que precisam revisar esse conteúdo depois, 
                    seja em casa, na biblioteca ou entre uma aula e outra.
                </p>
            </article>

            <article className="rounded-[10px] border border-[#e2e8f0] bg-[#f8fafc] p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                <h3 className="mb-3 font-semibold text-[1.25rem] text-[#0f172a] font-semibold">
                    Onde a SEP entra
                </h3>

                <p className="text-[0.98rem] text-[#475569]">
                    Nos momentos em que a captura precisa ser rápida: durante a aula, 
                    num estudo individual ou numa revisão de última hora, quando não há 
                    tempo nem paciência para tratar a foto e organizar o material manualmente.
                </p>
            </article>

            <article className="rounded-[10px] border border-[#e2e8f0] bg-[#f8fafc] p-[30px] shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-[transform,box-shadow] duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]">
                <h3 className="mb-3 font-semibold text-[1.25rem] text-[#0f172a] font-semibold">
                    Por que é relevante
                </h3>

                <p className="text-[0.98rem] text-[#475569]">
                    Porque reúne, numa única ferramenta que o estudante já carrega no bolso, 
                    etapas que hoje exigem vários aplicativos separados — captura, 
                    correção de imagem, extração de texto, resumo e revisão.
                </p>
            </article>
        </div>
    </section>
    );
}

export default TargetAudience;