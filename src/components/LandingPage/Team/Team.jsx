import enrico from "../../../assets/equipe-enrico.jpg";
import enzo from "../../../assets/equipe-enzo.jpg";
import lucas from "../../../assets/equipe-kaoru.jpg";
import matheus from "../../../assets/equipe-matheus.jpg";

function Team() {

    const integrantes = [
        {
            nome: "Enrico Bertolacini",
            funcao: "Engenheiro de software",
            imagem: `${enrico}`
        },
        {
            nome: "Enzo Eccheli",
            funcao: "Engenheiro de software",
            imagem: `${enzo}`
        },
        {
            nome: "Lucas Kaoru",
            funcao: "Engenheiro de software",
            imagem: `${lucas}`
        },
        {
            nome: "Matheus Lemos",
            funcao: "Engenheiro de software",
            imagem: `${matheus}`
        }
    ];

    return (
        <section
            id="equipe"
            className="w-full bg-gray-50 px-6 py-20 md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-bold md:text-4xl">
                        Nossa Equipe
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Quem está por trás do grupo SEP.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {integrantes.map((integrante) => (
                        <article
                            key={integrante.nome}
                            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                        >
                            <img
                                src={integrante.imagem}
                                alt={`Foto de ${integrante.nome}`}
                                className="mx-auto aspect-square w-full rounded-xl object-cover"
                            />

                            <h2 className="mt-5 text-xl font-semibold">
                                {integrante.nome}
                            </h2>

                            <p className="mt-2 text-sm text-gray-500">
                                {integrante.funcao}
                            </p>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Team;