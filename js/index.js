// Global Variables
let result;
let userObj;
let userMonth;
const form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit);

// pushes all objects in 'cities' into 'result' which match user's selected continent 
function matchContinent() {
  for (let i = 0; i < cities.length; i++) { 
    for (const property in cities[i]) {
      // would like to have this include matching the key also
      if (cities[i][property] === userObj.continent) {
        result.push(cities[i])
      }
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

// runs program when user submits form choices
function onFormSubmit(event) {
  result = [];
  userObj = {};
	event.preventDefault();
	const data = new FormData(event.target);
	userObj = Object.fromEntries(data.entries());
  let userContinent = userObj.continent;
  matchContinent();
  sunMonth();
  printTable();
	form.reset();
}

// prints table of cities in html
function printTable() {
  result.forEach((e) => {
  let tableRow = document.createElement("tr");
  tableRow.innerHTML = `
      <td>${e.country}</td>
     <td>${e.city}</td>
     <td>${e[userMonth]}</td>
  ` ; 
    tableRow.className = "text-info font-monospace"
    document.getElementById("sun-table").appendChild(tableRow);
  });
}

// delete previous list when doing a new one
// keep up the continent and month for reference 