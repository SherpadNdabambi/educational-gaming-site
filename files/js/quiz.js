let cards = [auroraCard, grandCanyonCard, greatBarrierReefCard, guanabaraBayCard, mountEverestCard, paricutinCard, victoriaFallsCard], usedCards = [], multiplier = 1, selectedCard;

function cross(){
	moveCard(selectedCard);
	multiplier = 1;
}

function flipCard(card){
	if(card.style.transform == "rotateY(180deg)") card.style.transform = "rotateY(0deg)";
	else card.style.transform = "rotateY(180deg)";
}

function getInt(value){
	if(value == '') return 0;
	return parseInt(value.replace("px", ''));
}

function moveCard(card){
	let id = null, startPos = getInt(card.style.left), position = startPos;
	clearInterval(id);
	id = setInterval(frame, 5);
	function frame(){
		if(position == startPos + 250){
			flipCard(card);
		}
		if(position == startPos + 350){
			clearInterval(id);
			card.style.zIndex = 1;
<<<<<<< HEAD
			if(position > 350) setTimeout(nextQuestion(), 500);
			else card.style.zIndex++;
=======
>>>>>>> 5fac3c26179edd350d060444d9c5696161fe32c0
		}
		else{
			position += 5;
			card.style.left = position + "px";
		}
	}
}

<<<<<<< HEAD
function nextQuestion(){
	if(usedCards.length == 7) return;
=======
function startQuiz(){
>>>>>>> 5fac3c26179edd350d060444d9c5696161fe32c0
	let index = Math.floor(Math.random() * 7);
	while(usedCards.includes(index)) index = Math.floor(Math.random() * 7);
	usedCards.push(index);
	selectedCard = cards[index];
	moveCard(selectedCard);
}

function tick(){
	moveCard(selectedCard);
	score.innerHTML = parseInt(score.innerHTML) + multiplier++;
}