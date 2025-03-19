const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba);
        mostrarInformacoesDaAba(aba);

    });
});

function selecionarAba(aba) {
    const abaSelecionado = document.querySelector(".aba.selecionado");
    abaSelecionado.classList.remove("selecionado");

    aba.classList.add("selecionado");

}

function mostrarInformacoesDaAba(aba) {
    const idDoElementoDeInformacoesDaAba = `informacao-${aba.id}`;
    const informacaoASerMostrada = document.getElementById(idDoElementoDeInformacoesDaAba);


    const informacaoSelecionado = document.querySelector(".informacao.selecionado");
    informacaoSelecionado.classList.remove("selecionado");

    informacaoASerMostrada.classList.add("selecionado");


}