// alert('this works')

let backdrop = document.querySelector(".backdrop");
let modal = document.querySelectorAll(".modal");
// console.dir(backdrop);

let selectPlanButton = document.querySelectorAll(".plan button");
for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
}

// console.dir(selectPlanButton)
