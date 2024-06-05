const form = document.getElementById("form");
let userArray = [];
let result = []; 

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	//above is boiler plate code
	userArray.push(dataObject);
	console.log(userArray);
	form.reset();

  let sunMonth = userArray[0].month;
  console.log(typeof sunMonth, sunMonth);
  for (let i = 0; i < cities.length; i++) {
    // why is this undefined?
    console.log(cities[i].sunMonth);
    console.log(sunMonth);
  }

}




// first lets produce all of the results with the same continent
// for loop - count through all of these
// if the cities[i].continent === userArray[0].continent
// then push that into result
// variable =  is prolly just gonna be cities[i]. - the whole thing??? 
// result.push(variable) -- it does one of these each loop


// another variable will be let sunmonth = userArray.month




// function to show what cities are likely to have sun right now
// function sunshineUS() {
//   for (var k = 0; k < cities.length; k++) {
//     //if the one with the number length you are on
//     for (cities.length[k] = ) {      
//     if (Country = 'United States') {
//             let printer = document.createElement('div')
//             console.log([k].City);
//             printer.innerHTML = cities[k].City;
//             printer.className = "text-warning fs-3 ms-3 mb-2 font-monospace lh-sm";
//             document.getElementById("USsunshine").appendChild(printer)

//           }
//         }
//       }
// }
