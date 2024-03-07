const form = document.getElementById('form-principal');
const containerNumA = document.getElementById('input-num-a');
const containerNumB = document.getElementById('input-num-b');
const buttonSubmit = document.querySelector('.btn-submit')
const containerMsgErro = document.querySelector('.msg-erro');
let formValido = false;

function validaNumero(numA, numB) {
    if(numB > numA) {
        return true
    } else {
        return false
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const msgSucesso = `O número ${containerNumB.value} é maior do que ${containerNumA.value}`
    formValido = validaNumero(containerNumA.value, containerNumB.value);

    if (formValido) {
        const containerMsgAcerto = document.querySelector('.msg-acerto');
        containerMsgAcerto.innerHTML = msgSucesso;
        containerMsgAcerto.style.display = 'block';
        containerNumA.value = '';
        containerNumB.value = '';
    } else {
        containerMsgErro.style.display = 'block'

    }
})

containerNumB.addEventListener('keyup', function(e) {
    formValido = validaNumero(containerNumA.value, e.target.value)
    if(!formValido) {
        buttonSubmit.classList.add('disable');
        containerNumB.classList.add('error');
        containerMsgErro.style.display = 'block'
    } else {
        buttonSubmit.classList.remove('disable')
        containerNumB.classList.remove('error')
        containerMsgErro.style.display = 'none'
    }
})