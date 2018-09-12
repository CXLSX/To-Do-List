var ulEntry = document.getElementById("ulEntry");
var addEntry = document.getElementById("addEntry");

addEntry.addEventListener('submit', todoList);
	
function todoList(){
	var entryInput = document.getElementById("entryInput").value;
	var newLi = document.createElement("li");
	newLi.className = "list-group-item";
	newLi.appendChild(document.createTextNode(entryInput));
  	var deleteBtn = document.createElement('button');
  	deleteBtn.className = 'btn btn-danger btn-sm float-right delete fas fa-trash-alt';
  	//deleteBtn.appendChild(document.createTextNode(''));
  	newLi.appendChild(deleteBtn);
  	ulEntry.appendChild(newLi);
	document.getElementById("entryInput").value = "";
	
	deleteBtn.addEventListener('click', function(e) {
        newLi.parentNode.removeChild(newLi);
    }, false);
    newLi.appendChild(deleteBtn);
}



