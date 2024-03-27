$(document).ready(()=> {

    const listaTarefas = [];

    $('form').on('submit',(e) => {
        e.preventDefault();
        const nomeTarefa = $('#input-nome-tarefa').val();
        let tarefa = $(`<li>${nomeTarefa}</li>`);

        if(listaTarefas.includes(nomeTarefa)) {
            alert("Esta tarefa já está cadastrada");
        } else {
            $(tarefa).appendTo('ul');
            listaTarefas.push(nomeTarefa);
            $('#input-nome-tarefa').val('');
        }
    })

    $('ul').on('click', function(e) {
        e.target.style.textDecoration = "line-through";
        e.target.style.color = "red"
    })
})