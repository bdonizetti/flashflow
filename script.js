const flashcards = [
	{
		question: "O que é JavaScript?",
		answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
	},
	{
		question: "O que são funções de callback em JavaScript?",
		answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
	},
	{
		question: "O que é o this em JavaScript?",
		answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
	},
	{
		question: "O que é hoisting em JavaScript?",
		answer: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
	},
	{
		question: "O que são tipos primitivos em JavaScript?",
		answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
	},
];

let currentIndex = 0;
let showingAnswer = false;

const flashcard = document.getElementById('flashcard');
const cardNumber = document.getElementById('card-number');
const nextBtn = document.getElementById('next-btn');

function updateCard() {
  const card = flashcards[currentIndex];
  flashcard.textContent = card.question;
  cardNumber.textContent = `Card ${currentIndex + 1} de ${flashcards.length}`;
	flashcard.classList.remove('answer');
  showingAnswer = false;
}

flashcard.addEventListener('click', () => {
  if (!showingAnswer) {
    flashcard.textContent = flashcards[currentIndex].answer;
    flashcard.classList.add('answer');
    showingAnswer = true;
  } else {
    flashcard.textContent = flashcards[currentIndex].question;
    flashcard.classList.remove('answer');
    showingAnswer = false;
  }
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1);
  updateCard();
});

updateCard();