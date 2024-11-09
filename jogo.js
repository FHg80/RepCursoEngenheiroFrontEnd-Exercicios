class Jogo {
    constructor(nome, genero) {
        this.nome = nome;
        this.genero = genero;
    }
}

class JogoTabuleiro extends Jogo {
    constructor(nome, genero, regras, numJogadores) {
        super(nome, genero);
        this.regras = regras;
        this.numJogadores = numJogadores;
    }
}

class Videogame extends Jogo {
    constructor(nome, genero, modalidade, plataforma) {
        super(nome, genero)
        this.plataforma = plataforma;
        this.modalidade = modalidade
    }
}

const jogo1 = new JogoTabuleiro('Monopoly',  'Bancário', ['Regra 1', 'Regra 2', 'Regra 3'], '2-6',);
const jogo2 = new Videogame('Terraria', 'Survival', 'Singleplayer/Multiplayer', 'PC');
const jogo3 = new Videogame('Hoolow Knight', 'Metroidvania', 'Singleplayer', 'PC');

console.log(jogo1);
console.log(jogo2);
console.log(jogo3);