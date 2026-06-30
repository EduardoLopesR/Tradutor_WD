import { quizData } from "./perguntas_quiz.js";
  const questionElement = document.getElementById("questoes");
  const optionsElement = document.getElementById("respostas");
  const submitButton = document.getElementById("enviar");
  const quizContainer = document.getElementById("quiz");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completado!</h1>
      <p>Sua pontuação: ${score}/${quizData.length}</p>
    `;
  }
  showQuestion();
//lógica do quiz "https://medium.com/@codepicker57/building-an-interactive-quiz-with-html-css-and-javascript-efe9bd8129e2"