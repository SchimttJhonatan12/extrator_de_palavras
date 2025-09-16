const botaomostrapalavras= document.querySelector("#botao-palavrachave");
botaomostrapalavras.addEventListener("clik", mostrapalavraschave);
    function mostrapalavraschave(){
        const texto = document.querySelector("#entrada-de-texto").value;
        const camporesultado = document.querySelector("resultado-palavrachave");
        const palavras = texto.split(" ");

        camporesultado. textContent = palavras.join(",");
    }
   function processatexto (texto) {
   let palavras = texto.split(/\P{L}+U);
   const frequencias = contafrequecias(palavras);
   let ordenadas = object.keys(frequencias).sort(ordenaPalavra);

   function ordenaPalavras(p1,p2){
    return frequencias [p2]- frequencias[p1];
   }
    console.log(ordenadas);
    return ordenadas.slice(0,10);






]
 
 fuction contrafrequencias(palavras){
    let frequencias ={};
    for (let i of of palavras){
        frequencias{i} = 0;
        for(let j of palavras){
            if (i==j){
                frequencias{i}++;
            }
        }
    }
 }








   return palavras;

   }
    