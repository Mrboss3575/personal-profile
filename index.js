const titles = document.querySelectorAll(".title");

titles.forEach((title) => {
  const childContentId = title.textContent.toLowerCase().split(" ").join("-");
  title.onmouseover = () =>
    (document.getElementById(childContentId).style.display = "flex");
  title.onmouseleave = () =>
    (document.getElementById(childContentId).style.display = "none");
});

