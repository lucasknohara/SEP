function HeroLanding() {
    return (
        <section className="grid place-items-center px-5 pt-[110px] pb-[90px] text-center text-white bg-[#111111] bg-[radial-gradient(circle_at_50%_0%,_#1f2937_0%,_#111111_65%)]">
            <div className="max-w-[720px]">
                <p className="mb-4 text-[0.8rem] uppercase tracking-[2px] text-[yellow]">Projeto Challenge · JOVI</p>

                <h1 className="mb-5 text-[2.6rem] leading-[1.15] tracking-[-1px]">
                    A câmera do seu celular, agora a favor dos seus estudos.
                </h1>

                <p className="mb-[34px] text-[1.1rem] text-[#d1d5db]">
                    SEP transforma cada captura em quadros, livros e apostilas
                    em texto organizado, resumos e flashcards prontos para
                    revisar — sem sair da experiência de câmera da JOVI.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a
                        href="#solucao"
                        className="inline-block rounded-[8px] bg-white px-[26px] py-[13px] text-[0.95rem] font-semibold text-[#111111] no-underline transition-transform duration-200 ease-in-out hover:-translate-y-0.5"
                    >
                        Conhecer a solução
                    </a>
                    
                    <a
                        href="#contato"
                        className="inline-block rounded-[8px] border border-[#4b5563] bg-transparent px-[26px] py-[13px] text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 ease-in-out hover:-translate-y-0.5"
                    >
                        Falar com a equipe
                    </a>
                </div>
            </div>
        </section>
    );
}

export default HeroLanding;