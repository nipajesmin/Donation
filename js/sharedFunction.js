
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionById(id){
    // hide all the sections
    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');
    
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden');
}



function showSectionById(id) {
    // Hide both sections
    document.getElementById('donation-part').classList.add('hidden');
    document.getElementById('history-part').classList.add('hidden');
    
    // Show the specified section
    document.getElementById(id).classList.remove('hidden');
}