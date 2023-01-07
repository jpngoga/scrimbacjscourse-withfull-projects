// 
let myLeads = [];
let oldLeads = [];


// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epiclead.com")

// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)

// console.log(myLeads);

const inputBtn = document.getElementById("input-btn");

const inputEl = document.getElementById("input-el");
let ulEl = document.getElementById("ul-el");

const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

//Grab the save Tab btn and store it in a tab variable
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads)

}

const tabs = [
        { url: "https://www.linkedin.com/in/ngoga-jean-paul-billy-%E6%AF%94%E5%88%A9-1a7525111/" }
    ]
    //listen for clickes on tabbtn log link's url to the console

tabBtn.addEventListener("click", function() {

    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })


})

function render(leads) {
    let listItems = "";
    for (let i = 0; i < leads.length; i++) {

        listItems +=
            `<li> 
                <a  target='_blank' href = '${leads[i]}'> ${leads[i]}</a>
            </li>`


    }
    ulEl.innerHTML = listItems;
}

deleteBtn.addEventListener("click", function() {

    console.log("double clicked");

    localStorage.clear();
    myLeads = [];
    render(myLeads)


})






inputBtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads);

    console.log(localStorage.getItem("myLeads"))

})

// Log out the items in myLeads array using for loop
//render the leads