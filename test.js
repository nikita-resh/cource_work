// массив вопросов

let questions = [
  {
    question: "Question 1",
    var1: "1",
    var2: "2",
    var3: "3",
    var4: "4",
    propper: 1,
  },
  {
    question: "Question 2",
    var1: "1",
    var2: "2",
    var3: "3",
    var4: "4",
    propper: 2,
  },
  {
    question: "Question 3",
    var1: "1",
    var2: "2",
    var3: "3",
    var4: "4",
    propper: 3,
  },
  {
    question: "Question 4",
    var1: "1",
    var2: "2",
    var3: "3",
    var4: "4",
    propper: 4,
  },
];

//

const progress_line = document.querySelector("#progress-line");
const progress_counter = document.querySelector("#progress-counter");
const score = document.querySelector("#score");
const choice_btn = Array.from(document.querySelectorAll(".choice-btn"));
const question_text = document.querySelector("#question-text");
const variants = Array.from(document.querySelectorAll(".variant"));

let question_counter = 0;

// для первого отображения

fresh();

// обработка нажатий на кнопки + зеленый/красный текст

for (let item of choice_btn) {
  item.addEventListener("click", function () {
    if (event.target.dataset.number == questions[question_counter].propper) {
      event.target.classList.add("green");
      addPoints();
      setTimeout(del, 500);
      question_counter++;
      setTimeout(fresh, 1000);
    } else {
      event.target.classList.add("red");
      setTimeout(del, 500);
      question_counter++;
      setTimeout(fresh, 1000);
    }
    fresh_progress();
    event.target.classList.remove("choice-btn-hover");
  });
}

// обработка наведения

for (let item of choice_btn) {
  item.addEventListener("mouseover", function (event) {
    event.target.classList.add("choice-btn-hover");
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.classList.remove("choice-btn-hover");
  });
}

// обновление вопросов и вариантов ответов

function fresh() {
  fresh_question();
  fresh_progress();
}

// обновление полосы прогресса

function fresh_progress() {
  let style = `linear-gradient(90deg, rgba(171, 255, 46,1) 0%, rgba(171, 255, 46,1) ${
    (100 * question_counter) / questions.length
  }%, rgba(171, 255, 46,0) ${(100 * question_counter) / questions.length}%)`;
  progress_line.style.background = style;
}

// обновление вопросов

function fresh_question() {
  question_text.innerHTML = questions[question_counter].question;
  variants[0].innerHTML = questions[question_counter].var1;
  variants[1].innerHTML = questions[question_counter].var2;
  variants[2].innerHTML = questions[question_counter].var3;
  variants[3].innerHTML = questions[question_counter].var4;
}

function del() {
  for (let item of choice_btn) {
    item.classList.remove("red");
    item.classList.remove("green");
  }
}

function addPoints() {
  score.innerHTML = +score.innerHTML + 100;
}
