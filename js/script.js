
// Alunos Tabelas //

var linhaAluno = document.querySelectorAll(".aluno");
var imgExcluir = document.querySelectorAll(".imgExcluir");

for (var indice=0; indice < linhaAluno.length; indice++)
{	
	var local_nota_01 = linhaAluno[indice].querySelector(".info-prova1");
	var local_nota_02 = linhaAluno[indice].querySelector(".info-prova2");
	var local_media = linhaAluno[indice].querySelector(".info-media");	
	var localSituacao = linhaAluno[indice].querySelector(".info-situacao");
	var local_excluir = linhaAluno[indice].querySelector(".img-excluir");
	var mediaAluno = CalculoMedia(local_nota_01.textContent, local_nota_02.textContent);
	local_media.textContent = Exibicao(mediaAluno);
	VerificaSituacao(mediaAluno, 5, localSituacao);
	evento(imgExcluir[indice]);
}

//Excluir aluno//

function excluirLinha(excluir) {
	var linhaTabela = excluir.parentNode.parentNode;
	linhaTabela.classList.add("oisumido");
	evento();
}
function evento(excluir) {

	excluir.addEventListener('click', ChamarExcluir);
	
	function ChamarExcluir() {
		excluirLinha(excluir);
	}
	return;
}

// Novos Alunos//



//Variaveis//

var inputFiltro = document.querySelector("#txtFiltro");
var novotBody = document.querySelector(".tBody");
var botaoNovo = document.querySelector("#btnNew");
var telaBloqueio = document.querySelector(".bloqueio");
var telaForms = document.querySelector("#pnlNovo");
var botaoCancelar = document.querySelector("#btnCancelar");
var botaoPesquisa = document.querySelector("#btnSearch");
var formulario = document.querySelector("#frmNovo");
var botaoAdicionar = document.querySelector("#btnAdicionar");
var tabela = document.querySelector("#tblAlunos");
var msg = document.querySelector("#msg");

//EventsListener//

botaoNovo.addEventListener('click', exibirTelaNovoAluno);
botaoCancelar.addEventListener('click', retirarTelaNovoAluno);
botaoAdicionar.addEventListener('click', adicionarNovoAluno);
botaoPesquisa.addEventListener('click', pesquisaAluno);