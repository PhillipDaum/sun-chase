const form = document.getElementById("form");
let userArray = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();
	const data = new FormData(event.target);
	const dataObject = Object.fromEntries(data.entries());

	//above is boiler plate code
	userArray.push(dataObject);
	console.log(userArray);
	form.reset();
}


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
