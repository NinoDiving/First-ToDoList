const inputText = document.getElementById("input-text");
const listContainer = document.getElementById("list-Container");
const deleteBtn = document.getElementById("deleteBtn");

function addTask() {
  // @ts-ignore
  if (inputText.value === "") {
    alert("Vous n'avez rien ajoutez !");
  } else {
    let li = document.createElement("li");
    // @ts-ignore
    li.innerHTML = inputText.value;
    listContainer?.appendChild(li);
  }

  // @ts-ignore
  inputText.value = "";
  saveData();
}

// @ts-ignore
listContainer.addEventListener("click", (e) => {
  // @ts-ignore
  if (e.target.tagName === "LI") {
    // @ts-ignore
    e.target.classList.toggle("checked");
    saveData();
  }
});

// @ts-ignore
deleteBtn.addEventListener("click", () => {
  const checkedItems = document.querySelectorAll("li.checked");
  checkedItems.forEach((items) => {
    items.remove();
  });
  saveData();
});

function saveData() {
  // @ts-ignore
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  // @ts-ignore
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
