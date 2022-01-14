//Calculos de media e exibição//

function CalculoMedia(n1, n2) 
{
	n1 = parseFloat(n1.replace(",","."));
	n2 = parseFloat(n2.replace(",","."));
	return (n1 + n2) / 2;
}

function VerificaSituacao(notaFinal, notaAprovacao, local)
{
	if ( notaFinal >= notaAprovacao)
		{
			local.textContent = "Aprovado(a)";
			local.classList.add("aprovado");
		}
	else
		{
			local.textContent = "Reprovado(a)"; 
			local.classList.add("reprovado");

		}
}

function Exibicao(nota_x)
{
	return nota_x.toFixed(1).toString().replace(".",",");
}

// Display: none; //

function exibirTelaNovoAluno(event) {
	event.preventDefault();
	telaBloqueio.classList.remove("oisumido");
	telaForms.classList.remove("oisumido");
}

function retirarTelaNovoAluno(event) {
	event.preventDefault();
	fecharFormulario();
	
}
function fecharFormulario(){
	formulario.txtNome.value="";
	formulario.txtRM.value="";
	formulario.txtNota1.value="";
	formulario.txtNota2.value="";
	telaBloqueio.classList.add("oisumido");
	telaForms.classList.add("oisumido");
}

// Novos Alunos //

function adicionarNovoAluno (event) {
	event.preventDefault();
	var rm = formulario.txtRM.value;
	var nome = formulario.txtNome.value;
	var nota1 = formulario.txtNota1.value;
	var nota2 = formulario.txtNota2.value;
	if ( rm == "")
	{
		msg.textContent = "RM inválido";
		return;
	}
	if (rm <0 || rm >99999) 
	{
		msg.textContent = "RM inválido";
		return;
	}
	if ( nome == "")
	{
		msg.textContent = "Nome inválido";
		return;
	}
	if ( nota1 == "")
	{
		msg.textContent = "Nota 1 inválida";
		return;
	}
	if (nota1 <0 || nota1 >10) 
	{
		msg.textContent = "Nota 1 inválida";
		return;
	}
		nota1 = parseFloat(nota1);
	
	if ( nota2 == "")
	{
		msg.textContent = "Nota 2 inválida";
		return;
	}
	if (nota2 <0 || nota2 >10) 
	{
		msg.textContent = "Nota 2 inválida";
		return;
	}

// Novas celulas//

	var mediaNovoAluno = CalculoMedia(nota1.toString().replace(".",","), nota2.toString().replace(",","."));

	var novaLinha = document.createElement("tr");
	novaLinha.classList.add("aluno")

	var celRM = document.createElement("td");
	celRM.classList.add("info-rm");
	celRM.textContent = rm;

	var celNome = document.createElement("td");
	celNome.classList.add("info-nomne");
	celNome.textContent = nome.toUpperCase();

	var celN1 = document.createElement("td");
	celN1.classList.add("info-prova1");
	celN1.textContent = nota1.toString().replace(".",",");

	var celN2 = document.createElement("td");
	celN2.classList.add("info-prova2");
	celN2.textContent = nota2.toString().replace(".",",");

	var celMedia = document.createElement("td");
	celMedia.classList.add("info-media");
	celMedia.textContent = mediaNovoAluno.toString().replace(".",",");

	var celSituacao = document.createElement("td");
	celSituacao.classList.add("info-situaco");

	var celExcluir = document.createElement("td");
	celExcluir.classList.add("tdExcluir");

	var celImagem = document.createElement("img");
	celImagem.src = "images/lixeira.png";
	celImagem.classList.add("imgExcluir");

	VerificaSituacao(mediaNovoAluno, 5, celSituacao);

//appendchild//

	celExcluir.appendChild(celImagem);

	novaLinha.appendChild(celRM);
	novaLinha.appendChild(celNome);
	novaLinha.appendChild(celN1);
	novaLinha.appendChild(celN2);
	novaLinha.appendChild(celMedia);
	novaLinha.appendChild(celSituacao);
	novaLinha.appendChild(celExcluir);

	tabela.appendChild(novaLinha);

//finalização//

	fecharFormulario();
	evento(celImagem);
}

//Pesquisa do Aluno

function pesquisaAluno(event) {
	event.preventDefault();

	var alunoPesquisado = inputFiltro.value.toUpperCase().substring(length);
	var nomeAlunos = document.querySelectorAll(".info-nome");
	
	for (var indice=0; indice < nomeAlunos.length; indice++)
	{	
		linhaAluno[indice].classList.remove("oisumido");		
		var txtAlunos = nomeAlunos[indice].textContent.toUpperCase();

		if (alunoPesquisado == txtAlunos.substring(0, alunoPesquisado.length)){}
		else {
			linhaAluno[indice].classList.add("oisumido");
		}
	}
}



	

