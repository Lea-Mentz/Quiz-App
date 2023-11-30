const answerInput = document.querySelector('[data-js="answer"]');
const questionInput = document.querySelector('[data-js="question"]');

const submitButton = document.querySelector('[data-js="submitButton"]');

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newCard = document.createElement("section");
  cardContainer.append(newCard);
});
