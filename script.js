var textInput = document.querySelector("#input-texto");
var output = document.querySelector("#output");

function criptografar() {
    var texto = textInput.value;
    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    limparOutput(); // Limpa o conteúdo anterior de output

    var textarea = criarTextarea(resultCripto);
    output.appendChild(textarea);

    var buttonCopiar = criarBotaoCopiar();
    output.appendChild(buttonCopiar);

    console.log("Texto criptografado:", resultCripto); // Log para depuração
}

function descriptografar() {
    var texto = textInput.value;
    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    limparOutput(); // Limpa o conteúdo anterior de output

    var textarea = criarTextarea(resultDescripto);
    output.appendChild(textarea);

    var buttonCopiar = criarBotaoCopiar();
    output.appendChild(buttonCopiar);

    console.log("Texto descriptografado:", resultDescripto); // Log para depuração
}

function copiar() {
    var textocop = document.querySelector('#output-texto');
    textocop.select();
    document.execCommand('copy');
    alert("Texto copiado");
}

function limparOutput() {
    output.innerHTML = ''; // Limpa o conteúdo anterior de output
}

function criarTextarea(valor) {
    var textarea = document.createElement('textarea');
    textarea.id = 'output-texto';
    textarea.readOnly = true;
    textarea.value = valor;
    return textarea;
}

function criarBotaoCopiar() {
    var buttonCopiar = document.createElement('button');
    buttonCopiar.className = 'btn-copiar';
    buttonCopiar.textContent = 'Copiar';
    buttonCopiar.addEventListener('click', copiar); // Adiciona o evento de clique
    return buttonCopiar;
}
