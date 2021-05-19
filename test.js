// массив вопросов

let questions = [
  {
    question: "Что такое условный оператор?",
    var1: "Конструкция, что выполняет код несколько раз",
    var2: "Конструкция для создания определенной переменной",
    var3: "Оператор сравнения значений",
    var4: "Не знаю :(",
    propper: 3,
  },
  {
    question: "Какие значения можно хранить в переменных?",
    var1: "Только числа и строки",
    var2: "Строки, числа с точкой и простые числа",
    var3: "Строки, числа с точкой, простые числа и булевые выражения",
    var4: "Не знаю :(",
    propper: 3,
  },
  {
    question: "Какая переменная записана неверно?",
    var1: `var num = "STRING";`,
    var2: `var isDone = 0;`,
    var3: "var number = 12,5;",
    var4: "Не знаю :(",
    propper: 3,
  },
  {
    question: "В чем отличие между локальной и глобальной переменной?",
    var1: "Глобальные видны повсюду, локальные только в функциях",
    var2: "Глобальные можно переопределять, локальные нельзя",
    var3: "Локальные можно переопределять, глобальные нельзя",
    var4: "Не знаю",
    propper: 1,
  },
  {
    question: "Где верно указан вывод данных?",
    var1: `console.log("Hello");`,
    var2: "print(Hello);",
    var3: `prompt("Hello")`,
    var4: "Не знаю :(",
    propper: 1,
  },
  {
    question: "Какие функции выполняет JS?",
    var1: `Выполняет работу с сервером`,
    var2: "Создает разметку на странице сайта",
    var3: "Отвечает за функции на стороне клиента",
    var4: "Не знаю :(",
    propper: 3,
  },
  {
    question: "Какие циклы есть в языке JavaScript?",
    var1: `for, while, do while`,
    var2: "for, forMap, foreach, while, do while",
    var3: "for, while, do while, foreach",
    var4: "Не знаю :(",
    propper: 1,
  },
  {
    question: "Где верно указан запуск всплывающего окна?",
    var1: `new alert ("Hi")`,
    var2: `alert ("Hi")`,
    var3: `info ("Hi")`,
    var4: "Не знаю :(",
    propper: 2,
  },
  {
    question: "Где верно указано имя переменной?",
    var1: `var 2num;`,
    var2: `var num-1;`,
    var3: `var num_1;`,
    var4: "Не знаю :(",
    propper: 3,
  },
  {
    question: "Как правильно написать if условие в JavaScript?",
    var1: `if (i == 5)`,
    var2: `if i == 5 then`,
    var3: `if i = 5 then`,
    var4: "Не знаю :(",
    propper: 1,
  },
];

// инициализация массива результатов
let temp = localStorage.getItem("results");
if (temp == "" || temp == null) {
  let results = [];
  localStorage.setItem("results", JSON.stringify(results));
}

//

const progress_line = document.querySelector("#progress-line");
const progress_counter = document.querySelector("#progress-counter");
const score = document.querySelector("#score");
const choice_btn = Array.from(document.querySelectorAll(".choice-btn"));
const question_text = document.querySelector("#question-text");
const variants = Array.from(document.querySelectorAll(".variant"));

let question_counter = 0;

let current;

// для первого отображения

fresh();

// обработка нажатий на кнопки + зеленый/красный текст

for (let item of choice_btn) {
  item.addEventListener("click", function () {
    console.log(event);
    if (item.dataset.number == questions[question_counter].propper) {
      // event.target.classList.add("green");
      item.classList.add("green");
      addPoints();
      setTimeout(del, 500);
      question_counter++;
      setTimeout(fresh, 1000);
      save();
    } else {
      // event.target.classList.add("red");
      item.classList.add("red");
      setTimeout(del, 500);
      question_counter++;
      setTimeout(fresh, 1000);
      save();
    }
    fresh_progress();
    item.classList.remove("choice-btn-hover");
  });
}

// Добавление в localStorage

function save() {
  if (question_counter == 10) {
    current = {
      name: "unknown",
      score: +score.innerHTML,
    };
    localStorage.setItem("current", JSON.stringify(current));

    // results = localStorage.getItem("results");
    // results = JSON.parse(results);
    // results.push(current);
    // localStorage.setItem("results", JSON.stringify(results));
    // console.log(results);
    document.location.href = "save.html";
  }
}

// обработка наведения

for (let item of choice_btn) {
  item.addEventListener("mouseover", function (event) {
    event.target.classList.add("choice-btn-hover");
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.classList.remove("choice-btn-hover");
    for (item of variants) {
      item.classList.remove("choice-btn-hover");
    }
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
