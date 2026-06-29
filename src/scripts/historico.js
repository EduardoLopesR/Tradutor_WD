console.log("Historico.js carregado");
let temporizadorHistorico;

document.getElementById("texto").addEventListener("input", function () {

    traduzir();
    autoResize(this);

    clearTimeout(temporizadorHistorico);

    temporizadorHistorico = setTimeout(() => {

        const original = document.getElementById("texto").value;
        const traduzido = document.getElementById("resultado").value;

        salvarHistorico(original, traduzido);
        mostrarHistorico();
    }, 3000); // Salva o histórico após 1 segundo de inatividade(1000 milissegundos)
});

// função para salvar o histórico de traduções no localStorage
function salvarHistorico(original, traduzido) {

    if (original.trim() === "") return;

    const historico =
        JSON.parse(localStorage.getItem("historico")) || [];

    historico.unshift({
        original,
        traduzido,
        data: new Date().toLocaleString()
    });

    // Mantém apenas as últimas 20 traduções
    if (historico.length > 20) {
        historico.pop();
    }

    localStorage.setItem(
        "historico",
        JSON.stringify(historico)
    );
}
function mostrarHistorico() {

    const historico =
        JSON.parse(localStorage.getItem("historico")) || [];

    const div =
        document.getElementById("historico");

    if (!div) return;

    div.innerHTML = "";

    historico.forEach(item => {

        div.innerHTML += `
            <div class="item-historico">
                <strong>${item.original}</strong><br>
                ${item.traduzido}<br>
                <small>${item.data}</small>
            </div>
        `;
    });
}
// Carrega o histórico ao abrir a página
window.addEventListener("load", () => {

    mostrarHistorico();
});