// Global Variables
let result;
let dataObj = {};
const form = document.getElementById("form");

form.addEventListener("submit", onFormSubmit);

// pushes all objects in 'cities' into 'result' which match user's selected continent 
function matchContinent() {
  for (let i = 0; i < cities.length; i++) { 
    for (const property in cities[i]) {
      // I would like to have this include matching the key also
      if (cities[i][property] === dataObj.continent) {
        result.push(cities[i])
      }
    }
  }
}

// sorts 'result' by 'userMonth'
function sunMonth() {
  let userMonth = dataObj.month;
  result.sort((a, b) => {
    return b[userMonth] - a[userMonth];
   });
}

// runs program when user submits form choices
function onFormSubmit(event) {
  result = [];
	event.preventDefault();
	const data = new FormData(event.target);
	dataObj = Object.fromEntries(data.entries());
  let userContinent = dataObj.continent;
  matchContinent();
  sunMonth();
  console.log(result)
	form.reset();
}



