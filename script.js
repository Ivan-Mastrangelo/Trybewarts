const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const buttonEntrar = document.querySelector('#btn-entrar');
const buttonEnviar = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');
const textArea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');

function login() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', login);

function sendForm() {
  if (buttonEnviar.disabled === true) {
    buttonEnviar.disabled = false;
  } else {
    buttonEnviar.disabled = true;
  }
}

inputAgreement.addEventListener('click', sendForm);

textArea.addEventListener('keyup', () => {
  counter.innerHTML = 500 - textArea.value.length;
});
