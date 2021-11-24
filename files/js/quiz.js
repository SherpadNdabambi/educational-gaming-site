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

function hideButtons(){
	buttons = document.getElementsByTagName("button");
	for(let i = 0; i < buttons.length; i++) buttons[i].style.display = "none";
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
			if(position > 350) setTimeout(nextQuestion(), 500);
			else card.style.zIndex++;
		}
		else{
			position += 5;
			card.style.left = position + "px";
		}
	}
}

function nextQuestion(){
	if(usedCards.length == 7){
		showResetButton();
		return;
	}
	let index = Math.floor(Math.random() * 7);
	while(usedCards.includes(index)) index = Math.floor(Math.random() * 7);
	usedCards.push(index);
	selectedCard = cards[index];
	moveCard(selectedCard);
}

function replace(card){
	let id = null, startPos = getInt(card.style.left), position = startPos;
	clearInterval(id);
	id = setInterval(frame, 5);
	function frame(){
		if(position == startPos - 700){
			clearInterval(id);
		}
		else{
			position -= 10;
			card.style.left = position + "px";
		}
	}
}

function replaceCards(){
	cards = document.getElementsByClassName("flip-card-inner");
	for(let i = 0; i < cards.length; i++) replace(cards[i]);
}

function resetQuiz(){
	multiplier = 1;
	replaceCards();
	score.innerHTML = 0;
	usedCards = [];
	homeButton.style.display = "block";
	resetButton.style.display = "none";
	startButton.style.display = "block";
}

function showResetButton(){
	homeButton.style.display = "block";
	resetButton.style.display = "block";
	buttonContainer.style.zIndex = 3;
}

function startQuiz(){
	nextQuestion();
	hideButtons();
}

function tick(){
	moveCard(selectedCard);
	score.innerHTML = parseInt(score.innerHTML) + multiplier++;
}