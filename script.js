document.addEventListener("DOMContentLoaded", function(){

        const formulario =
            document.getElementById("formContato");

                const mensagem =
                    document.getElementById("sucesso");

                        formulario.addEventListener("submit", function(event){

                                event.preventDefault();

                                        mensagem.style.display = "block";

                                                formulario.reset();

                                                        setTimeout(function(){

                                                                    mensagem.style.display = "none";

                                                                            }, 5000);

                                                                                });

                                                                                });