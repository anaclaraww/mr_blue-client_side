//Validação com dados do localStorage, mas antes verifiquei o tipo para buscar na lista especifica do usuário

const form_login = document.getElementById('formulario');
var tipoUser = "";
var UserLogado = false;
function IdentificarTipoUser(valorSelecionado) {
  if (valorSelecionado == 'Ponto de coleta') {
    tipoUser = 'ponto_coleta'
    console.log(tipoUser);
  }
  else if (valorSelecionado == 'Coletor') {
    tipoUser = 'coletor'
    console.log(tipoUser);
  } else if (valorSelecionado == 'Colaborador de carregamento(bateria)') {
    tipoUser = 'colaborador_bateria'
    console.log(tipoUser);
  } else {
    return false;
  }
}
console.log(tipoUser);


formulario.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  if (tipoUser === 'ponto_coleta') {
    ValidacaoLista('listaPontosDeColeta', email, senha)
  } else if (tipoUser === 'coletor') {
    ValidacaoLista('listaColetores', email, senha)
  } else if (tipoUser === 'colaborador_bateria') {
    ValidacaoLista('listaColaboradorBateria', email, senha)
  } else {
    alert("Informe o tipo")
  }


});


function ValidacaoLista(nomeLista, emailUser, senhaUser,) {
  const stringArmazenada = localStorage.getItem(nomeLista);
  let listaCadastrada = [];

  if (stringArmazenada) {
    listaCadastrada = JSON.parse(stringArmazenada);
  }
  const usuarioEncontrado = listaCadastrada.find(user => {
    return user.email === emailUser && user.senha === senhaUser;
  });
  if (usuarioEncontrado) {
    UserLogado = true
    console.log('foi');
  }
}