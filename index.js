const dictionaryList = new Set();

// HTML elements
let inputElement = document.getElementById("dictionaryInput");
let saveElement = document.getElementById("save");
let searchElement = document.getElementById("search");
let messageElement = document.getElementById("message");


//buttons click functions
function saveWord() {
    console.log("Saving...")
    dictionaryList.add(inputElement.value.toLowerCase());
    saveWordMsg();
    inputElement.value ="";
};

function searchWord() {
    console.log("Searching...");
    if(dictionaryList.has(inputElement.value.toLowerCase())) { 
        showFoundWord();
    } else {
        showNotFoundWord();
    }

}

//view elements functions
function showFoundWord() { 
    messageElement.innerHTML = `<h2 class='text-success'>The word '${inputElement.value}' is in dictionary!<h2>`;
};

function showNotFoundWord() { 
    messageElement.innerHTML = `<h2 class='text-danger'>The word '${inputElement.value}' is not in dictionary!<h2>`;
};

function saveWordMsg() {
    messageElement.innerHTML = `<h2 class='text-primary'>The word '${inputElement.value}' is saved!<h2>`;
};

// onclick event on elements
saveElement.onclick = saveWord;
searchElement.onclick = searchWord;