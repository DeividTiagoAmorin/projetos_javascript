var listaContatos = [];
var posAlteracao = '';

class Contato{
	constructor(nome, telefone, email){
		this.nome = nome;
		this.telefone = telefone;
		this.email = email;
	}
}

var contato1 = JSON.parse('{"nome":"Deivid Tiago Amorin","telefone":"000","email":"deivid-amorin@hotmail.com"}');
listaContatos.push(contato1);

function adicionarContato(nomeContato, telContato, emailContato, lista) {
	var objContato = new Contato(nomeContato, telContato, emailContato);
	lista.push(objContato);
	//lista.push(new Contato(nomeContato, telContato));
}

function montarTabela(lista) {
	var html = '';
	for (var linha = 0; linha < lista.length; linha++) {
		html += '<tr>';
		html += '<td>'+ lista[linha].nome + '</td>';
		html += '<td>'+ lista[linha].telefone + '</td>';
		html += '<td>'+ lista[linha].email + '</td>';
		html += '<td><button id="btExcluir" rel="'+ linha + '"class="btn btn-danger">X</button></td>';
		html += '<td><button id="btAlterar" rel="'+ linha + '"class="btn btn-warning">Alterar</button></td>';
		html += '</tr>'
	}
	return html;
}

function excluirContato(lista, posi) {
	lista.splice(posi, 1)
}

function alterarContato(lista, posi){
	lista[posi].nome = prompt ('Informe o nome: ', '');
	lista[posi].telefone = prompt ('Informe o telefone: ', '');
	lista[posi].email = prompt ('Informe o E-Mail: ', '');
}

window.onload = function() {
	document.addEventListener('click', function(evento) {
		var elemento = evento.target || evento.SrcElement;
		switch (elemento.id){
			case 'btCadastrar': 
				var nome = document.getElementById('nome').value;
				var telefone = document.getElementById('telefone').value;
				var email = document.getElementById('email').value;
				if(isNaN(telefone)){
					alert('Digitar somente números!!!')
					break
				}	
				if (nome != '' && telefone != ''){
					adicionarContato(nome, telefone, email, listaContatos);
					document.getElementById('tabela').innerHTML = montarTabela(listaContatos);	
					document.getElementById('nome').value = '';
					document.getElementById('telefone').value = '';	
					document.getElementById('email').value = '';	
				}
				else{
					alert('Informe todos os campos!')
				}
				break;
			case 'btLimpar':
				listaContatos = [];
				document.getElementById('tabela').innerHTML = montarTabela(listaContatos);
				break;
			case 'btExcluir':
				if(confirm('Excluir contato?')){
					var posicao = elemento.getAttribute('rel');
					excluirContato(listaContatos, posicao)
					document.getElementById('tabela').innerHTML = montarTabela(listaContatos);
				}
				break;
			case 'btAlterar':
				if(confirm('Alterar contato?')){
					var posicao = elemento.getAttribute('rel');
					alterarContato(listaContatos, posicao)
					document.getElementById('tabela').innerHTML = montarTabela(listaContatos);
				}
				break;
			case 'btJson':
				var json = JSON.stringify(listaContatos);
				alert(json);
				break;
		}	
	})
}

document.addEventListener('keypress', function(evento) {
	var origem = evento.target || evento.srcElement;
	var tecla = evento.which || evento.keyCode;
		
	if (origem.id == 'telefone' && tecla == 13){
		document.getElementById('btCadastrar').click()
	}
})