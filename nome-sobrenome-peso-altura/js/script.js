const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

const pessoas = [];

function recebeEventoForm (evento) {
    evento.preventDefault();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value,
    });

    resultado.innerHTML += `<p><strong>Nome:</strong> ${nome.value} ${sobrenome.value}, <strong>peso:</strong> ${peso.value}Kg, <strong>altura:</strong> ${altura.value} metros.</p>`;
}

form.addEventListener('submit', recebeEventoForm);
