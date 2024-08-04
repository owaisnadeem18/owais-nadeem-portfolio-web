let questions = [
  {
    que: "Who was the first Prime Minister Of Pakistan?",
    a: "Liaquat Ali Khan",
    b: "Muhammad Ali Jinnah",
    c: "Miss Fatima Jinnah",
    d: "Zulfiqar Bhutto",
    correct: "a",
  },
  {
    que: "What is the capital of Pakistan?",
    a: "Karachi",
    b: "Lahore",
    c: "Islamabad",
    d: "Quetta",
    correct: "c",
  },
  {
    que: "Which river is known as the lifeline of Pakistan?",
    a: "Indus River",
    b: "Jhelum River",
    c: "Chenab River",
    d: "Ravi River",
    correct: "a",
  },
  {
    que: "Who wrote the National Anthem of Pakistan?",
    a: "Allama Iqbal",
    b: "Hafeez Jalandhari",
    c: "Faiz Ahmed Faiz",
    d: "Mirza Ghalib",
    correct: "b",
  },
  {
    que: "When was the first constitution of Pakistan drafted?",
    a: "1950",
    b: "1956",
    c: "1962",
    d: "1973",
    correct: "b",
  },
];

let total_questions = questions.length;

let index = 0;
let right = 0;
let wrong = 0;

let question = document.getElementById("sawal");
let options = document.querySelectorAll(".options");

let reset = () => {
  options.forEach((input) => {
    input.checked = false;
  });
};

function endQuiz() {
  document.getElementById(
    "box"
  ).innerHTML = `<h2>Thank you for attempting this quiz.</h2>
        <p>You got ${right} marks out of ${total_questions}.</p>`;
}

let loadQuestions = () => {
  if (index == total_questions) {
    return endQuiz();
  }
  reset();
  const Quesdata = questions[index];
  question.innerText = `${index + 1}. ${Quesdata.que}`;
  options[0].value = Quesdata.a;
  options[1].value = Quesdata.b;
  options[2].value = Quesdata.c;
  options[3].value = Quesdata.d;
  options[0].nextElementSibling.innerText = Quesdata.a;
  options[1].nextElementSibling.innerText = Quesdata.b;
  options[2].nextElementSibling.innerText = Quesdata.c;
  options[3].nextElementSibling.innerText = Quesdata.d;
};

loadQuestions();

let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  submitQuiz();
});

let submitQuiz = () => {
  let Quesdata = questions[index];
  let ans = getAnswers();
  if (ans === Quesdata.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  if (index === total_questions) {
    return endQuiz();
  } else {
    loadQuestions();
  }
};

const getAnswers = () => {
  let selectedAnswer;
  options.forEach((input) => {
    if (input.checked) {
      selectedAnswer = input.value;
    }
  });
  return selectedAnswer;
};
