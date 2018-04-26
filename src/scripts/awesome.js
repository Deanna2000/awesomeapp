// Bring in the DomBuilder functionality
// const DomBuilder = require("./DomBuilder")


// DOM location for output
const output = document.querySelector(".output")

// Fragment to hold everything
const fragment = document.createDocumentFragment()

// Create factory function to generate components
// Create input component
const inputFieldFactory = (classList, defaultPlaceholderText, type) => {
    const inputField = document.createElement("input")
    inputField.classList = classList
    // inputField.value = value
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

const cardFactory = (classList, textInputValue) => {
    const theSection = document.createElement("section")
    theSection.classList = classList
    theSection.textContent = textInputValue
    return theSection
}
const cardTextInput = inputFieldFactory("input--text", "Enter card text here", "text")
const createCardButton = buttonFactory("submit--button", "Create Card")

createCardButton.addEventListener("click", function() {
    const userEntry = cardTextInput.value
    output.appendChild(cardFactory("card", userEntry))
    cardTextInput.value = ""
})

buttonFactory(("button--submit"), "Create Card")
fragment.appendChild(cardTextInput)
fragment.appendChild(createCardButton)

// DomBuilder(fragment,".output")
output.appendChild(fragment)


// Attach event listener to button


// Get value of input field
// Create card component with text inside

// Create card component

//
