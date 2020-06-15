//Função que retorna a experiência do usuário sendo:
   // De 0-1 ano: Iniciante
   // De 1-3 anos: Intermediário
   // De 3-6 anos: Avançado
   // De 7 acima: Jedi Master

function experiencia(anos) {
    if(anos <= 1)
        console.log("Iniciante");
    else if(anos <= 3)
        console.log("Intermediário");
    else if(anos <= 3)
        console.log("Avançado");       
    else if(anos <= 6)
        console.log("Avançado");
    else if(anos >= 7)
        console.log("Jedi Master");
    else
        console.log("Valor inválido");
    }

let anosEstudo = 7;
experiencia(anosEstudo);
