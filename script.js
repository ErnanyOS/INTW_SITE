// Quiz Data
const quizData = [
  {
    pergunta: "Qual componente é conhecido como o 'coração' do circuito temporizador 555?",
    opcoes: ["Transistor", "CI 555", "Resistor", "Capacitor"],
    correta: 1
  },
  {
    pergunta: "O que faz um multivibrador astável?",
    opcoes: [
      "Gera um único pulso",
      "Gera um sinal de onda quadrada contínua",
      "Possui dois estados estáveis",
      "Mede resistência"
    ],
    correta: 1
  },
  {
    pergunta: "Qual filtro permite passagem de frequências baixas e atenua as altas?",
    opcoes: ["Filtro passa-alta", "Filtro passa-baixa", "Filtro passa-banda", "Filtro notch"],
    correta: 1
  },
  {
    pergunta: "Qual é a função principal da ponte de Wheatstone?",
    opcoes: [
      "Amplificar sinais",
      "Medir resistências desconhecidas",
      "Gerar sinais de áudio",
      "Regular tensão"
    ],
    correta: 1
  },
  {
    pergunta: "O que é um circuito bistável?",
    opcoes: [
      "Um circuito que gera pulsos únicos",
      "Um circuito com dois estados estáveis",
      "Um circuito que amplifica sinais",
      "Um circuito que rejeita frequências específicas"
    ],
    correta: 1
  }
];

let currentQuestion = 0;
let score = 0;

const quizContent = document.getElementById('quiz-content');
const btnConfirmar = document.getElementById('btn-confirmar');

function carregarPergunta() {
  btnConfirmar.disabled = true;
  const q = quizData[currentQuestion];

  let opcoesHTML = '<ul class="opcoes">';
  q.opcoes.forEach((opcao, i) => {
    opcoesHTML += `
      <li>
        <label>
          <input type="radio" name="opcao" value="${i}" />
          ${opcao}
        </label>
      </li>
    `;
  });
  opcoesHTML += '</ul>';

  quizContent.innerHTML = `
    <div class="pergunta">${q.pergunta}</div>
    ${opcoesHTML}
  `;

  const radios = document.querySelectorAll('input[name="opcao"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      btnConfirmar.disabled = false;
    });
  });
}

btnConfirmar.addEventListener('click', () => {
  const selected = document.querySelector('input[name="opcao"]:checked');
  if (!selected) return;

  const resposta = parseInt(selected.value);
  if (resposta === quizData[currentQuestion].correta) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
});

function mostrarResultado() {
  quizContent.innerHTML = `
    <div class="resultado">Você acertou ${score} de ${quizData.length} perguntas!</div>
  `;
  btnConfirmar.style.display = 'none';
}

// Inicia o quiz
carregarPergunta();

