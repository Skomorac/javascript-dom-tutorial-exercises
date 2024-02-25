let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	let newElement = document.createElement('div');
	newElement.innerHTML = 'Hello World';
	newElement.style.background = 'yellow';
	document.body.appendChild(newElement);
	
});
