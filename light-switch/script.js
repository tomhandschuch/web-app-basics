const button = document.querySelector("#toggleButton");
const body = document.body;

button.addEventListener("click", function() {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        document.title = "Good Night";
    } else {
        document.title = "Good Morning";
    }
});