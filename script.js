document.addEventListener("DOMContentLoaded", generateTable);

function generateTable() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      document.querySelector(
        "main"
      ).innerHTML += `<div class="field ${i} ${j}">${i * j}</div>`;
    }
  }

  var fields = document.querySelectorAll(".field");
  fields.forEach((field) => {
    field.addEventListener("mouseover", () => {
      field.style.backgroundColor = "#8679b8";
      var class1 = field.classList[1];
      var class2 = null;
      if (field.classList.length === 2) {
        class2 = class1;
      } else {
        class2 = field.classList[2];
      }

      fields.forEach((field) => {
        if (field.classList.length !== 2) {
          if (field.classList[1] === class1 || field.classList[2] === class2) {
            if (
              !(field.classList[1] === class1 && field.classList[2] === class2)
            ) {
              field.style.backgroundColor = "#9e96be59";
            }
          }
        } else {
          if (field.classList[1] === class1 || field.classList[1] === class2) {
            if (
              !(field.classList[1] === class1 && field.classList[1] === class2)
            ) {
              field.style.backgroundColor = "#9e96be59";
            }
          }
        }
      });
    });

    field.addEventListener("mouseout", () => {
      fields.forEach((field) => {
        field.style.backgroundColor = "#ccc";
      });
    });
  });
}
