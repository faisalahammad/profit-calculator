let calculate = document.querySelector("#calculate");
// let inputs = document.querySelector("input");
let reset = document.querySelector("#reset");

// Calculation target dom
let result = document.querySelector(".result");
let amount = document.querySelector(".amount");
let percentage = document.querySelector(".percentage");

// Show/Hide
reset.style.display = "none";

calculate.addEventListener("click", function (e) {
	let purPrice = document.querySelector("#purPrice").value;
	let sellPrice = document.querySelector("#sellPrice").value;

	if (purPrice == "" || sellPrice == "") {
		alert("Both value is required for calculation!");
	} else {
		// Main Calculation
		let profit = sellPrice - purPrice;
		let profitPerc = ((profit / purPrice) * 100).toFixed(2);

		let message = `Total profit will be <b>${profit}tk</b> that means <b>${profitPerc}%</b>.`;
		result.innerHTML = message;

		reset.style.display = "block";

		reset.addEventListener("click", (e) => {
			location.reload();
			e.preventDefault();
		});
	}

	e.preventDefault();
});
