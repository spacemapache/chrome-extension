let myLeads = [];

const inputElement = document.getElementById("inputElement");
const leadList = document.getElementById("leadList");

let saveBtn = document.getElementById("btn");
saveBtn.addEventListener("click", saveLead);

let leads = JSON.parse(localStorage.getItem("myLeads"));

function saveLead() {
  myLeads.push(inputElement.value);
  displayLeads();
  inputElement.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  displayLeads();
}

function displayLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a href="${myLeads[i]}" target="_blank">
    ${myLeads[i]}
    </a>
    </li>`;
    console.log(listItems);
  }
  leadList.innerHTML = listItems;
}
