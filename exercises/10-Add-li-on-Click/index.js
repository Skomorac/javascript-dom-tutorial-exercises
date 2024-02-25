let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	let newLi = document.createElement('li');
	newLi.innerHTML = "Forth element";
	let parentUl = document.querySelector("#myList");
	parentUl.appendChild(newLi);
});
