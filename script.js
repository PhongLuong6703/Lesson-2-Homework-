const Btn = document.getElementsByClassName("Btn");
const True = document.querySelectorAll(".True");


Btn.addEventListener("click", function () {
    for (let i = 0, i < True.length, i++) {
        True[i].checked = true;
    }
})