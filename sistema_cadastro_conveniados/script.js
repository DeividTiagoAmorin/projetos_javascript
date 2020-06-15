let listaConveniados = []
var valorTotal = 0

function adicionarConveniado(co, n, ca, i, m) {
	listaConveniados.push([co, n, ca, i, m])
}

function montarTabela(lista) {
	var html = ''
	for (var linha = 0; linha < lista.length; linha++) {
		html += '<tr>'
		for (var c = 0; c < lista[linha].length; c++){
			html += '<td>'+ lista[linha][c] + '</td>'
		}
		html += '</tr>'
	}
	return html
}
window.onload = function() {
	document.addEventListener('click', function(evento) {
		var elemento = evento.target || evento.SrcElement;
		switch (elemento.id){
			case 'listarConveniados': 
				let codigo = document.getElementById('codigo').value
				let nome = document.getElementById('nome').value
				let categoria = document.getElementById('categoria').value
				let idade = document.getElementById('idade').value
				let mensalidade = document.getElementById('valorBase').value
	
				if(codigo == '' || nome == '' || categoria == '' || idade == '' || mensalidade == ''){
					alert('Preencha todos os campos!')
				}else{
	
					if (categoria === 'individual') {
						mensalidade *= 1.5
					}else{
						mensalidade *= 0.9
					}

					if (idade <= 30) {
						mensalidade *= 1.1
					}else if(idade >= 31 && idade <= 60){
						mensalidade *= 1.2
					}else{
						mensalidade *= 1.3
					}
					mensalidade = mensalidade.toFixed(2)
					mensalidade = parseFloat(mensalidade)

					valorTotal += mensalidade
					
	
					adicionarConveniado(codigo,nome,categoria,idade,mensalidade)
	
					document.getElementById('tabela').innerHTML = montarTabela(listaConveniados)
				}	
				break
			case 'btLimpar':
				listaConveniados = [];
				document.getElementById('tabela').innerHTML = montarTabela(listaConveniados);
				valorTotal = 0
				break
			case 'mostrarValor':

				if (valorTotal > 0){
					alert("O valor total é: " + valorTotal)
				}else{
					alert("Não foi inserido nenhum valor!")
				}
				break
		}	
	})
}