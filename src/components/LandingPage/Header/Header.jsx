import { useState } from "react";

function HeaderLanding() {
    const [menuAberto, setMenuAberto] = useState(false);

    const fecharMenu = () => {
        setMenuAberto(false);
    };

    return (
        <header className="sticky top-0 z-50 bg-black text-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                
                <a
                    href="#topo"
                    onClick={fecharMenu}
                    className="text-2xl font-bold tracking-wide"
                >
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
                    className={`${
                        menuAberto ? "flex" : "hidden"
                    } flex-col gap-6 md:flex md:flex-row md:items-center md:gap-8`}
                    id="menu-principal"
                >
                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#solucao"
                            onClick={fecharMenu}
                        >
                            A Solução
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#publico-alvo"
                            onClick={fecharMenu}
                        >
                            Público-Alvo
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#galeria"
                            onClick={fecharMenu}
                        >
                            Galeria
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#equipe"
                            onClick={fecharMenu}
                        >
                            Nossa Equipe
                        </a>
                    </li>

                    <li>
                        <a
                            className="text-sm font-medium transition-opacity hover:opacity-70"
                            href="#contato"
                            onClick={fecharMenu}
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