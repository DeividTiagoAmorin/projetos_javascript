let numero = Number(prompt('Digite um número:'));
  document.body.innerHTML += `Seu numero é: <strong>${numero}</strong><br />`;
  document.body.innerHTML += `Raiz quadrada: <strong>${numero ** 0.5}</strong><br />`;
  document.body.innerHTML += `<strong>${numero}</strong> é inteiro? <strong>${Number.isInteger(numero)}</strong><br />`;
  document.body.innerHTML += `É NaN: <strong>${Number.isNaN(numero)}</strong><br />`;
  document.body.innerHTML += `Arredondado para baixo: <strong>${Math.floor(numero)}</strong><br />`;
  document.body.innerHTML += `Arredondado para cima: <strong>${Math.ceil(numero)}</strong><br />`;
  document.body.innerHTML += `Com duas casas decimais: <strong>${numero.toFixed(2)}</strong><br />`;
