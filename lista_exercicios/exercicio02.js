//Função que exibi todos os números pares entre um intervalo

function exibirNumerosParesEntre(x, y) {
    for(; x <= y; x++){
        if((x % 2) == 0){
            console.log(x);
        }   
    }
   }

exibirNumerosParesEntre(32, 321);