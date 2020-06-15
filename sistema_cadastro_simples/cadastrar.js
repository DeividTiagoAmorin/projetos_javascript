var listaContatos = [];

function adicionarContato(nomeContato, telContato, lista) {
	lista.push([nomeContato, telContato]);
	alert('O contato '+ nomeContato +' foi adicionado!');
}

function montarTabela(lista) {
	var html = '';
	for (var linha = 0; linha < lista.length; linha++) {
		html += '<tr>';
		for (var c = 0; c < lista[linha].length; c++){
			html += '<td>'+ lista[linha][c] + '</td>';
		}
		html += '</tr>'
	}
	return html;
}

window.onload = function() {
	document.getElementById('btCadastrar').addEventListener('click', function(){
		var nome = document.getElementById('nome').value;
		document.getElementById('nome').value = '';
		var telefone = document.getElementById('telefone').value;	
		document.getElementById('telefone').value = '';	
		adicionarContato(nome, telefone, listaContatos);
		document.getElementById('tabela').innerHTML = montarTabela(listaContatos);	
	});
}