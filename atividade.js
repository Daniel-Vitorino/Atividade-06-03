let nome = prompt('Digite seu nome');
let sobrenome = prompt('Digite seu sobrenome');
const nomeCompleto = `${nome} ${sobrenome}`;
alert('Ola, ' + nomeCompleto);
alert('Por favor ensira os seus dados pessoais para que possa ser realizada o emprestimo');
let idade = parseFloat(prompt('Digite sua idade'));
let cpf = prompt('Digite o seu CPF');
let profissao = prompt('Informe sua Profissão');
let endereco = prompt('Informe o seu endereço');
let email = prompt('Informe o seu email');
let telefone = prompt('Digite o seu telefone');
let nacionalidade = prompt('Informe a sua nacionalidade');
let estado = prompt('Informe o seu estado');
let cidade = prompt('Informe sua cidade');
let cep = prompt('Digite seu CEP');


class pessoa1 {
    constructor(nome, sobrenome, idade, cpf, profissao, endereco, email, telefone, nacionalidade, estado, cidade, cep) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
        this.cpf = cpf
        this.profissao = profissao
        this.endereco = endereco
        this.email = email
        this.telefone = telefone
        this.nacionalidade = nacionalidade
        this.estado = estado
        this.cidade = cidade
        this.cep = cep

    }
    apresentar = () => {
        console.log(`Olá, meu nome é ${this.nome} ${this.sobrenome}, tenho ${this.idade} anos,o meu cpf é ${this.cpf}, minha profissão é ${this.profissao}, o meu endereço é ${this.endereco}, o meu email é ${this.endereco}, o meu telefone é ${this.telefone}, a minha nacionalidade é ${this.nacionalidade}, eu moro no estado de ${this.estado}, eu moro na cidade chamada ${this.cidade} e  o cep da minha cidade é ${this.cep}`)
    }
}
let minhaPessoa = new pessoa1(nome, sobrenome, idade, cpf, profissao, endereco, email, telefone, nacionalidade, estado, cidade, cep)
minhaPessoa.apresentar()


let veiculo = prompt('Digite o nome do veiculo que você deseja comprar pelo emprestimo');

let ano = parseInt(prompt('Digite o ano do carro'));

let cor = prompt('Digite a cor do carro');

class veiculo1 {
    constructor(veiculo, ano, cor) {
        this.veiculo = veiculo;
        this.ano = ano;
        this.cor = cor;
    }
    apresentar = () => {
        console.log(`Este carro é o ${this.veiculo}, o ano dele é ${this.ano} e a cor dele é ${this.cor}`)
    }
}

let meuVeiculo = new veiculo1(veiculo, cor, ano);
meuVeiculo.apresentar();



let jurosPorParcela = 0.1;
let quantidadeMaximaParcelas = 12;

function SimularParcelas() {
    let valorEmprestimo = parseFloat(prompt('Digite o valor que você deseja pegar emprestado.'));
    let continuarSimulacao = true;

    while (continuarSimulacao) {
        for (let parcelas = 1; parcelas <= quantidadeMaximaParcelas; parcelas++) {
            console.log(`Ao optar por ${parcelas} parcelas, você pagará R$ ${ValorParcela(valorEmprestimo, parcelas).toFixed(2)}`);
        }

        let resposta = prompt('Olhe no seu console para ver a simulação. Deseja continuar a simulação? Digite SIM para continuar ou qualquer outra coisa para parar.');
        continuarSimulacao = resposta.toLocaleUpperCase() === 'SIM';
    }
}

function ValorParcela(valorEmprestimo, parcelas) {
    var jurosTotal = parcelas * jurosPorParcela * valorEmprestimo;
    return valorEmprestimo + jurosTotal;
}

SimularParcelas();
