const formulario = document.getElementById('form');
const borda = document.querySelectorAll('.border');
const confirma = document.querySelectorAll('.comfirm');
const negar = document.querySelectorAll('.alert');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-+.']\w+)*\.\w+([-.]\w+)*$/;
const nomeError = /^[A-Za-z]+$/;
const butão = document.querySelectorAll('button');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate(); nameSobreValidate(); emailValidate(); senhaValidate(); senhaRepertiValidate();
    document.getElementById("form").action = "/login.hmtl";

})

function errou(index) {
    borda[index].style.border = '2px solid red';
    negar[index].style.display = 'block';
    confirma[index].style.display = 'none';
}

function acertou(index) {
    borda[index].style.border = '2px solid green';
    negar[index].style.display = 'none';
    confirma[index].style.display = 'block';
}


function nameValidate() {
    if (!nomeError.test(borda[0].value) || borda[0].value.length < 3 || borda[0].value.length > 26) {
        errou(0)
    }
    else {
        acertou(0);
        nameSobreValidate()
    }
}

function nameSobreValidate() {
    if (!nomeError.test(borda[1].value) || borda[1].value.length < 3 || borda[1].value.length > 26 || borda[1].value == borda[0].value) {
        errou(1)
    }
    else {
        acertou(1)
    }
}

function emailValidate() {
    if (!emailRegex.test(borda[2].value) || borda[2].value.length < 6 || borda[2].value.length > 30) {
        errou(2)
    }
    else {
        acertou(2)
    }
}

function senhaValidate() {
    if (borda[3].value.length < 7 || borda[3].value.length > 11) {
        errou(3);
    }
    else {
        acertou(3);
        senhaRepertiValidate()
    }
}

function senhaRepertiValidate() {
    if (borda[3].value != borda[4].value || borda[4].value.length == 0) {
        errou(4)
    }
    else {
        acertou(4)
    }
}