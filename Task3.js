function checkAnswer(answer) {
    const result = document.getElementById("result");
    result.textContent = answer === 4 ? "Correct!" : "Try again.";
}

function getJoke() {
    fetch("https://official-joke-api.appspot.com/jokes/random")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").textContent = data.setup + " " + data.punchline;
        });
}
