/* js/script.js */
const l = console.log

const buttonsRating = window.document.querySelectorAll("button.rate");
const firstCard = window.document.querySelector('div.card-rating');
const secondCard = window.document.querySelector('div.card-thanks')
let rating;

buttonsRating.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    rating = parseInt(this.textContent);
  })
});

const selectedRate = window.document.querySelector("div.selected-rate");

function submit(event) {
  if(rating === undefined) {
    alert("select a rate");
  } else {
    const selectedRateText = `You selected ${rating} Out of 5`;
    selectedRate.textContent = selectedRateText;
    firstCard.classList.add("hidden");
    secondCard.classList.remove("hidden");
  }
}