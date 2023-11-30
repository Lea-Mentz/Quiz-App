const bookmark = document.querySelectorAll('[data-js="bookmark-change"]');
const activeBookmark = "images/lesezeichen_orange.png";
const inactiveBookmark = "images/lesezeichen.png";
let isactiveBookmark = true;

bookmark.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (isactiveBookmark) {
      item.src = inactiveBookmark;
    } else {
      item.src = activeBookmark;
    }
    isactiveBookmark = !isactiveBookmark;
  });
});

const answer = document.querySelectorAll(".answer-button");

answer.forEach((item) => {
  item.addEventListener("click", (event) => {
    const toggleBtn = item.nextElementSibling;
    toggleBtn.classList.toggle("hide");

    function checkIfActive() {
      if (toggleBtn.classList.contains("hide")) {
        item.innerHTML = "Show answer";
      } else {
        item.innerHTML = "Hide answer";
      }
    }
    checkIfActive();
  });
});
console.log();
