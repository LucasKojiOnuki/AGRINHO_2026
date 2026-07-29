// =========================================
// AGRO FORTE - FUTURO SUSTENTÁVEL
// script.js
// =========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================
    // FORMULÁRIO
    // ==========================

    const formulario = document.getElementById("formContato");
    const mensagem = document.getElementById("sucesso");

    if (formulario) {

        formulario.addEventListener("submit", function (event) {

            event.preventDefault();

            mensagem.style.display = "block";

            formulario.reset();

            setTimeout(() => {

                mensagem.style.display = "none";

            }, 5000);

        });

    }

    // ==========================
    // QUIZ
    // ==========================

    const botaoQuiz = document.getElementById("verificarQuiz");

    if (botaoQuiz) {

        botaoQuiz.addEventListener("click", () => {

            const resposta =
                document.querySelector('input[name="quiz"]:checked');

            const resultado =
                document.getElementById("resultadoQuiz");

            if (!resposta) {

                resultado.style.color = "#d32f2f";

                resultado.innerHTML =
                    "⚠️ Selecione uma alternativa.";

                return;

            }

            if (resposta.value === "2") {

                resultado.style.color = "#2e7d32";

                resultado.innerHTML =
                    "✅ Parabéns! Você acertou.";

            }

            else {

                resultado.style.color = "#d32f2f";

                resultado.innerHTML =
                    "❌ Resposta incorreta. A correta é Irrigação Inteligente.";

            }

        });

    }

    // ==========================
    // CALCULADORA AMBIENTAL
    // ==========================

    const calcular =
        document.getElementById("calcular");

    if (calcular) {

        calcular.addEventListener("click", () => {

            const quantidade =
                Number(document.getElementById("arvores").value);

            const resultado =
                document.getElementById("resultadoCalculadora");

            if (quantidade <= 0 || isNaN(quantidade)) {

                resultado.innerHTML =
                    "Digite um valor válido.";

                resultado.style.color = "#d32f2f";

                return;

            }

            const carbono = quantidade * 22;

            resultado.style.color = "#2e7d32";

            resultado.innerHTML =

                "🌳 Aproximadamente <strong>" +

                carbono.toLocaleString("pt-BR") +

                " kg de CO₂</strong> podem ser absorvidos por ano.";

        });

    }

    // ==========================
    // BOTÃO VOLTAR AO TOPO
    // ==========================

    const topo =
        document.getElementById("topo");

    if (topo) {

        topo.style.display = "none";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 500) {

                topo.style.display = "flex";

            }

            else {

                topo.style.display = "none";

            }

        });

    }

    // ==========================
    // ANIMAÇÃO DAS SEÇÕES
    // ==========================

    const secoes =
        document.querySelectorAll("section");

    const observador =
        new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.style.opacity = "1";

                    entrada.target.style.transform = "translateY(0)";

                }

            });

        }, {

            threshold: 0.15

        });

    secoes.forEach((secao) => {

        secao.style.opacity = "0";

        secao.style.transform = "translateY(40px)";

        secao.style.transition = ".8s";

        observador.observe(secao);

    });

    // ==========================
    // CONTADORES ANIMADOS
    // ==========================

    const numeros =
        document.querySelectorAll(".card h3");

    numeros.forEach((numero) => {

        const texto = numero.innerText;

        const valor = parseInt(texto.replace(/\D/g, ""));

        if (!isNaN(valor)) {

            let atual = 0;

            const incremento = Math.ceil(valor / 60);

            const intervalo = setInterval(() => {

                atual += incremento;

                if (atual >= valor) {

                    atual = valor;

                    clearInterval(intervalo);

                }

                if (texto.includes("%")) {

                    numero.innerText = atual + "%";

                }

                else if (texto.toLowerCase().includes("milhões")) {

                    numero.innerText = atual + " Milhões";

                }

                else {

                    numero.innerText = atual;

                }

            }, 35);

        }

    });

    // ==========================
    // EFEITO DE DIGITAÇÃO
    // ==========================

    const titulo =
        document.querySelector(".hero-texto h2");

    if (titulo) {

        const textoOriginal = titulo.innerHTML
            .replace(/<br>/g, "\n");

        titulo.innerHTML = "";

        let indice = 0;

        function escrever() {

            if (indice < textoOriginal.length) {

                if (textoOriginal[indice] === "\n") {

                    titulo.innerHTML += "<br>";

                }

                else {

                    titulo.innerHTML += textoOriginal[indice];

                }

                indice++;

                setTimeout(escrever, 45);

            }

        }

        escrever();

    }

});