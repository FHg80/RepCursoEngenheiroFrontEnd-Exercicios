const alunos = [];

alunos.push({
     nome: 'Pedro',
     nota: 10
})

alunos.push({
     nome: 'Tales',
     nota: 9
})

alunos.push({
     nome: 'Fabricio',
     nota: 3
})

function retornaAprovados() {
     const aprovados = alunos.filter(aluno => aluno.nota >= 6);
     return aprovados;
}

console.log(retornaAprovados());
