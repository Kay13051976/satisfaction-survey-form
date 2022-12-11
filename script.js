const ratingContainer = document.querySelector(".ratings-container");
const ratings = document.querySelectorAll(".rating");
const panel = document.getElementById("panel");
const sendBtn = document.getElementById("send");

let selected;

ratingContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selected = e.target.nextElementSibling.innerHTML;
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
  <img src="img/Screenshot 2022-12-11 at 14.32.36.png" class="img-complete">
  <strong>Thank you for calling</strong>
  <br>
  <strong>Conclusion : ${selected}</strong>`;
});
