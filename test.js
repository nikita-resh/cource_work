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

const progress_line = document.querySelector("#progress-line");
const progress_counter = document.querySelector("#progress-counter");
const score = document.querySelector("#score");
const choice_btn = Array.from(document.querySelectorAll(".choice-btn"));
const question_text = document.querySelector("#question-text");
const variants = Array.from(document.querySelectorAll(".variant"));

let question_counter = 0;

fresh();

function fresh() {
  question_text.innerHTML = questions[question_counter].question;
  variants[0].innerHTML = questions[question_counter].var1;
  variants[1].innerHTML = questions[question_counter].var2;
  variants[2].innerHTML = questions[question_counter].var3;
  variants[3].innerHTML = questions[question_counter].var4;

  let style = `linear-gradient(90deg, rgba(171, 255, 46,1) 0%, rgba(171, 255, 46,1) ${
    (100 * question_counter) / questions.length
  }%, rgba(171, 255, 46,0) ${(100 * question_counter) / questions.length}%)`;
  // console.log(style);
  progress_line.style.background = style;
}

for (let item of choice_btn) {
  item.addEventListener("click", function () {
    // console.log(event.target.dataset.number);
    if (event.target.dataset.number == questions[question_counter].propper) {
      score.innerHTML = +(+score.innerHTML + 100);
      event.target.classList.add("green");
    }
    question_counter++;
    fresh();
  });
}
