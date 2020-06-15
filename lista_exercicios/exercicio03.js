//Função que encontra uma palavra em um array e retorna true ou false

function temHabilidade(skills) {
    let teste = skills.indexOf("Javascript");
    return teste != -1 ? true : false;
    }

let skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills)); // true ou false