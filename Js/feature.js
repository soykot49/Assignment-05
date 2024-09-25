
// get input value by id
function getInputValue(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
// get text value by id
function getTextValue(id) {
    const textValue = document.getElementById(id).innerText;
    return textValue;
}

// append child div creating for history

function appendToHistory(id, aidMoney,string) {
    const historyContainer = document.getElementById(id);
    const div = document.createElement('div');
    const h = document.createElement('h3');
    const p = document.createElement('p');
    h.innerText = ` ${aidMoney} ${string}`;
    h.classList = 'font-bold';
    div.classList= 'card border-2 p-4 shadow-xl';
    const today = new Date();
    "Date: " + today.toString();
    p.innerText = "Date: " + today.toString();
    div.appendChild(h);
    div.appendChild(p);
    historyContainer.appendChild(div);
    return div;
}


// toggle between donate and history

function showDiv(id) {
    document.getElementById('history').classList.add('hidden');
    document.getElementById('donation-card').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}
// selected button color

function selectButton(no) {
    const button1 = document.getElementById('donation-btn');
    const button2 = document.getElementById('history-btn');
    
    button1.classList.remove('bg-lime-300');
    button2.classList.remove('bg-lime-300');
    button1.classList.add('bg-gray-200');
    button2.classList.add('bg-gray-200');
    
    if (no === 1) {
        button1.classList.add('bg-lime-300');
        button1.classList.remove('bg-gray-200');
    } else {
        button2.classList.add('bg-lime-300');
        button2.classList.remove('bg-gray-200');
    }
}
