// Global Variables
let result;
let userObj;
let userMonth;
let clearElement;
const form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit);

// pushes all objects in 'cities' into 'result' which match user's selected continent
function matchContinent() {
  for (item of cities) {
    if (item.continent === userObj.continent) {
      result.push(item);
    }
  }
}

// sorts 'result' by 'userMonth'
function sunMonth() {
  userMonth = userObj.month;
  result.sort((a, b) => {
    return b[userMonth] - a[userMonth];
  });
}

// prints table of cities in html
function printTable() {
  result.forEach((e) => {
    let tableRow = document.createElement("tr");
    // backlog: find a more secure way to do this
    tableRow.innerHTML = `
      <td>${e.country}</td>
      <td>${e.city}</td>
      <td>${e[userMonth]}</td>
  `;
    tableRow.className = "text-info font-monospace";
    tableRow.id = "result";
    document.getElementById("sun-table").appendChild(tableRow);
  });
}

// clears previous table if there is one
// can clean up 'clearElement' and 'removeThing' - confusing
function clearTable() {
  clearElement = document.getElementById("result");
  if ( clearElement === null){
    console.log("no list yet")
  }
  else {
      for (let i = 0; i < result.length; i++){
        removeThing = document.getElementById("result")
        removeThing.remove();
      }
    }
  }

// runs program when user submits form choices in form
function onFormSubmit(event) {
  clearTable();
  userObj = {};
  result = [];
  event.preventDefault();
  const data = new FormData(event.target);
  userObj = Object.fromEntries(data.entries());
  matchContinent();
  sunMonth(); 
  printTable();
  // form.reset();
}
