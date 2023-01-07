// 

const inputBtn = document.getElementById("input-btn");
let myLeads = ["www.awesomelead.com", "www.epiclead", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");

let ulEl = document.getElementById("ul-el");


inputBtn.addEventListener("click", function() {
    //push the value from the input into the myLeads array
    //instead of the hard-coded "www.awesomeLeadds.com" value 
    //Google -> "get value from field Javascript"

    myLeads.push(inputEl.value);
    console.log(myLeads);

})

// Log out the items in myLeads array using for loop
//render the leads

let listItems = "";
for (let i = 0; i < myLeads.length; i++) {

    listItems += "<li>" + myLeads[i] + "</li>"
        //create element
        //text content
        //append to ul
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li)

}

ulEl.innerHTML = listItems;
// use .innerHTML to render a Buy! button inside the div container

// const container = document.getElementById("container");

// container.innerHTML = "<button>Buy</button>"