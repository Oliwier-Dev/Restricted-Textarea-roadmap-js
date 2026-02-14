const ui = {
    form:            document.querySelector("#form"),
    userInput:       document.querySelector("#userInput"),
    inputContainer:  document.querySelector("#containerUserInput"),
    characterCount:  document.querySelector("#characterCount")
};


ui.userInput.addEventListener("input", () => {
    ui.userInput.style.height = "auto";
    ui.userInput.style.height = ui.userInput.scrollHeight + "px";

    const maxChar = 250;
    ui.userInput.maxLength = maxChar

    const userChar = ui.userInput.value.length

    ui.characterCount.textContent = `${userChar}/${maxChar}`

    if (userChar >= maxChar) {
        ui.userInput.style.color = "red"
        ui.inputContainer.style.borderColor = "red"
        ui.characterCount.style.color = "red"
    } else {
        ui.userInput.style.color = "white"
        ui.characterCount.style.color = "white"
        ui.inputContainer.style.borderColor = "white"
    }
});

