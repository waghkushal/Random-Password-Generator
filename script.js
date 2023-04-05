
const chars = "#%ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@1234567890";
let result = '';

function Generate() {

    let result = ' ';
    for (let i = 0; i < 12; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.querySelector(".para").value = result;
}

let btn = document.querySelector(".copyBtn");

function copy() {
    if (result != '') {
        btn.innerText = "copied"; // Change the text content of the button to "copied"
    }
    setTimeout(() => {
        btn.innerText = "copy"; // Change the text content of the button back to "copy" after 1.1 seconds
    }, 1100);
    let copyText = document.querySelector(".btns");

    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
        return navigator.clipboard.writeText(copyText.value);
    return Promise.reject('The Clipboard API is not available.');
}



