const inputEmail = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const buttonEntrar = document.querySelector('#btn-entrar');

function login() {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

buttonEntrar.addEventListener('click', login);
