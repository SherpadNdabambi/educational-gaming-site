let cards = [auroraCard, grandCanyonCard, greatBarrierReefCard, guanabaraBayCard, mountEverestCard, paricutinCard, victoriaFallsCard];

function move(element){
	let id = null, position = 0;
	clearInterval(id);
	id = setInterval(frame, 5);
	function frame(){
		if(position == 350){
			clearInterval(id);
			element.style.transform = "rotateY(180deg)";
			element.style.zIndex = 1;
		}
		else{
			position++;
			element.style.left = position + "px";
		}
	}
}

function startQuiz(){
	let index = Math.floor(Math.random() * 7), selectedCard = cards[index];
	move(selectedCard);
}