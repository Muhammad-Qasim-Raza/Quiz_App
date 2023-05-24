const quizForm = document.getElementById('quiz-form');
const resultDiv = document.getElementById('result');

quizForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const answers = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value,
    quizForm.q6.value,
    quizForm.q7.value,
    quizForm.q8.value,
    quizForm.q9.value,
    quizForm.q10.value,
  ];

  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (userAnswers[i] === answers[i]) {
      score++;
    }
  }

  const resultPercentage = (score / answers.length) * 100;
  const resultMessage = `You scored ${score} out of ${answers.length}. (${resultPercentage}%)`;

  resultDiv.textContent = resultMessage;
});
