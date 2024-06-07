// Global Variables
const result = [];
let dataObj = {};
// user puts their info into the form and it creates an array
// I have the code for this

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
  console.log(result);
}

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	dataObj = Object.fromEntries(data.entries());
  let userContinent = dataObj.continent;
  matchContinent();
	form.reset();
}



// iterate through the entire array
// if the value of continent ===  value of the key continent in the user array, push it into an new array 
// if object.coutry === (user input), push it! 

// let result = [   ]


// then we will do the sunshine hours 