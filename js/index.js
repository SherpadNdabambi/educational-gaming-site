function myFunction(number){
	if(!(number % 15)) return "HunhuUbuntu";
	if(!(number % 3)) return "Hunhu";
	if(!(number % 5)) return "Ubuntu";
	return number;
}

function processNumbers(){
	let fromNumber = parseInt(fromInput.value), toNumber = toInput.value;

	output.innerHTML = myFunction(fromNumber);
	for(let i = fromNumber + 1; i <= toNumber; i++){
		output.innerHTML += ", " + myFunction(i);
	}
}