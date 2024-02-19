/* get inner text value with number type of */
function getInnerTextValueFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = parseInt(element.innerText)
    return elementValue
}

/* get inner text from id */
function getInnerTextFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    return elementText
}

/* set inner text on element id with value */
function setInnerTextWithIdAndValue(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}

/* get value from input id */
function getInputValueFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = element.value
    return elementValue
}