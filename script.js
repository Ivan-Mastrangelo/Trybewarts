// forms header
const email = document.querySelector('#email');
const inputSenha = document.querySelector('#password');
const buttonEntrar = document.querySelector('#btn-entrar');

// forms main
const inputName = document.querySelector('#input-name');
const inputLastName = document.querySelector('#input-lastname');
const inputEmail = document.querySelector('#input-email');
const inputSelect = document.querySelector('#house');

// Deixe seu comentário
const textArea = document.querySelector('#textarea');

const buttonEnviar = document.querySelector('#submit-btn');
const inputAgreement = document.querySelector('#agreement');
const counter = document.querySelector('#counter');
const forms = document.querySelector('#evaluation-form');

function login() {
  if (email.value === 'tryber@teste.com' && inputSenha.value === '123456') {
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

function foundFamily() {
  const family = document.querySelectorAll('.family');
  const selectFamily = [];
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      selectFamily.push(family[index].value);
    }
  }
  return selectFamily;
}

function foundDisciplines() {
  const disciplines = document.querySelectorAll('.subject');
  const selectDisciplines = [];
  for (let index = 0; index < disciplines.length; index += 1) {
    if (disciplines[index].checked === true) {
      selectDisciplines.push(` ${disciplines[index].value}`);
    }
  }
  return selectDisciplines;
}

function foundEvaluation() {
  const evaluation = document.querySelectorAll('.notes');
  const selectEvaluation = [];
  for (let index = 0; index < evaluation.length; index += 1) {
    if (evaluation[index].checked === true) {
      selectEvaluation.push(evaluation[index].value);
    }
  }
  return selectEvaluation;
}

buttonEnviar.addEventListener('click', () => {
  const listInscription = `Nome: ${inputName.value} ${inputLastName.value};
Email: ${inputEmail.value};
Casa: ${inputSelect.value};
Família: ${foundFamily()};
Matérias: ${foundDisciplines()};
Avaliação: ${foundEvaluation()};
Observações: ${textArea.value}`;
  forms.innerHTML = listInscription;
});
