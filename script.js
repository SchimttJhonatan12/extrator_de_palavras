const botaomostrapalavras= document.querySelector("#botao-palavrachave");
botaomostrapalavras.addEventListener("clik", mostrapalavraschave);
    function mostrapalavraschave(){
        const texto = document.querySelector("#entrada-de-texto").value;
        const camporesultado = document.querySelector("resultado-palavrachave");
        const palavras = texto.split(" ");

        camporesultado. textContent = palavras.join(",");
    }
