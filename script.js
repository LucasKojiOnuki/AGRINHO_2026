// =========================================================
// AGRO FORTE - FUTURO SUSTENTÁVEL
// SCRIPT PRINCIPAL
// =========================================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================================
    // QUIZ
    // =====================================================

    const quizForm = document.getElementById("quizForm");
    const botaoQuiz = document.getElementById("verificarQuiz");
    const resultadoQuiz = document.getElementById("resultadoQuiz");
    const explicacaoQuiz = document.getElementById("explicacaoQuiz");

    let quizRespondido = false;

    if (quizForm && botaoQuiz) {

        // Impede trocar a alternativa depois de selecionada
        const alternativas = document.querySelectorAll(
            'input[name="quiz"]'
        );

        alternativas.forEach(function (alternativa) {

            alternativa.addEventListener("change", function () {

                if (quizRespondido) {
                    return;
                }

                alternativas.forEach(function (item) {

                    if (item !== alternativa) {
                        item.disabled = true;
                    }

                });

                quizRespondido = true;

            });

        });


        botaoQuiz.addEventListener("click", function () {

            const respostaSelecionada =
                document.querySelector(
                    'input[name="quiz"]:checked'
                );

            if (!respostaSelecionada) {

                resultadoQuiz.innerHTML =
                    "⚠️ Selecione uma alternativa antes de continuar.";

                resultadoQuiz.style.color = "#d32f2f";

                return;

            }


            // Impede clicar novamente
            botaoQuiz.disabled = true;

            botaoQuiz.innerText = "Resposta enviada";


            if (respostaSelecionada.value === "2") {

                resultadoQuiz.innerHTML =
                    "✅ Parabéns! Você acertou!";

                resultadoQuiz.style.color = "#2e7d32";

                explicacaoQuiz.style.display = "block";

            }

            else {

                resultadoQuiz.innerHTML =
                    "❌ Resposta incorreta.";

                resultadoQuiz.style.color = "#d32f2f";

                explicacaoQuiz.style.display = "block";

            }

        });

    }


    // =====================================================
    // CALCULADORA AMBIENTAL
    // =====================================================

    const botaoCalcular =
        document.getElementById("calcular");

    const campoArvores =
        document.getElementById("arvores");

    const resultadoCalculadora =
        document.getElementById("resultadoCalculadora");


    if (
        botaoCalcular &&
        campoArvores &&
        resultadoCalculadora
    ) {

        botaoCalcular.addEventListener("click", function () {

            const quantidade =
                Number(campoArvores.value);


            if (
                campoArvores.value === "" ||
                quantidade <= 0 ||
                !Number.isFinite(quantidade)
            ) {

                resultadoCalculadora.innerHTML =
                    "⚠️ Digite uma quantidade válida de árvores.";

                resultadoCalculadora.style.color =
                    "#d32f2f";

                return;

            }


            const carbono =
                quantidade * 22;


            resultadoCalculadora.innerHTML =
                "🌳 Aproximadamente <strong>" +
                carbono.toLocaleString("pt-BR") +
                " kg de CO₂</strong> podem ser absorvidos por ano.";

            resultadoCalculadora.style.color =
                "#2e7d32";

        });

    }


    // =====================================================
    // FORMULÁRIO DE CONTATO
    // =====================================================

    const formulario =
        document.getElementById("formContato");

    const mensagemSucesso =
        document.getElementById("sucesso");


    let formularioEnviado = false;


    if (formulario) {

        formulario.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                // =============================================
                // IMPEDIR SEGUNDO ENVIO
                // =============================================

                if (formularioEnviado) {

                    return;

                }


                // =============================================
                // PEGAR CAMPOS
                // =============================================

                const nome =
                    formulario.querySelector(
                        'input[type="text"]'
                    );

                const email =
                    formulario.querySelector(
                        'input[type="email"]'
                    );

                const textarea =
                    formulario.querySelector(
                        "textarea"
                    );


                // =============================================
                // VALIDAÇÃO DO NOME
                // =============================================

                if (
                    !nome ||
                    nome.value.trim().length < 3
                ) {

                    alert(
                        "Digite um nome válido."
                    );

                    nome.focus();

                    return;

                }


                // =============================================
                // VALIDAÇÃO DO EMAIL
                // =============================================

                const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


                if (
                    !email ||
                    !emailRegex.test(
                        email.value.trim()
                    )
                ) {

                    alert(
                        "Digite um endereço de email válido. Exemplo: nome@email.com"
                    );

                    email.focus();

                    return;

                }


                // =============================================
                // VALIDAÇÃO DA MENSAGEM
                // =============================================

                if (
                    !textarea ||
                    textarea.value.trim().length < 10
                ) {

                    alert(
                        "Digite uma mensagem com pelo menos 10 caracteres."
                    );

                    textarea.focus();

                    return;

                }


                // =============================================
                // FORMULÁRIO APROVADO
                // =============================================

                formularioEnviado = true;


                // Desabilitar todos os campos

                const campos =
                    formulario.querySelectorAll(
                        "input, textarea, button"
                    );


                campos.forEach(function (campo) {

                    campo.disabled = true;

                });


                // Alterar botão

                const botaoEnviar =
                    formulario.querySelector(
                        'button[type="submit"]'
                    );


                if (botaoEnviar) {

                    botaoEnviar.innerHTML =
                        "✓ Enviado";

                }


                // =============================================
                // ANIMAÇÃO DA MENSAGEM
                // =============================================

                if (mensagemSucesso) {

                    mensagemSucesso.style.display =
                        "block";

                    mensagemSucesso.style.opacity =
                        "0";

                    mensagemSucesso.style.transform =
                        "translateY(20px)";


                    requestAnimationFrame(function () {

                        mensagemSucesso.style.transition =
                            "opacity .6s ease, transform .6s ease";

                        mensagemSucesso.style.opacity =
                            "1";

                        mensagemSucesso.style.transform =
                            "translateY(0)";

                    });

                }

            }
        );

    }


    // =====================================================
    // BOTÃO VOLTAR AO TOPO
    // =====================================================

    const botaoTopo =
        document.getElementById("topo");


    if (botaoTopo) {

        botaoTopo.style.display = "none";


        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 500) {

                    botaoTopo.style.display =
                        "flex";

                }

                else {

                    botaoTopo.style.display =
                        "none";

                }

            }
        );

    }


    // =====================================================
    // ANIMAÇÃO DAS SEÇÕES
    // =====================================================

    const secoes =
        document.querySelectorAll("section");


    const observador =
        new IntersectionObserver(

            function (entradas) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "visivel"
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    secoes.forEach(function (secao) {

        observador.observe(secao);

    });


    // =====================================================
    // CONTADORES
    // =====================================================

    const cards =
        document.querySelectorAll(
            ".estatisticas .card h3"
        );


    cards.forEach(function (elemento) {

        const textoOriginal =
            elemento.textContent.trim();


        const valor =
            parseInt(
                textoOriginal.replace(/\D/g, "")
            );


        if (
            isNaN(valor) ||
            valor === 0
        ) {

            return;

        }


        let atual = 0;

        const duracao = 1500;

        const intervalo =
            30;

        const passos =
            duracao / intervalo;

        const incremento =
            valor / passos;


        const timer =
            setInterval(function () {

                atual += incremento;


                if (atual >= valor) {

                    atual = valor;

                    clearInterval(timer);

                }


                const numero =
                    Math.floor(atual);


                if (
                    textoOriginal.includes("%")
                ) {

                    elemento.textContent =
                        numero + "%";

                }

                else if (
                    textoOriginal
                        .toLowerCase()
                        .includes("milhões")
                ) {

                    elemento.textContent =
                        numero + " Milhões";

                }

                else {

                    elemento.textContent =
                        numero;

                }

            }, intervalo);

    });


    // =====================================================
    // EFEITO DE DIGITAÇÃO DO HERO
    // =====================================================

    const titulo =
        document.querySelector(
            ".hero-texto h2"
        );


    if (titulo) {

        const conteudoOriginal =
            titulo.innerHTML;


        // Só executa uma vez

        if (!titulo.dataset.animado) {

            titulo.dataset.animado = "true";

            titulo.innerHTML = "";

            let indice = 0;


            function escreverTitulo() {

                if (
                    indice <
                    conteudoOriginal.length
                ) {

                    titulo.innerHTML =
                        conteudoOriginal.substring(
                            0,
                            indice + 1
                        );

                    indice++;

                    setTimeout(
                        escreverTitulo,
                        35
                    );

                }

            }


            escreverTitulo();

        }

    }

});