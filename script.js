const Btn = document.getElementById("Btn");
const True = document.querySelectorAll(".True");


Btn.addEventListener("click", function () {
    for (let i = 0; i < True.length; i++) {
        True[i].checked = true;
    }
})