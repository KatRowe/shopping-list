var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElementFromInput() {
	createListElement(input.value);
	input.value = "";
}

function createListElement(label) {
	var li = document.createElement("li");
	var deleteButton = document.createElement("button");
	deleteButton.appendChild(document.createTextNode('delete'));
	li.appendChild(document.createTextNode(label));
	li.appendChild(deleteButton);
	deleteButton.addEventListener('click', deleteItem);
	li.addEventListener('click', toggleDone);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElementFromInput();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElementFromInput();
	}
}

function toggleDone(event) {
	event.target.classList.toggle('done');
}

function deleteItem(event) {
	event.stopPropagation();
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

['Notebook', 'Jelly', 'Spinach', 'Rice', 'Birthday cake', 'Candles'].forEach(function (label) {
	createListElement(label);
});

