let myLeads = [];

const inputElement = document.getElementById("inputElement");
const leadList = document.getElementById("leadList");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const saveTabBtn = document.getElementById("saveTabBtn");
const leadsLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tab = [{ url: "https://linkedin.com" }];

deleteBtn.addEventListener("dblclick", deleteLead);
saveBtn.addEventListener("click", saveLead);
saveTabBtn.addEventListener("click", saveTab);

if (leadsLocalStorage) {
  myLeads = leadsLocalStorage;
  display(myLeads);
}

function display(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
    <a href="${leads[i]}" target="_blank">
    ${leads[i]}
    </a>
    </li>`;
  }
  leadList.innerHTML = listItems;
}

function saveLead() {
  myLeads.push(inputElement.value);
  display();
  inputElement.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  display(myLeads);
}

function deleteLead() {
  localStorage.clear();
  myLeads = [];
  display(myLeads);
}

function saveTab() {
  myLeads.push(tab[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  display(myLeads);
}
