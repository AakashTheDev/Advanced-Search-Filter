let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");
let inputValue = document.querySelector("input");
inputValue.addEventListener("keyup", function () {
  const searchTerm = inputValue.value.toLowerCase();
  console.log(searchTerm);
  lists.forEach((li) => {
    const liText = li.textContent.toLowerCase();
    if (liText.includes(searchTerm)) {
      li.style.display = "list-item";
    } else {
      li.style.display = "none";
    }
  });
});
