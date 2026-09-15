import { useState } from "react";

function HeaderLanding() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className="bg-black text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a href="#topo" className="text-2xl font-bold tracking-wide">
                    SEP
                </a>

                <button
                    className="flex flex-col gap-1.5 md:hidden"
                    aria-label="Abrir menu"
                    aria-expanded={menuAberto}
                    aria-controls="menu-principal"
                    onClick={() => setMenuAberto(!menuAberto)}
                >
                    <span className="h-0.5 w-6 bg-white"></span>
                    <span className="h-0.5 w-6 bg-white"></span>
                    <span className="h-0.5 w-6 bg-white"></span>
                </button>

                <ul
                    className={`${menuAberto ? "flex" : "hidden"} flex-col gap-6 md:flex md:flex-row md:items-center md:gap-8`}
                    id="menu-principal"
                >
                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#solucao"
                        >
                            A Solução
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#publico-alvo"
                        >
                            Público-Alvo
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#galeria"
                        >
                            Galeria
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#equipe"
                        >
                            Nossa Equipe
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#contato"
                        >
                            Contato
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderLanding;