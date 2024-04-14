function displayLetters (){
	const alpha = Array.from(Array(26)).map((e, i) => i + 65);
	const alphabet = alpha.map((x) => String.fromCharCode(x));

	alphabet.forEach(currentLetter => {
		let addLetter = document.createElement("a");
		addLetter.href = 'javascript:selectLetter("'+ currentLetter +'")';
		let addButton = document.createElement("button");
		addButton.className = "px-4 py-1.5 bg-yellow-500 rounded-full border";
		addButton.type = "button"
		addButton.id = currentLetter;
		addButton.innerHTML = currentLetter;
		addLetter.append(addButton);
		let myAlphabetSection = document.getElementById('alphabet');
	
		myAlphabetSection.append(addLetter);
		
	});
}
