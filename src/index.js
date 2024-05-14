let myLeads = [];

const inputElement = document.getElementById("inputElement");
const leadList = document.getElementById("leadList");

const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("dblclick", deleteLead);

const saveBtn = document.getElementById("saveBtn");
saveBtn.addEventListener("click", saveLead);

const leads = JSON.parse(localStorage.getItem("myLeads"));
if (leads) {
  myLeads = leads;
  displayLeads();
}

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

function deleteLead() {
  localStorage.clear();
  myLeads = [];
  displayLeads();
}
