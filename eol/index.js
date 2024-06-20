function fromOptionObjectIntoOptionElement(optionObject) {
    var optionElement = document.createElement("option");
    optionElement.value = optionObject.value;
    optionElement.innerHTML = optionObject.text;
    return optionElement;
}

function fromSelectObjectIntoSelectDiv(selectObject, optionObjects) {
    var selectElement = document.createElement("select");
    selectElement.id = selectObject.id;
    optionObjects.forEach((optionObject) => {
        selectElement.appendChild(fromOptionObjectIntoOptionElement(optionObject));
    });
    var labelElement = document.createElement("label");
    labelElement.appendChild(selectElement);
    labelElement.appendChild(document.createTextNode(" " + selectObject.text));
    var divElement = document.createElement("div");
    divElement.appendChild(labelElement);
    return divElement;
}

function scorer() {
    let score = 0;
    questions.forEach((question) => {
        let selectElement = document.getElementById(question.id);
        let selectedOption = selectElement.options[selectElement.selectedIndex];
        score += parseInt(selectedOption.value);
    });
    return score;
}

function update() {
    alert("Score: " + score);
}

window.onload = function run() {
    let parent = document.getElementById('questions');
    questions.forEach((question) => {
        console.log("question", question);
        parent.appendChild(fromSelectObjectIntoSelectDiv(question, severityOptions));
    });
}

