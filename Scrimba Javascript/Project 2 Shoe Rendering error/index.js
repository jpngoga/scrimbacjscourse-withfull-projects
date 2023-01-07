let errporParagraph = document.getElementById("error");
console.log(errporParagraph);

function purchase() {
    console.log("button clicked");
    errporParagraph.textContent = "Something went wrog , please check"
}