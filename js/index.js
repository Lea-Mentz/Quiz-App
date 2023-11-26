//const changeBookmarks = document.querySelector();
const bookmark = document.querySelectorAll('[data-js="bookmark-change"]');
const activeBookmark = "images/lesezeichen_orange.png";
const inactiveBookmark = "images/lesezeichen.png";

bookmark.forEach((item) => {
  item.addEventListener("click", (event) => {
    //bookmark.src = "images/lesezeichen_orange.png";
    const bookmarkSrc = item.nextElementSibling;

    console.log(bookmark);
    if (item.src == activeBookmark) {
      item.src = inactiveBookmark;
    } else {
      item.src = activeBookmark;
    }
    console.log(item.src);
  });
});
// if ("changeBookmarks" == false) {
//   document.querySelector(".question-card").slideUp();
// }
const answer = document.querySelectorAll(".answer-button");

answer.forEach((item) => {
  item.addEventListener("click", (event) => {
    const toggleBtn = item.nextElementSibling;
    toggleBtn.classList.toggle("hide");
  });
});
