const card_content_start = document.querySelector(".card__content_start");
const card_content_end = document.querySelector(".card__content_end");
const formRating = document.querySelector(".form-rating");
const ratings = document.getElementsByName("rating");
const ratingResult = document.getElementById("result_rate");
const btnSubmit = document.getElementById("btn-submit");

formRating.addEventListener("submit", (e) => {
  e.preventDefault();
  let rated = Array.from(ratings).find((rating) => rating.checked);
  ratingResult.innerHTML = rated.value;
  onSubmit();
});

const onSubmit = () => {
  card_content_start.style.display = "none";
  card_content_end.classList.remove("hidden");
};
