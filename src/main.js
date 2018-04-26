// DOM location for output
const output = document.querySelector(".output")

// Fragment to hold everything
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input component
const inputFieldFactory = (classList, defaultPlaceholderText, type, value) => {
    const inputField = document.createElement("input")
    inputField.classList = classList
    inputField.value = value
    inputField.placeholder = defaultPlaceholderText
    inputField.setAttribute("type", type)
    return inputField
}

// Create button component
const buttonFactory = (classList, textContent) => {
    const theButton = document.createElement("button")
    theButton.classList = classList
    theButton.textContent = textContent
    return theButton
}

createCardButton.addEventListener("click", function() {
    const userEntry = cardTextInput.textContent
})

buttonFactory(("button--submit"), "Create Card")
fragment.appendChild(inputFieldFactory("input--text", "Enter card text here", "text"))

// Attach event listener to button


// Get value of input field
// Create card component with text inside

// Create card component

//
