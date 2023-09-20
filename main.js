// Alternating the pages by button clicks

const ratePage = document.querySelector("#rate-page");
const rateAgainPage = document.querySelector("#rate-again-page");
const rateBtn = document.querySelector("#rate-btn");
const rateAgainBtn = document.querySelector("#rate-again-btn");

rateBtn.addEventListener("click", () => {
  ratePage.classList.add("remove");
  rateAgainPage.classList.remove("remove");
});

rateAgainBtn.addEventListener("click", () => {
  ratePage.classList.remove("remove");
  rateAgainPage.classList.add("remove");
});

// Displaying the rate
let rate = document.querySelector("#rating");
const ratingBtns = document.querySelectorAll("[data-rating]");

ratingBtns.forEach((ratingBtn) => {
  ratingBtn.addEventListener("click", () => {
    const rating = ratingBtn.textContent;
    rate.textContent = rating;
  });
});
