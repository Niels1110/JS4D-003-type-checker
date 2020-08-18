// When selecting the input tag, mathc up
// with your CSS file - input[type="text"]
const controlInput = document.querySelector(`input[type="text"]`);
const textArea = document.querySelector(".text-area");
const typeSize = document.querySelector(`input[name="type-size"]`)
const lineHeight = document.querySelector(`input[name="line-height"]`)
const fontWeight = document.querySelector(`input[name="font-weight"]`)
const originalText = textArea.value
const italicTag = document.querySelector(`input[type="checkbox"]`)
const fontFaceFam = document.querySelector(`select[name="typeface"]`)
const colorBlock = document.querySelectorAll('.colors div')
const outputArea = document.querySelector(".output")

// Set the text from the Control
controlInput.addEventListener('keyup', () => {

    // If there's content in the input fields,
    // use that content in the text area
    if (controlInput.value) {
        textArea.value = controlInput.value
    
    // Else, set the text content in the text area
    // to the original text when the page lodead
    } else {
        textArea.value = originalText
    }
})

// Update the input field txt if we edit the 
// text in the large text area
textArea.addEventListener('keyup', () => {
        controlInput.value = textArea.value
      
})

typeSize.addEventListener("input", () => {
    textArea.style.fontSize = typeSize.value + "px"
    document.querySelector(".size-output").textContent = typeSize.value + "px"
})


fontWeight.addEventListener("input", () => {
    textArea.style.fontWeight = fontWeight.value
    document.querySelector(".weight-output").textContent = fontWeight.value

})

lineHeight.addEventListener("input", () => {
    textArea.style.lineHeight = lineHeight.value
    document.querySelector(".leading-output").textContent = lineHeight.value

})

italicTag.addEventListener("change", () => {
    if (italicTag.checked) {
        console.log("Checked")
        textArea.style.fontStyle = "italic"
    } else {
        textArea.style.fontStyle = "normal"

    }
})

fontFaceFam.addEventListener("input", () => {
    textArea.style.fontFamily = fontFaceFam.value
})


// Go through all the color tags
colorBlock.forEach(color => {

    // Listen for a click event
    color.addEventListener('click', function() {

        // on click, update the bg of the output and text color
        // of the text area
        outputArea.style.backgroundColor = color.style.backgroundColor;
        textArea.style.color = this.style.color;
        
        
        // Then, to only allow one colorBlock to be
        // selected at a time, first
        // remove the 'selected' class form all the tags
        colorBlock.forEach(color => {
            color.classList.remove('selected')
        })

        // then reapply the selected class to that
        // specific block you clicked
        this.classList.add('selected')
    }
    )
}) 