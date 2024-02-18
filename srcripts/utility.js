/* get inner text value with number */
function getInnerTextValueFromId(elementId) {
    const element = document.getElementById(elementId)
    elementValue = parseInt(element.innerText)
    return elementValue
}

/* set inner text on element id with value */
function setInnerTextWithIdAndValue(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}
