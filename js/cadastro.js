//Verificação do tipo de usuário e cadastro
//Os dados estão sendo cadastrados no localStorage e por conta de poderem ser mais de um usei um array de JSON e depois tive que converter

const div_inputs = document.getElementById('campos');
const form_cadastro = document.getElementById('form_cadastro')
var tipoUser = ''
function IdentificarTipoUser(valorSelecionado) {
    if (valorSelecionado == 'Ponto de coleta') {
        console.log('isso');
        AddInputsUserPontoDeColeta()
        tipoUser = 'ponto_coleta'
    }
    else if (valorSelecionado == 'Coletor') {
        AddInputsUserColetor();
        tipoUser = 'coletor'
    } else if (valorSelecionado == 'Colaborador de carregamento(bateria)') {
        AddInputsUserColaboradorBeteria();
        tipoUser = 'colaborador_bateria'

    } else {
        return false;
    }
}

function AddInputsUserColetor() {
    AddInputs('text', 'RG:', div_inputs, 'rg');
    AddInputs('text', 'Endereço ONG ou Residencial:', div_inputs, 'end_coletor');
}

function AddInputsUserPontoDeColeta() {
    AddInputs('text', 'Localização do ponto:', div_inputs, 'endereco_ponto');
    AddInputs('text', 'Nome do ponto coletor:', div_inputs, 'nome_ponto');
    AddInputs('text', 'Responsável pelo Ponto:', div_inputs, 'responsavel_ponto');
}

function AddInputsUserColaboradorBeteria() {
    AddInputs('text', 'Nome do barco:', div_inputs, 'nome_barco');
    AddInputs('text', 'Tipo de barco:(ex:lancha, veleiro, iate, catamarã,...)', div_inputs, 'tipo_barco');
    AddInputs('text', 'Número de Registro:', div_inputs, 'num_registro');
}

function AddInputs(type, text, divPai, name) {
    const label = document.createElement("label");
    label.textContent = text;
    divPai.appendChild(label);
    const input = document.createElement("input");
    input.type = type;
    input.name = name
    divPai.appendChild(input);
    const br = document.createElement("br");
    divPai.appendChild(br);
}

form_cadastro.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = new FormData(event.target);

    if (tipoUser === 'ponto_coleta') {
        let Cadastro = CadastrarPontoColeta(dados);
        if (Cadastro) {
            alert("Cadastrado com sucesso!")
        }
    }
    else if (tipoUser === 'coletor') {
        let Cadastro = CadastrarColetor(dados)
        if (Cadastro) {
            alert("Cadastrado com sucesso!")
        }
    }
    else if (tipoUser === 'colaborador_bateria') {
        let Cadastro = CadastrarColaboradorBateria(dados);
        if (Cadastro) {
            alert("Cadastrado com sucesso!")
        }
    } else {
        alert('informe o Tipo.')
    }

})

function CadastrarPontoColeta(dados){
    const telefone = dados.get('tel');
    const email = dados.get('email');
    const nome = dados.get('nome');
    const cpf = dados.get('cpf');
    const senha = dados.get('senha');
    const end_ponto = dados.get('endereco_ponto');
    const nome_ponto = dados.get('nome_ponto');
    const responsavel_ponto = dados.get('responsavel_ponto');

    const NovoPontoDeColeta = {
        "email": email,
        "nome": nome,
        "telefone": telefone,
        "cpf": cpf,
        "senha": senha,
        "end_ponto": end_ponto,
        "nome_ponto": nome_ponto,
        "responsavel_ponto": responsavel_ponto,
    }
    
    let pontosDeColetaString = localStorage.getItem('listaPontosDeColeta');
    if (pontosDeColetaString) {
        var pontosDeColetaJson = JSON.parse(pontosDeColetaString);
        pontosDeColetaJson.push(NovoPontoDeColeta)
        let updateString = JSON.stringify(pontosDeColetaJson);
        localStorage.setItem('listaPontosDeColeta', updateString);
        return true
    }else{
        var pontosColetaNew = JSON.stringify([NovoPontoDeColeta]);
        localStorage.setItem('listaPontosDeColeta', pontosColetaNew);
        return true
    }

}


function CadastrarColetor(dados){
    const telefone = dados.get('tel');
    const email = dados.get('email');
    const nome = dados.get('nome');
    const cpf = dados.get('cpf');
    const senha = dados.get('senha');
    const rg = dados.get('rg');
    const end_coletor = dados.get('end_coletor');
   

    const NovoColetor = {
        "email": email,
        "nome": nome,
        "telefone": telefone,
        "cpf": cpf,
        "senha": senha,
        "rg": rg,
        "end_coletor": end_coletor,
        "pontos":0
    }
    
    let ColetorString = localStorage.getItem('listaColetores');
    if (ColetorString) {
        var ColetorJson = JSON.parse(ColetorString);
        ColetorJson.push(NovoColetor)
        let updateString = JSON.stringify(ColetorJson);
        localStorage.setItem('listaColetores', updateString);
        return true
    }else{
        var coletorNew = JSON.stringify([NovoColetor]);
        localStorage.setItem('listaColetores', coletorNew);
        return true
    }

}

function CadastrarColaboradorBateria(dados){
    const telefone = dados.get('tel');
    const email = dados.get('email');
    const nome = dados.get('nome');
    const cpf = dados.get('cpf');
    const senha = dados.get('senha');
    const nome_barco = dados.get('nome_barco');
    const tipo_barco = dados.get('tipo_barco');
    const num_registro = dados.get('num_registro');

    const NovoColaboradorBateria = {
        "email": email,
        "nome": nome,
        "telefone": telefone,
        "cpf": cpf,
        "senha": senha,
        "nome_barco": nome_barco,
        "tipo_barco": tipo_barco,
        "num_registro": num_registro,
        "pontos":0
    }
    
    let colaboradorBateriaString = localStorage.getItem('listaColaboradorBateria');
    if (colaboradorBateriaString) {
        var colaboradorBateriaJson = JSON.parse(colaboradorBateriaString);
        colaboradorBateriaJson.push(NovoColaboradorBateria)
        let updateString = JSON.stringify(colaboradorBateriaJson);
        localStorage.setItem('listaColaboradorBateria', updateString);
        return true
    }else{
        var colaboradorBateriaNew = JSON.stringify([NovoColaboradorBateria]);
        localStorage.setItem('listaColaboradorBateria', colaboradorBateriaNew);
        return true
    }

}