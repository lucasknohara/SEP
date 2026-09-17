function Contact() {

    return (
        <section
            id="contato"
            className="w-full px-6 py-20 md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-bold md:text-4xl">
                        Contato
                    </h1>

                    <p className="mt-3 text-gray-600">
                        Fale com a equipe ou acompanhe o projeto.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

                    <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

                        <div className="mb-5">
                            <label
                                htmlFor="nome"
                                className="mb-2 block text-sm font-medium"
                            >
                                Nome
                            </label>

                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-500"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-2 block text-sm font-medium"
                            >
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-500"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="mensagem"
                                className="mb-2 block text-sm font-medium"
                            >
                                Mensagem
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows="5"
                                required
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-gray-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
                        >
                            Enviar mensagem
                        </button>

                    </form>

                    <address className="rounded-2xl border border-gray-200 bg-gray-50 p-6 not-italic">
                        <h2 className="text-2xl font-semibold">
                            Outros canais
                        </h2>

                        <div className="mt-6 space-y-4">

                            <p>
                                <a
                                    href="lucasnohara51@gmail.com"
                                    className="text-gray-700 underline transition hover:text-black"
                                >
                                    contato@gruposep.com
                                </a>
                            </p>

                            <p>
                                <a
                                    href="https://github.com/lucasknohara/SEP"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 underline transition hover:text-black"
                                >
                                    GitHub do projeto
                                </a>
                            </p>

                            <p>
                                <a
                                    href="https://linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-700 underline transition hover:text-black"
                                >
                                    LinkedIn da equipe
                                </a>
                            </p>

                        </div>
                    </address>

                </div>

            </div>
        </section>
    );
}

export default Contact;